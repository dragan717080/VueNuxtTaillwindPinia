<template>

  <div class="w-full">
  
    <section class="pt-20">
      <p class="text-3xl font-bold text-center text-gray-800">
        Leadership
      </p>
      <p class="mb-32 text-xl font-normal text-center text-gray-500">
        Explore the faces behind the tech magic
      </p>
      <div class="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-center">
        <div 
          v-for="(item, index) in leadership" 
          :key="index"
          class="relative p-4"
        >
          <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
            <a href="#" class="relative block">
              <img 
                :alt=item.name 
                :src="require(`~/assets/img/founders/${item.img}`)"
                class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white"
              />
            </a>
          </div>
          <div class="w-80 px-8 py-4 pt-24 bg-white rounded-lg shadow cover-gradient-2">
            <div class="text-center">
              <p class="text-2xl text-gray-800">
                {{ item.name }}
              </p>
              <p class="text-xl font-light text-gray-500 pb-8">
                {{ item.position }}
              </p>
            </div>
            <!-- Social icons -->
            <div class="flex items-center px-auto justify-center w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                <!-- LinkedIn -->
              <a :href="item.linkedin">
                <svg 
                  width="30" 
                  height="30" 
                  fill="currentColor" 
                  class="text-xl transition-colors duration-200 hover:text-gray-800" 
                  viewBox="0 0 1792 1792" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden bg-neutral-100">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="pb-4 text-2xl text-neutral-800 font-semibold">Our Backers</h3>
        <div 
          v-for="(item, index) in backers" 
          :key="index"
          data-aos="fade-up" 
          class="flex flex-wrap items-center justify-center"
        >
          <a :href="item.url">
            <LandingPartnerImage
              :img="item.logo"
              :alt="item.name"
            />
          </a>
        </div>
      </div>
    </section>

</div>

</template>
  
<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'AboutUsPage',
  components: {},
  mixins: [aosMixin],
  data() {
    return {
      leadership: [
        {
          name: 'Kristian Talviste',
          position: 'CEO, Founder',
          img: 'kristian.png',
          linkedin: 'https://www.linkedin.com/in/kristian-talviste/'
        },
        {
          name: 'Seda Harutyunyan',
          position: 'COO, Co-Founder',
          img: 'seda.png',
          linkedin: 'https://www.linkedin.com/in/sedaharutyunyan/'
        },
        {
          name: 'Raido Kurvits',
          position: 'CTO, Co-Founder',
          img: 'raido.png',
          linkedin: 'https://www.linkedin.com/in/raido-kurvits-48672890/'
        }
      ],
      backers: [
        {
          name: 'icebreaker',
          logo: 'icebreaker.png',
          url: 'https://www.icebreaker.vc'
        }
      ]
    }
  }
}
</script>