<template>
    <div class="border-t border-gray-300 py-4">
      <h4 class="text-lg font-semibold">{{ title }}</h4>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    },
  }
  </script>