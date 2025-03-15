import { defineStore } from "pinia";

interface WeatherState {
  weatherData: Record<string, any>;
  isLoading: boolean;
  isDoneLoading: boolean;
  error: string | null;
}

export const useWeatherStore = defineStore<"weatherStore", WeatherState>(
  "weatherStore",
  {
    state: (): WeatherState => ({
      weatherData: {},
      isLoading: false,
      isDoneLoading: false,
      error: null,
    }),
    actions: {
      async fetchWeather() {
        this.isLoading = true;
        this.isDoneLoading = false;
        this.error = null;

        const url: string = import.meta.env.VITE_APP_ENDPOINT;

        const options = {
          method: "GET",
        };

        await fetch(url, options)
          .then((res) => res.json())
          .then((json) => {
            this.isLoading = false;
            this.weatherData = json;
            this.isDoneLoading = true;
          })
          .catch((err) => (this.error = err));
      },
    },
  }
);
