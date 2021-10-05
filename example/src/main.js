import { createApp } from "vue";
import App from "./App.vue";
import ramdaVue from "ramda-vue";

createApp(App)
  .use(ramdaVue)
  .mount("#app");
