<script lang="ts" setup>
import { usePermission } from "@/utils/permission";
import { useThemeStore } from "@console/stores/theme";
import { consoleApiClient, coreApiClient } from "@halo-dev/api-client";
import {
  IconBookRead,
  IconFolder,
  IconLink,
  IconPages,
  IconPalette,
  IconSettings,
  IconUserSettings,
  VModal,
} from "@halo-dev/components";
import { useEventListener } from "@vueuse/core";
import Fuse from "fuse.js";
import { storeToRefs } from "pinia";
import { computed, markRaw, onMounted, ref, watch, type Component } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter, type RouteLocationRaw } from "vue-router";

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const { currentUserHasPermission } = usePermission();
const { activatedTheme } = storeToRefs(useThemeStore());

const emit = defineEmits<{
  (e: "close"): void;
}>();

const modal = ref<InstanceType<typeof VModal> | null>(null);
const globalSearchInput = ref<HTMLInputElement | null>(null);
const keyword = ref("");

interface SearchableItem {
  title: string;
  icon: { component: Component } | { src: string };
  group?: string;
  route: RouteLocationRaw;
}

const searchableItem: SearchableItem[] = [];
const selectedIndex = ref(0);

const fuse = new Fuse(searchableItem, {
  keys: ["title", "group", "route.path", "route.name"],
  useExtendedSearch: true,
  threshold: 0.2,
});

const searchResults = computed((): SearchableItem[] => {
  return fuse
    .search(keyword.value, {
      limit: 20,
    })
    .map((result) => result.item);
});

