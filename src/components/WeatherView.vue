<script setup lang="ts">
import { useWeatherStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { NButton, NCard, NSkeleton } from 'naive-ui'

const weatherStore = useWeatherStore();
const { weatherData, isLoading, isDoneLoading, error } = storeToRefs(weatherStore);
const { fetchWeather } = weatherStore;
</script>

<template>
  <div class="p-8 flex flex-col gap-8 items-center justify-center h-full">
    <h1>Get is today's weather in Indianapolis</h1>
    <n-card>
      <template #header>
        <div class="w-full flex flex-col gap-4">
          <div class="flex items-center gap-2 justify-center">
            <span class="text-nowrap">Weather in</span>
            <n-skeleton v-if="!isDoneLoading" text width="10rem" />
            <span v-else>{{ weatherData.location.name }}</span>
          </div>
          
          <div class="flex items-center gap-2 justify-center">
            <template v-if="!isDoneLoading">
              <n-skeleton text width="2rem" height="2rem" />
              <n-skeleton text width="2rem" />
            </template>
            <template v-else>
              <img :src="weatherData.current.weather_icons[0]" class="w-[2rem] h-[2rem]" />
              <span>{{ weatherData.current.temperature }}°</span>
            </template>
          </div>
          <button>
            <n-button @click="fetchWeather" :disabled="isDoneLoading || isLoading">Fetch Weather</n-button>
          </button>
          <p class="text-center">The weather data is recorded in state</p>
        </div>
      </template>
    </n-card>
  </div>
</template>
