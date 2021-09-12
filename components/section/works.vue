<template>
  <div id="works" class="font-body bg-white text-black px-4">
    <div class="py-8 mx-auto lg:max-w-screen-xl">
      <h1 class="text-5xl font-extrabold pt-12 lg:pt-6"> Works. </h1>
      <p class="py-8 uppercase font-bold text-primary">THINGS WE'VE MADE</p>

     <div class="relative flex gap-4 lg:flex-row">
         <div v-for="(image, index) in images" :key="index" class="overflow-hidden">
         <img class="filter grayscale transform transition duration-300 cursor-pointer hover:scale-110 hover:filter-none" 
          :src="require(`@/assets/images/works/${image.url}.jpg`)" alt=""/>
          <p></p>
         </div>
     </div>
      
    </div>
  </div>
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
      ]
    };
  },
}
</script>