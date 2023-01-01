<template>
  <section>
    <user-input @submit-secret="submitSecret"></user-input>
    <div v-for="secret in secrets" :key="secret.hash">
      <h2>{{ secret.secretText }}</h2>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import UserInput from "./components/UserInput.vue";
export default {
  components: { UserInput },
  data() {
    return {
      secrets: [],
    };
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/api/secret");
    this.secrets = response.data.secrets;
    console.log(this.secrets);
  },
};
</script>

<style></style>
