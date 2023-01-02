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
      secrets: [],
      secretInput: '',
      timesToReveal: null,
      intent: null,
      hash: '',
      expires: null,
      actualSecret: {},
    };
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/api/secret');
    this.secrets = response.data.secrets;
    //console.log(this.secrets);
  },
  methods: {
    async submitHash(intent, hash) {
      this.intent = intent;
      this.hash = hash;
      const resp = await axios.get('http://localhost:3000/api/secret/' + hash);
      console.log(this.intent);
      this.actualSecret = resp.data;
    },
    async submitSecret(intent, text, times, expires) {
      this.secretInput = text;
      this.timesToReveal = times;
      this.intent = intent;
      this.expires = expires;

      const response = await axios.post('http://localhost:3000/api/secret', {
        //secret: secretInput,
        //expireAfterViews: reveals,
        //expireAfter: Date.now(),
        secretInput: text,
        reveals: times,
      });
      this.actualSecret = response.data.secret;
    },

    //console.log(response.data);
  },
};
</script>

<style></style>
