<template>
  <div>
    <section-hero />
    <section-services />
    <section-separator />
    <section-works />
    <section-separator />
    <section-about />
    <section-separator />
    <section-testimonials />
    <section-letstalk />
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

