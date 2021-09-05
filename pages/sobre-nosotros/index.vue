<template>
  <h1 class="font-body font-black text-3xl text-black">About Us</h1>
</template>

<script>
export default {
  head() {
    return {
      title: "Sobre nosotros | Template",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/sobre-nosotros` }]
    };
  }
};
</script>
