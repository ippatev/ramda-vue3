# ramda-vue3
A wrapper for integrating ramda to Vuejs

Docs ramda: https://ramdajs.com/docs/

# How to use it?
```js
npm install --save ramda-vue
```
Add to you main.js
```js
import { createApp } from "vue";
import App from "./App.vue";
import ramdaVue from "ramda-vue";

createApp(App)
  .use(ramdaVue)
  .mount("#app");
```
