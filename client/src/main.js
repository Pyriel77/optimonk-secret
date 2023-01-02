import { createApp } from "vue";
import App from "./App.vue";

import UserInput from "./components/UserInput.vue";
import SubmittedSecret from "./components/SubmittedSecret.vue";
import RevealedSecret from "./components/RevealedSecret.vue";

const app = createApp(App);

app.component("user-input", UserInput);
app.component("submitted-secret", SubmittedSecret);
app.component("revealed-secret", RevealedSecret);

app.mount("#app");
