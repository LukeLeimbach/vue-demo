<script setup lang="ts">
import { NButton } from "naive-ui";
import Header from "./components/Header.vue";

import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#1E1E1E",
    primaryColorHover: "#3C3C3C",
    primaryColorPressed: "#000000",
    textColorBase: "#FFFFFF",
    bodyColor: "#121212",
  },
  Button: {
    textColor: "#FFFFFF",
    color: "#1E1E1E",
    borderColor: "#3C3C3C",
    hoverColor: "#3C3C3C",
    pressedColor: "#000000",
  },
};
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    class="min-h-screen relative"
  >
    <Header></Header>
    <router-view></router-view>
  </n-config-provider>
</template>
