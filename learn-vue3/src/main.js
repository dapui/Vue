import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
//import AppCard from "./components/AppCard.vue"; // 전역 컴포넌트로 등록시 사용

const app = createApp(App);

// app.component('AppCard', AppCard); // 전역 컴포넌트로 등록시 사용

app.provide("app-message", "app message 입니다.");

app.config.globalProperties.msg = "hello"; // Vue3에서는 setup() 내에서 this로 접근할 수 없음
app.provide("msg", "hello msg");

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
