import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { pinia } from "./pinia";
import { router } from "./router";

// Ensure naive ui styles override tailwind
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

createApp(App).use(pinia).use(router).mount("#app");
