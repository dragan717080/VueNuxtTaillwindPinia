<template>

    <div class="w-full pb-20">
        <div class="relative rounded-lg max-w-screen-xl h-full p-4 px-4 mx-auto sm:px-6 lg:px-8 py-26 lg:mt-20 cover-gradient-2 sm:cover-gradient">
            <div class="relative">
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                        <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-700 sm:text-3xl sm:leading-9">
                            We are DataWizard
                        </h4>
                        <p class="mt-4 text-lg leading-6 text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                </div>
                            </li>
                            <li class="mt-6 lg:mt-0">
                                <div class="flex">
                                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                        <div class="relative space-y-4">
                            <div class="flex items-end justify-center space-x-4 lg:justify-start">
                                <img 
                                    class="w-32 rounded-lg shadow-lg md:w-56" 
                                    width="200" 
                                    :src="require('~/assets/img/careers/kingfisher-min.png')"
                                    alt="1"
                                />
                                <img 
                                    class="w-40 rounded-lg shadow-lg md:w-64" 
                                    width="260" 
                                    :src="require('~/assets/img/careers/work-1-min.png')"
                                    alt="2"
                                />
                            </div>
                            <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                <img 
                                    class="w-24 rounded-lg shadow-lg md:w-40" 
                                    width="170" 
                                    :src="require('~/assets/img/careers/sprout-min.png')"
                                    alt="3"
                                />
                                <img 
                                    class="w-32 rounded-lg shadow-lg md:w-56" 
                                    width="200"
                                    :src="require('~/assets/img/careers/work-2-min.png')"
                                    alt="4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add list of benefits to the bulletpoint list above -->
        <!-- Add a list of office location at some point of time -->
        <!-- Add careers list based on some data -->
    </div>


</template>
  
<script>

import aosMixin from '@/mixins/aos'

export default {
    name: 'CareersPage',
    components: {},
    mixins: [aosMixin],
}

</script>