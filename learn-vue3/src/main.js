import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
//import AppCard from "./components/AppCard.vue"; // 전역 컴포넌트로 등록시 사용

const app = createApp(App);

// app.component('AppCard', AppCard); // 전역 컴포넌트로 등록시 사용

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
