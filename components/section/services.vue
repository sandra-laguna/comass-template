<template>
  <div id="services" class="font-body bg-white text-black px-4">
    <div class="py-8 mx-auto lg:max-w-screen-xl">
      <h1 class="text-5xl font-extrabold pt-12 lg:pt-28"> Services. </h1>
      <p class="py-8 uppercase font-bold text-primary"> We work with you, Not for you </p>

      <div class="py-4 font-bold grid grid-col-1 gap-6 lg:py-12 lg:grid-cols-3 lg:grid-rows-3">
        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Digitale strategy</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">UX Design</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Product Design</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Content Strategy</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Design & Concept</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Social Media</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Media Planing</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">Brand Identity</span>
        </div>

        <div class="service relative cursor-pointer overflow-hidden bg-gray-200 p-8 hover:bg-primary hover:text-white">
          <span class="absolute inset-y-0 right-8 items-center font-extrabold">
            <icon-arrow-right class="fill-current hover:text-white" />
          </span>
          <span class="absolute inset-y-0 left-8">SEO Optimization</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.service span:nth-child(1) {
  transform: translateX(-50%);
  transition: transform 0.1s ease-in;
}
.service span:nth-child(2) {
  transform: translateX(10%);
  transition: transform 0.1s ease-in;
}
.service span:nth-child(1),
.service span:nth-child(2) {
  display: flex;
  align-items: center;
}
.service:hover span {
  transform: translateX(0);
}
</style>
