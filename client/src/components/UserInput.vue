<template>
  <section>
    <form>
      <h1>SECRET SERVER</h1>
      <div class="form-control">
        <h2>What would you like to do?</h2>
        <div>
          <input id="intention" name="int" type="radio" value="submit" v-model="intent" />
          <label for="intention">Submit a secret</label>
        </div>
        <div>
          <input id="intention" name="int" type="radio" value="reveal" v-model="intent" />
          <label for="intention">Reveal a secret</label>
        </div>
      </div>
      <div
        v-if="intent === 'submit'"
        class="form-control"
        :class="{ invalid: secretValidity === 'invalid' }"
      >
        <label>Secret</label>
        <input type="text" placeholder="enter your secret" v-model="secret" />
      </div>
      <div
        v-if="intent === 'submit'"
        class="form-control"
        :class="{ invalid: secretValidity === 'invalid' }"
      >
        <label>Times to reveal</label>
        <input
          type="number"
          placeholder="enter the number of possible reveals"
          v-model="tToReveal"
        />
      </div>
      <div v-if="intent === 'submit'" class="form-control">
        <label>Expiration in minutes</label>
        <input
          type="number"
          placeholder="enter minutes (if 0 then never expires - default = 0)"
          v-model="expires"
        />
      </div>
      <div v-if="intent === 'reveal'" class="form-control">
        <label>Hash</label>
        <input type="text" placeholder="hash of the secret" v-model="hash" />
      </div>
      <p v-if="secretValidity === 'invalid'" :style="{ color: 'red' }">
        One or more input missing!
      </p>
      <button v-if="intent === 'submit'" @click="submitInput">Submit Secret</button>
      <button v-if="intent === 'reveal'" @click="submitHash">Submit Hash</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      secret: "",
      hash: "",
      tToReveal: null,
      expires: null,
      intent: null,
      secretValidity: "pending",
    };
  },
  methods: {
    submitInput(event) {
      event.preventDefault();
      if (this.secret === "" || this.tToReveal === null) {
        this.secretValidity = "invalid";
        return;
      }
      this.$emit("submit-secret", this.intent, this.secret, this.tToReveal, this.expires);
      this.secret = "";
      this.tToReveal = "";
      this.expires = "";
    },
    submitHash(event) {
      event.preventDefault();
      if (this.hash === "") {
        this.secretValidity = "invalid";
        return;
      }
      this.$emit("submit-hash", this.intent, this.hash);
      this.hash = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap");
form {
  font-family: Barlow, sans-serif;
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 1rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
