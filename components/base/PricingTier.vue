<template>
  <div 
    class="w-64 p-4 m-4 rounded-2xl"
    :class="color + ' ' + getHighlight(highlight, promoText)"
  >
    <div v-if="highlight" class="absolute w-64 z-10 -mx-4 -my-16 p-1 font-bold text-center text-white bg-amber-500 rounded-full">
      {{ promoText }}
    </div>
    <div class="flex items-center justify-between text-white">
      <p class="mb-4 text-4xl font-medium">
        {{ title }}
      </p>
      <p v-if="price" class="flex flex-col text-center text-3xl font-bold">
        {{ price }}
        <span class="text-sm font-thin text-right">
          user/month
        </span>
      </p>
    </div>
    <p class="mt-4 text-white text-md">
      Plan includes:
    </p>
    <ul class="w-full mt-6 mb-6 text-sm text-white">
      <li 
        v-for="item, index in features" :key="index"
        class="mb-3 flex items-center "
      >
        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
          <path :d=getIconSVG(item.enabled)>
          </path>
        </svg>
        {{ item.title }}
      </li>
    </ul>
    <button type="button" class="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 ">
      {{ buttonText }}
    </button>
  </div>
</template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      price: {
        type: String,
        default: ''
      },
      features: {
        type: Array,
        default: () => []
      },
      buttonText: {
        type: String,
        default: ''
      },
      promoText: {
        type: String,
        default: ''
      },
      highlight: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'bg-indigo-500'
      }
    },
    data() {
      return {
        enabledFeatureSVG: "M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z",
        disabledFeatureSVG: "M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
      }
    },
    methods: {
      getIconSVG(enabled) {
        return (enabled) ? this.enabledFeatureSVG : this.disabledFeatureSVG
      },
      getHighlight(highlight, promoText) {
        if (highlight) {
          return "border-solid border-4 border-amber-500"
        }
      }
    }
  }
  </script>