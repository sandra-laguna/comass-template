<template>
  <no-ssr>
    <div id="works" class="font-body bg-white text-black px-4">
      <div class="py-4 mx-auto lg:max-w-screen-xl">
        <icon-horizontal-line />
        <h1 class="text-5xl font-extrabold pt-12 lg:pt-6"> Works. </h1>
        <p class="py-4 uppercase font-bold text-primary">THINGS WE'VE MADE</p>

        <!-- Carousel mobile -->
        <carousel class="relative overflow-hidden flex flex-row lg:hidden" :items="1" :autoplay="true">
          <div v-for="(image, index) in images" :key="index" class="overflow-hidden">
            <img
              class="
                object-cover
                filter
                grayscale
                transform
                transition
                duration-300
                cursor-pointer
                hover:scale-110
                hover:filter-none
              "
              :src="require(`@/assets/images/works/${image.url}.jpg`)"
              alt=""
            />
          </div>
        </carousel>

        <!-- Carousel desktop -->
        <carousel class="hidden relative overflow-hidden lg:flex lg:flex-row" :autoplay="true">
          <div v-for="(image, index) in images" :key="index" class="overflow-hidden">
            <img
              class="
                object-cover
                filter
                grayscale
                transform
                transition
                duration-300
                cursor-pointer
                hover:scale-110
                hover:filter-none
              "
              :src="require(`@/assets/images/works/${image.url}.jpg`)"
              alt=""
            />
          </div>
        </carousel>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      images: [
        { url: "03-min", text: "Product design" },
        { url: "02-min", text: "Woody" },
        { url: "01-min", text: "Interior design" },
        { url: "04-min", text: "Electrica" },
        { url: "05-min", text: "Home design" },
        { url: "06-min", text: "Biker" }
      ]
    };
  }
};
</script>

<style>
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background-color: #e9204f;
}
.owl-carousel .owl-stage {
  display: flex;
}

.owl-nav {
  display: none;
}

.owl-dots {
  margin-top: 1em;
}

.owl-carousel .owl-item img {
  width: auto;
  height: 20em;
}
</style>
