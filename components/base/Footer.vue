<template>
  <footer class="max-w-screen-xl px-8 mx-auto z-100">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
        
        <div class="max-w-md md:w-auto lg:w-auto w-auto sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 lg:pr-12 md:pr-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
          <div class="sm:block xl:block mb-6 sm:mb-0">
            <a href="#">
              <img :src="require('~/assets/img/logo/logo-full-t-blue.png')" alt="DataWizard Logo" />
            </a>
          </div>
        </div>

        <div class="w-full w-auto md:hidden sm:hidden"></div>

        <div class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit px-8 py-6 border-l-none lg:border-l xl:border-l border-[#DDDDDD]">
          <ul class="space-y-4">
            <NavLink name="Products" url="/products" />
            <NavLink name="Solutions" url="/solutions" />
            <NavLink name="Pricing" url="/pricing" />
            <NavLink name="Resources" url="/docs" />
          </ul>
        </div>
        
        <div class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit px-8 py-6">
          <ul class="space-y-4">
            <NavLink name="About Us" url="/about-us" />
            <NavLink name="Careers" url="/careers" />
            <NavLink name="Help Center" url="/help" />
            <NavLink name="System Status" url="/status" />
            <NavLink name="Privacy Policy" url="/privacy-policy" />
          </ul>
        </div>
        
        <div class="md:w-full lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 border-[#DDDDDD]">

          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            Stay in the loop
          </p>
          
          <div class="flex items-center space-x-2">
            <input type="text" class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]" placeholder="Enter your email"/>
            <button class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">
              <ArrowRightIcon :size="20" />
            </button>
          </div>

        </div>

      </div>
    </div>
    <div class="py-8 sm:py-4 text-center text-xs text-[#666666] hover:text-gray-900">
      &copy; 2023 DataWizard Technologies OÜ. All rights reserved.
    </div>
  </footer>
</template>
<script>
export default {
  name: 'BaseFooter',
}
</script>
