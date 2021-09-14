<template>
  <div id="about" class="font-body bg-white text-black px-4">
    <div class="py-4 mx-auto lg:max-w-screen-xl">
      <icon-horizontal-line />
      <div class="lg:grid grid-rows-1 grid-cols-2">
        <h1 class="text-5xl font-extrabold pt-12 lg:pt-6"> About. </h1>
        <p class="py-4 uppercase font-bold text-primary col-start-1"> WE'RE MORE THAN A DIGITAL AGENCY </p>
        <p class="col-start-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti temporibus fuga earum asperiores,
          alias excepturi sit. Impedit, fugit laudantium.
        </p>
      </div>
      <!-- Gallery -->
      <div class="mt-8 md:grid grid-rows-2 grid-cols-3 gap-6">
        <img
          class="
            object-cover
            filter
            grayscale
            cursor-pointer
            hover:filter-none
            col-span-2
            row-span-2
            h-full
            my-4
            md:my-0
          "
          :src="require(`@/assets/images/about/${images[0].url}.jpg`)"
          alt=""
        />
        <img
          class="hidden object-cover filter grayscale cursor-pointer md:block hover:filter-none"
          :src="require(`@/assets/images/about/${images[1].url}.jpg`)"
          alt=""
        />
        <img
          class="hidden object-cover filter grayscale cursor-pointer md:block hover:filter-none"
          :src="require(`@/assets/images/about/${images[2].url}.jpg`)"
          alt=""
        />
      </div>

      <div class="flex flex-col mt-4 text-gray-600 lg:flex-row gap-x-20">
        <div>
          <h1 class="text-2xl font-bold text-black my-8"> Who we are </h1>
          <p class="leading-relaxed">
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going
            forward will have multiple touchpoints for offshoring.
          </p>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-black my-8"> Our philosophy </h1>
          <p class="leading-relaxed">
            A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud
            solution. User generated content in real-time.
          </p>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-black my-8"> How we work </h1>
          <p class="leading-relaxed">
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: "about_01", text: "work team" },
        { url: "about_02", text: "meet" },
        { url: "about_03", text: "office" }
      ]
    };
  }
};
</script>
