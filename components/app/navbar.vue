<template>
  <nav class="font-body fixed top-0 inset-x-0 z-10 py-4 bg-secondary lg:py-8">
    <div class="flex items-center justify-between mx-auto px-4 lg:max-w-screen-xl">
      <nuxt-link to="/">
        <img class="h-8" src="@/assets/images/logo.svg" alt="logo" />
      </nuxt-link>

      <!-- Desktop -->
      <div class="hidden lg:flex lg:flex-row lg:text-lg">
        <nuxt-link
          v-for="(item, i) in itemsMenu"
          :key="i"
          class="flex flex-col items-center px-4 py-2 font-black text-md text-white rounded-md hover:bg-primary"
          :to="item.url"
        >
          {{ item.name }}
        </nuxt-link>
      </div>

     
     <div class="hidden lg:flex lg:flex-row lg:text-lg">
      <select v-model="$colorMode.preference">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>


      <!-- Mobile -->
      <div class="flex flex-row items-center lg:hidden">
        <div class="relative h-full hover:cursor-pointer" @click="toggle">
          <div class="h-full w-10 mx-4 py-2 rounded-md flex justify-center items-center sm:mx-0">
            <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="#fff" fill="#fff" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="#fff" fill="#fff" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              class="font-bold mx-4 origin-bottom-right absolute right-0 w-48 border bg-secondary focus:outline-none"
              v-show="isOpen"
            >
              <nuxt-link
                v-for="(item, i) in itemsMenu"
                :key="i"
                class="flex flex-col gap-y-4 px-4 py-2 bg-secondaryfont-body text-sm text-white"
                :to="item.url"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      itemsMenu: [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Works", url: "/works" },
        { name: "About", url: "/about" },
        { name: "Client", url: "/client" },
        { name: "Blog", url: "/blog" },
        { name: "Contact", url: "/contact" }
      ]
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>


