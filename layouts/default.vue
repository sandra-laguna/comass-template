<template>
  <div class="relative w-full h-full bg-black pt-20 lg:pt-24">
    <app-navbar />

    <app-main>
      <transition mode="out-in">
        <nuxt :key="$route.fullPath" />
      </transition>
    </app-main>

    <app-footer />
  </div>
</template>
