<template>
  <div>
    <section-hero />
    <section-services />
    <section-works />

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cømass | Nuxt.js + TailwindCSS proyect",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/` }]
    };
  }
};
</script>

