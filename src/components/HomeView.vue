<script setup lang="ts">
import { NButton } from "naive-ui";
</script>

<template>
  <div class="p-8 flex flex-col gap-4 items-center justify-center h-full">
    <h1>Here's a dumb little demo</h1>
    <p>I'm trying to figure out the page router, Naive UI, and Pinia</p>
    <RouterLink to="/weather">
      <n-button>Go to the weather page</n-button>
    </RouterLink>
  </div>
</template>
