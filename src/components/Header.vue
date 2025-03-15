<script setup lang="ts">
import { NButton } from "naive-ui";
</script>

<template>
  <header
    class="w-full p-4 flex items-center justify-center gap-8 bg-slate-300"
  >
    <RouterLink to="/">
      <n-button strong primary> Home </n-button>
    </RouterLink>
    <RouterLink to="/weather">
      <n-button strong primary> Weather </n-button>
    </RouterLink>
  </header>
</template>
