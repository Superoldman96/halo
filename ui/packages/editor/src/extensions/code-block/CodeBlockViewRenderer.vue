<script lang="ts" setup>
import { i18n } from "@/locales";
import {
  NodeViewContent,
  NodeViewWrapper,
  type NodeViewProps,
} from "@/tiptap/vue-3";
import { useTimeout } from "@vueuse/core";
import { computed } from "vue";
import BxBxsCopy from "~icons/bx/bxs-copy";
import RiArrowDownSFill from "~icons/ri/arrow-down-s-fill";
import RiArrowRightSFill from "~icons/ri/arrow-right-s-fill";
import IconCheckboxCircle from "~icons/ri/checkbox-circle-line";
import CodeBlockSelect from "./CodeBlockSelect.vue";

const props = defineProps<NodeViewProps>();

const languageOptions = computed(() => {
  let languages: Array<{
    label: string;
    value: string;
  }> = [];
  const lang = props.extension.options.languages;
  if (typeof lang === "function") {
    languages = lang(props.editor.state);
  } else {
    languages = lang;
  }
  languages = languages || [];
  const languageValues = languages.map((language) => language.value);
  if (languageValues.indexOf("auto") === -1) {
    languages.unshift({
      label: "Auto",
      value: "auto",
    });
  }
  return languages;
});

const selectedLanguage = computed({
  get: () => {
    return props.node?.attrs.language || "auto";
  },
  set: (language: string) => {
    props.updateAttributes({ language: language });
  },
});

const themeOptions = computed(() => {
  let themes:
    | Array<{
        label: string;
        value: string;
      }>
    | undefined = [];
  const theme = props.extension.options.themes;
  if (typeof theme === "function") {
    themes = theme(props.editor.state);
  } else {
    themes = theme;
  }

  if (!themes) {
    return undefined;
  }
  return themes;
});

const selectedTheme = computed({
  get: () => {
    return props.node?.attrs.theme || themeOptions.value?.[0].value;
  },
  set: (theme: string) => {
    props.updateAttributes({ theme: theme });
  },
});

const collapsed = computed<boolean>({
  get: () => {
    return props.node.attrs.collapsed || false;
  },
  set: (collapsed: boolean) => {
    props.updateAttributes({ collapsed: collapsed });
  },
});

const { ready, start } = useTimeout(2000, { controls: true, immediate: false });

const handleCopyCode = () => {
  if (!ready.value) return;
  const code = props.node.textContent;
  navigator.clipboard.writeText(code).then(() => {
    start();
  });
};
</script>
<template>
  <node-view-wrapper
    as="div"
    class="code-node mt-3 overflow-hidden rounded border-[1px]"
  >
    <div
      contenteditable="false"
      class="flex items-center justify-between border-b-[1px] border-b-gray-100 bg-neutral-100 py-1"
    >
      <div
        class="flex flex-1 items-center pl-3"
        @click.self="collapsed ? (collapsed = false) : null"
      >
        <div class="flex items-center pr-3">
          <div
            class="flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-zinc-200"
            @click.stop="collapsed = !collapsed"
          >
            <RiArrowRightSFill v-if="collapsed" />
            <RiArrowDownSFill v-else />
          </div>
        </div>
        <CodeBlockSelect
          v-model="selectedLanguage"
          class="w-48"
          :container="editor.options.element"
          :options="languageOptions"
          @select="editor.commands.focus()"
        >
        </CodeBlockSelect>
        <CodeBlockSelect
          v-if="themeOptions && themeOptions.length > 0"
          v-model="selectedTheme"
          :container="editor.options.element"
          class="w-48"
          :options="themeOptions"
          @select="editor.commands.focus()"
        >
        </CodeBlockSelect>
      </div>
      <div class="flex items-center pr-3">
        <div
          v-tooltip="
            ready
              ? i18n.global.t('editor.common.codeblock.copy_code')
              : i18n.global.t('editor.common.codeblock.copy_code_success')
          "
          class="flex h-8 w-8 cursor-pointer items-center justify-center rounded"
          :class="{ 'hover:bg-zinc-200': ready }"
          @click="handleCopyCode"
        >
          <IconCheckboxCircle v-if="!ready" class="h-4 w-4 text-green-500" />
          <BxBxsCopy v-else class="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
    <pre v-show="!collapsed"><node-view-content as="code" class="hljs" /></pre>
  </node-view-wrapper>
</template>
