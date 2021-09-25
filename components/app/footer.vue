<template>
  <div class="w-full py-6 bg-black text-white">
    <div class="h-16 text-sm flex flex-col justify-center items-center gap-y-2 lg:flex-row lg:px-20 lg:justify-between">
      <div>
        <span class="text-gray-500">2021©</span>
        <a href="@">Cømass. </a>
        <span class="text-gray-500">All rights reserved.</span>
      </div>
      <ul class="flex gap-x-4 lg:justify-between">
        <li class="relative one">
          <a href="#" class="hover:text-primary">Terms of use</a>
          <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary"></span>
        </li>
        <li class="relative one">
          <a href="#" class="hover:text-primary">Privacy Policy</a>
          <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary"></span>
        </li>
        <li class="relative one">
          <a href="#" class="hover:text-primary">Cookie Policy</a>
          <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primary"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.one:hover span:last-child {
  width: 70%;
}
</style>
