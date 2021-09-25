<template>
  <div
    id="contact"
    class="relative bg-secondary flex flex-col justify-around items-center py-14 gap-y-6 lg:flex-row lg:py-24"
  >
    <div class="flex flex-row gap-x-2 lg:flex-row">
      <icon-facebook
        class="
          h-10
          w-10
          text-white
          fill-current
          rounded-full
          border-2 border-primary
          p-2
          cursor-pointer
          hover:text-primary
        "
      />
      <icon-twitter
        class="
          h-10
          w-10
          text-white
          fill-current
          rounded-full
          border-2 border-primary
          p-2
          cursor-pointer
          hover:text-primary
        "
      />
      <icon-instagram
        class="
          h-10
          w-10
          text-white
          fill-current
          rounded-full
          border-2 border-primary
          p-2
          cursor-pointer
          hover:text-primary
        "
      />
      <icon-github
        class="
          h-10
          w-10
          text-white
          fill-current
          rounded-full
          border-2 border-primary
          p-2
          cursor-pointer
          hover:text-primary
        "
      />
    </div>
    <p class="text-6xl font-bold">Let's Talk?</p>
    <button
      class="
        btn
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
      <span class="absolute inset-0 flex justify-center items-center font-extrabold"> Make an enquiry! </span>
    </button>
  </div>
</template>

<style>
.btn span:first-child {
  transform: translateX(-101%);
  transition: transform 0.3s ease-in;
}

.btn:hover span {
  transform: translateX(0);
}
</style>