const handleBuildSearchIndex = () => {
  fuse.remove(() => true);

  const routes = router.getRoutes().filter((route) => {
    return !!route.meta?.title && route.meta?.searchable;
  });

  routes.forEach((route) => {
    fuse.add({
      title: t(route.meta?.title as string),
      icon: {
        component: markRaw(IconLink),
      },
      group: t("core.components.global_search.groups.console"),
      route,
    });
  });

  if (currentUserHasPermission(["system:users:view"])) {
    coreApiClient.user
      .listUser({
        labelSelector: ["!halo.run/hidden-user"],
      })
      .then((response) => {
        response.data.items.forEach((user) => {
          fuse.add({
            title: user.spec.displayName,
            icon: {
              component: markRaw(IconUserSettings),
            },
            group: t("core.components.global_search.groups.user"),
            route: {
              name: "UserDetail",
              params: {
                name: user.metadata.name,
              },
            },
          });
        });
      });
  }

  if (currentUserHasPermission(["system:plugins:view"])) {
    coreApiClient.plugin.plugin.listPlugin().then((response) => {
      response.data.items.forEach((plugin) => {
        fuse.add({
          title: plugin.spec.displayName as string,
          icon: {
            src: plugin.status?.logo as string,
          },
          group: t("core.components.global_search.groups.plugin"),
          route: {
            name: "PluginDetail",
            params: {
              name: plugin.metadata.name,
            },
          },
        });
      });
    });
  }

  if (currentUserHasPermission(["system:posts:view"])) {
    coreApiClient.content.post.listPost().then((response) => {
      response.data.items.forEach((post) => {
        fuse.add({
          title: post.spec.title,
          icon: {
            component: markRaw(IconBookRead),
          },
          group: t("core.components.global_search.groups.post"),
          route: {
            name: "PostEditor",
            query: {
              name: post.metadata.name,
            },
          },
        });
      });
    });

    coreApiClient.content.category
      .listCategory({
        sort: ["metadata.creationTimestamp,desc"],
      })
      .then((response) => {
        response.data.items.forEach((category) => {
          fuse.add({
            title: category.spec.displayName,
            icon: {
              component: markRaw(IconBookRead),
            },
            group: t("core.components.global_search.groups.category"),
            route: {
              name: "Categories",
              query: {
                name: category.metadata.name,
              },
            },
          });
        });
      });

    coreApiClient.content.tag
      .listTag({
        sort: ["metadata.creationTimestamp,desc"],
      })
      .then((response) => {
        response.data.items.forEach((tag) => {
          fuse.add({
            title: tag.spec.displayName,
            icon: {
              component: markRaw(IconBookRead),
            },
            group: t("core.components.global_search.groups.tag"),
            route: {
              name: "Tags",
              query: {
                name: tag.metadata.name,
              },
            },
          });
        });
      });
  }

  if (currentUserHasPermission(["system:singlepages:view"])) {
    coreApiClient.content.singlePage.listSinglePage().then((response) => {
      response.data.items.forEach((singlePage) => {
        fuse.add({
          title: singlePage.spec.title,
          icon: {
            component: markRaw(IconPages),
          },
          group: t("core.components.global_search.groups.page"),
          route: {
            name: "SinglePageEditor",
            query: {
              name: singlePage.metadata.name,
            },
          },
        });
      });
    });
  }

  if (currentUserHasPermission(["system:attachments:view"])) {
    coreApiClient.storage.attachment.listAttachment().then((response) => {
      response.data.items.forEach((attachment) => {
        fuse.add({
          title: attachment.spec.displayName as string,
          icon: {
            component: markRaw(IconFolder),
          },
          group: t("core.components.global_search.groups.attachment"),
          route: {
            name: "Attachments",
            query: {
              name: attachment.metadata.name,
            },
          },
        });
      });
    });
  }

  if (
    currentUserHasPermission(["system:settings:view"]) &&
    currentUserHasPermission(["system:configmaps:view"])
  ) {
    coreApiClient.setting.getSetting({ name: "system" }).then((response) => {
      response.data.spec.forms.forEach((form) => {
        fuse.add({
          title: form.label as string,
          icon: {
            component: markRaw(IconSettings),
          },
          group: t("core.components.global_search.groups.setting"),
          route: {
            name: "SystemSetting",
            params: {
              group: form.group,
            },
          },
        });
      });
    });
  }

  if (currentUserHasPermission(["system:themes:view"])) {
    consoleApiClient.theme.theme
      .fetchThemeSetting({ name: "-" })
      .then(({ data: themeSettings }) => {
        themeSettings.spec.forms.forEach((form) => {
          fuse.add({
            title: [activatedTheme.value?.spec.displayName, form.label].join(
              " / "
            ),
            icon: {
              component: markRaw(IconPalette),
            },
            group: t("core.components.global_search.groups.theme_setting"),
            route: {
              name: "ThemeSetting",
              params: {
                group: form.group,
              },
            },
          });
        });
      });
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  const { key, ctrlKey } = e;

  if (key === "ArrowUp" || (key === "k" && ctrlKey)) {
    selectedIndex.value = Math.max(0, selectedIndex.value - 1);
    e.preventDefault();
  }

  if (key === "ArrowDown" || (key === "j" && ctrlKey)) {
    selectedIndex.value = Math.min(
      searchResults.value.length - 1,
      selectedIndex.value + 1
    );
    e.preventDefault();
  }

  if (key === "Enter") {
    const searchResult = searchResults.value[selectedIndex.value];
    handleRoute(searchResult);
  }

  if (key === "Escape") {
    modal.value?.close();
    e.preventDefault();
  }
};

const handleRoute = async (item: SearchableItem) => {
  // if route has query params, need router.go(0)
  if (typeof item.route !== "string" && "query" in item.route) {
    if ("name" in item.route && route.name === item.route.name) {
      await router.push(item.route);
      router.go(0);
      return;
    }
  }
  router.push(item.route);
  modal.value?.close();
};

watch(
  () => selectedIndex.value,
  (index) => {
    if (index > 0) {
      document.getElementById(`search-item-${index}`)?.scrollIntoView();
      return;
    }
    document.getElementById("search-input")?.scrollIntoView();
  }
);

watch(
  () => keyword.value,
  () => {
    selectedIndex.value = 0;
  }
);

onMounted(() => {
  handleBuildSearchIndex();

  setTimeout(() => {
    globalSearchInput.value?.focus();
  }, 100);
});

useEventListener("keydown", handleKeydown);
</script>

<template>
  <VModal
    ref="modal"
    :body-class="['!p-0']"
    :mount-to-body="true"
    :width="650"
    :centered="false"
    :layer-closable="true"
    @close="emit('close')"
  >
    <div id="search-input" class="border-b border-gray-100 px-4 py-2.5">
      <input
        ref="globalSearchInput"
        v-model="keyword"
        :placeholder="$t('core.components.global_search.placeholder')"
        class="w-full px-0 py-1 text-base outline-none"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
      />
    </div>
    <div class="px-2 py-2.5">
      <div
        v-if="!searchResults.length"
        class="flex items-center justify-center text-sm text-gray-500"
      >
        <span>{{ $t("core.components.global_search.no_results") }}</span>
      </div>
      <ul
        v-if="searchResults.length > 0"
        class="box-border flex h-full w-full flex-col gap-1"
        role="list"
      >
        <li
          v-for="(item, itemIndex) in searchResults"
          :id="`search-item-${itemIndex}`"
          :key="itemIndex"
          @click="handleRoute(item)"
        >
          <div
            class="flex cursor-pointer items-center rounded-md px-2 py-2.5 hover:bg-gray-100"
            :class="{ 'bg-gray-100': selectedIndex === itemIndex }"
          >
            <div class="inline-flex flex-1 items-center gap-3">
              <div class="h-5 w-5 rounded border p-0.5">
                <component
                  :is="item.icon.component"
                  v-if="'component' in item.icon"
                  class="h-full w-full"
                />
                <img
                  v-if="'src' in item.icon"
                  :src="item.icon.src"
                  class="h-full w-full object-cover"
                />
              </div>
              <span class="text-sm font-medium">{{ item.title }}</span>
            </div>
            <div class="flex-none flex-shrink-0 text-xs text-gray-500">
              {{ item.group }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="border-t border-gray-100 px-4 py-2.5">
      <div class="flex items-center justify-end">
        <span class="mr-1 text-xs text-gray-600">
          {{ $t("core.components.global_search.buttons.select") }}
        </span>
        <kbd
          class="mr-1 w-5 rounded border p-0.5 text-center text-[10px] text-gray-600 shadow-sm"
        >
          ↑
        </kbd>
        <kbd
          class="mr-5 w-5 rounded border p-0.5 text-center text-[10px] text-gray-600 shadow-sm"
        >
          ↓
        </kbd>
        <span class="mr-1 text-xs text-gray-600">
          {{ $t("core.common.buttons.confirm") }}
        </span>
        <kbd
          class="mr-5 rounded border p-0.5 text-[10px] text-gray-600 shadow-sm"
        >
          Enter
        </kbd>
        <span class="mr-1 text-xs text-gray-600">
          {{ $t("core.common.buttons.close") }}
        </span>
        <kbd class="rounded border p-0.5 text-[10px] text-gray-600 shadow-sm">
          Esc
        </kbd>
      </div>
    </div>
  </VModal>
</template>
