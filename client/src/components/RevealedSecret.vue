<template>
  <section>
    <h1>{{ secret }}</h1>
  </section>
</template>

<script>
export default {
  props: ['secret'],
};
</script>

<style scoped>
section {
  font-family: Barlow, sans-serif;
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
</style>
