<template>
  <div id="client" class="font-body bg-white text-black px-4">
    <div class="pt-8 mx-auto flex flex-col-reverse gap-x-12 sm:flex-row sm:max-w-screen-xl xl:gap-x-24 xl:pt-20">
      <img class="sm:h-80 xl:h-auto xl:w-2/5" src="@/assets/images/clients/client_01.jpg" alt="client" />
      <div class="mx-auto xl:w-3/5 xl:py-8">
        <h1 class="text-5xl font-extrabold xl:pt-6"> What Clients Say. </h1>
        <p class="pt-8 uppercase font-bold text-primary"> WE'RE MORE THAN A DIGITAL AGENCY </p>

        <p class="my-6 text-gray-600 xl:my-24 xl:text-2xl">
          We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset
          Management is made up of a team of expert, committed and experienced people with a passion for financial
          markets. Our goal is to achieve continuous and sustainable growth of our clients.
        </p>

        <p class="pb-8 font-bold md:p-0"> ARON SMITH, UX DESIGNER </p>
      </div>
    </div>
    <div
      class="
        grid grid-cols-2 grid-rows-3
        gap-y-6 gap-x-12
        justify-items-center
        mx-auto
        max-w-screen-xl
        mt-8
        py-10
        border-t border-gray-300
        lg:flex lg:flex-row
        lg:justify-between
        lg:mt-16
        lg:py-20
      "
    >
      <img
        class="h-4 lg:h-5"
        v-for="(image, index) in images"
        :key="index"
        :src="require(`@/assets/images/clients/${image.url}.png`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: "01", text: "Noreal" },
        { url: "02", text: "norton" },
        { url: "03", text: "vorbes" },
        { url: "04", text: "friday" },
        { url: "05", text: "pantheon" },
        { url: "06", text: "horus" }
      ]
    };
  }
};
</script>
