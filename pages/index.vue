<template>
  <div class="bg-black">
    <section-hero />
    <section-services />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tecnología, diseño y marketing | The Seed Squad",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/` }]
    };
  }
};
</script>
