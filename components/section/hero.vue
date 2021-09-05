<template>
  <div id="hero" class="mx-auto text-white lg:max-w-screen-xl">
    <div class="w-full sm:w-1/2">
      <h1 class="mt-8 mx-4 text-6xl font-extrabold md:pt-24 lg:pt-64 lg:text-8xl"> We're a digital agency. </h1>
      <button
        class="
          btn
          my-12
          mx-4
          px-24
          py-8
          relative
          border border-primary
          text-sm
          font-semibold
          tracking-wider
          leading-none
          overflow-hidden
          hover:text-teal-600
        "
        type="button"
      >
        <span class="absolute inset-0 bg-primary"></span>
        <span class="absolute inset-0 flex justify-center items-center font-extrabold"> Getting Started </span>
      </button>
    </div>
    <div class="px-4 w-full flex flex-col gap-4 md:mt-20 lg:flex-row">
      <div class="cursor-pointer bg-primary px-12 py-10 lg:py-20">
        <img class="h-12" src="@/assets/icon/chart.svg" alt="chart" />
        <h2 class="font-extrabold text-2xl my-8">Future Vision.</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
      </div>
      <div class="cursor-pointer bg-secondary px-12 py-10 lg:py-20">
        <img class="h-12" src="@/assets/icon/rocket.svg" alt="rocket" />
        <h2 class="font-extrabold text-2xl mt-12 mb-8">Product Design.</h2>
        <p>There are many variations of passages of available, but the majority alteration in some form.</p>
      </div>
      <div class="cursor-pointer bg-secondary px-12 py-10 lg:py-20">
        <img class="h-12" src="@/assets/icon/pie-chart.svg" alt="pie-chart" />
        <h2 class="font-extrabold text-2xl mt-12 mb-8">Inovative Solutions.</h2>
        <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
      </div>
    </div>
  </div>
</template>


<style>
#hero {
  background-image: url("./assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-size: 55%;
  background-position-x: right;
}

.btn span:first-child {
  transform: translateX(-101%);
  transition: transform 0.3s ease-in;
}
.btn:hover span {
  transform: translateX(0);
}
</style>
