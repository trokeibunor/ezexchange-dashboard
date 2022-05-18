import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";
import "../src/app.scss";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faArrowLeft, faArrowRight]);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(FontAwesomeIcon)
  .mount("#app");
