<template>
  <section>
    <user-input
      @submit-secret="submitSecret"
      @submit-hash="submitHash"
    ></user-input>
    <submitted-secret
      v-if="intent === 'submit'"
      :secret="actualSecret"
    ></submitted-secret>
    <revealed-secret
      v-if="intent === 'reveal'"
      :secret="actualSecret"
    ></revealed-secret>
  </section>
</template>

<script>
import axios from 'axios';
import UserInput from './components/UserInput.vue';
import SubmittedSecret from './components/SubmittedSecret.vue';
import RevealedSecret from './components/RevealedSecret.vue';
export default {
  components: { UserInput, SubmittedSecret, RevealedSecret },
  data() {
    return {
      secretInput: '',
      timesToReveal: null,
      intent: null,
      hash: '',
      expires: null,
      actualSecret: {},
    };
  },

  methods: {
    async submitHash(intent, hash) {
      this.intent = intent;
      this.hash = hash;
      const resp = await axios.get('http://localhost:3000/api/secret/' + hash);

      const expiration = Date.parse(resp.data.expiresAt);

      if (expiration < Date.now()) {
        return (this.actualSecret = { error: 'This secret has expired.' });
      } else {
        this.actualSecret = resp.data;
      }
    },
    async submitSecret(intent, text, times, expires) {
      this.intent = intent;

      const response = await axios.post('http://localhost:3000/api/secret', {
        secretInput: text,
        expireAfterViews: times,
        expireAfter: expires,
      });
      this.actualSecret = response.data.secret;
    },
  },
};
</script>

<style></style>
