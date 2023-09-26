<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between pt-0">
          <a href="/">
            <div>
              <img
                :src="require('~/assets/img/logo/logo-full-t-blue.png')"
                href="./"
                class="w-40 xl:w-44"
                alt="DataWizard Logo"
              />
            </div>
          </a>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 pt-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <li class="product group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler('products')"
              @blur="dropdownToggler('products')"
            >
              <span>Products</span>
              <ChevronUpIcon v-if="dropdownProducts" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownProducts"
                class="absolute text-sm bg-white rounded-md lg:shadow-md grid w-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:absolute"
              >
                <div v-for="(item, index) in productItems" :key="index">
                  <li class="w-full h-full flex">
                    <a
                      :href="item.route"
                      class="block py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <svg v-if="item.icon_paths" class="w-6 h-6 text-gray-500" :fill="item.fill" viewBox="0 0 20 20">
                        <g v-for="ipath in item.icon_paths" :key="ipath.index">
                          <path :d="ipath" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </g>
                      </svg>
                      <div class="pl-1">
                        {{ item.title }}
                      </div>
                    </a>
                  </li>
                </div>
              </ul>
            </transition>
          </li>
          <NavLink name="Solutions" url="/solutions" />
          <NavLink name="Pricing" url="/pricing" />
          <li class="docs group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler('resources')"
              @blur="dropdownToggler('resources')"
            >
              <span>Resources</span>
              <ChevronUpIcon v-if="dropdownResources" :size="16" />
              <ChevronDownIcon v-else :size="16" />
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownResources"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <div v-for="(item, index) in resourceItems" :key="index">
                  <li class="w-full h-full flex">
                    <a
                      :href="item.route"
                      class="block py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <svg v-if="item.icon_paths" class="w-6 h-6 text-gray-500" :fill="item.fill" viewBox="0 0 20 20">
                        <g v-for="ipath in item.icon_paths" :key="ipath.index">
                          <path :d="ipath" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </g>
                      </svg>
                      <div class="pl-1">
                        {{ item.title }}
                      </div>
                    </a>
                  </li>
                </div>
              </ul>
            </transition>
          </li>
          <li class="w-full lg:hidden">
            <a
              href="/auth"
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#0cd3ff] hover:text-[#0c66ee] focus:outline-none focus:shadow-outline"
              >Sign Up</a
            >
          </li>
        </ul>
      </div>
      <client-only>
        <div v-if="!isLoggedIn && notOnLoginPage" class="space-x-3">
          <base-button
            class="hidden lg:block px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white"
          >
            <a href="/auth">Sign Up</a>
          </base-button>
        </div>
        <button
          v-if="isLoggedIn && notOnLoginPage"
          class="hidden lg:block bg-transparent rounded-lg text-[#0cd3ff] hover:text-[#0c66ee] focus:outline-none focus:shadow-outline"
          @click="logout"
        >
          Logout
        </button>
      </client-only>
      <!--<div :class="[open ? 'flex' : 'hidden lg:flex']" class=" space-x-3">
 <base-button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
          Login
        </base-button>
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
          Sign Up
        </base-button>
      </div>-->
    </div>
  </nav>
</template>
<script>
import store from '~~/store'
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownProducts: false,
      dropdownResources: false,
      productItems: [
        {
          icon_paths: [
            'M1.75 2a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1zM6.75 5.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM1 6.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 011 6.25zM1.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM1 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.75 2a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 9.75A.75.75 0 016.75 9h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 016 9.75zM6.75 12.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z',
          ],
          fill: 'black',
          title: 'Log Management',
          route: '/features/log-management',
        },
        {
          icon_paths: [
            'M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-9.5A2.25 2.25 0 0013.75 1H2.25zM1.5 3.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75H11V13a.75.75 0 00-1.5 0v.5h-3V13A.75.75 0 005 13v.5H2.25a.75.75 0 01-.75-.75v-1.19l4.636-3.708 3.586 1.345a.752.752 0 00.76-.122l2.487-1.99a.75.75 0 10-.938-1.17L9.864 7.647 6.28 6.303a.754.754 0 00-.754.116L1.5 9.64V3.25z',
          ],
          fill: 'black',
          title: 'Metrics & Monitoring',
          route: '/features/metrics-monitoring',
        },
        {
          icon_paths: [
            'M1 2.25C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25v11.5C7 14.44 6.44 15 5.75 15h-3.5C1.56 15 1 14.44 1 13.75V2.25zm1.5.25v11h3v-11h-3zM9 2.25C9 1.56 9.56 1 10.25 1h3.5c.69 0 1.25.56 1.25 1.25v3.5C15 6.44 14.44 7 13.75 7h-3.5C9.56 7 9 6.44 9 5.75v-3.5zm1.5.25v3h3v-3h-3zM10.25 9C9.56 9 9 9.56 9 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C15 9.56 14.44 9 13.75 9h-3.5zm.25 4.5v-3h3v3h-3z',
          ],
          fill: 'black',
          title: 'Powerful Dashboards',
          route: '/features/dashboards',
        },
        {
          icon_paths: [
            'M13 8.78c0 1.334.788 1.72 1.25 1.72a.75.75 0 010 1.5H1.75a.75.75 0 010-1.5c.462 0 1.25-.386 1.25-1.72V6.405C3 3.665 4.907 1 8 1s5 2.665 5 5.405V8.78zM4.5 6.405C4.5 4.275 5.938 2.5 8 2.5c2.062 0 3.5 1.776 3.5 3.905V8.78c0 .677.145 1.252.387 1.72H4.113c.242-.468.387-1.043.387-1.72V6.405z',
            'M6.898 12.872a.75.75 0 00-1.296.756A2.773 2.773 0 008 15c1.023 0 1.918-.55 2.398-1.372a.75.75 0 00-1.296-.756c-.219.374-.63.628-1.102.628-.473 0-.883-.254-1.102-.628z',
          ],
          fill: 'black',
          title: 'Alerting',
          route: '/features/alerting',
        },
        {
          icon_paths: [
            'M6.25 0C5.56 0 5 .56 5 1.25v3.5C5 5.44 5.56 6 6.25 6H7v1H1a.75.75 0 000 1.5h2.5V10H2.25C1.56 10 1 10.56 1 11.25v3.5c0 .69.56 1.25 1.25 1.25h3.5C6.44 16 7 15.44 7 14.75v-3.5C7 10.56 6.44 10 5.75 10H5V8.5h6V10h-.75C9.56 10 9 10.56 9 11.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25H12.5V8.5H15A.75.75 0 0015 7H8.5V6h1.25C10.44 6 11 5.44 11 4.75v-3.5C11 .56 10.44 0 9.75 0h-3.5zm4.25 11.5v3h3v-3h-3zm-8 0v3h3v-3h-3zm7-7v-3h-3v3h3z',
          ],
          fill: 'black',
          title: 'Distributed Tracing',
          route: '/features/distributed-tracing',
        },
        {
          icon_paths: [
            'M6.25 5C5.56 5 5 5.56 5 6.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C11 5.56 10.44 5 9.75 5h-3.5zm.25 4.5v-3h3v3h-3z',
            'M6.25.05a.7.7 0 01.7.7V2h2.1V.75a.7.7 0 111.4 0V2h1.3A2.25 2.25 0 0114 4.25v1.3h1.25a.7.7 0 110 1.4H14v2.1h1.25a.7.7 0 110 1.4H14v1.3A2.25 2.25 0 0111.75 14h-1.3v1.25a.7.7 0 11-1.4 0V14h-2.1v1.25a.7.7 0 11-1.4 0V14h-1.3A2.25 2.25 0 012 11.75v-1.3H.75a.7.7 0 110-1.4H2v-2.1H.75a.7.7 0 110-1.4H2v-1.3A2.25 2.25 0 014.25 2h1.3V.75a.7.7 0 01.7-.7zM3.5 4.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z',
          ],
          fill: 'black',
          title: 'APM',
          route: '/features/apm',
        },
        {
          icon_paths: [
            'M10.136.803a.75.75 0 011.061 1.06l-.415.416C11.525 2.932 12 3.853 12 4.909c0 .103-.005.205-.014.306.094.016.173.03.238.045a.973.973 0 01.776.951V6.6l1.571-.629a.75.75 0 01.557 1.393L13 8.214v1.13l1.849.246a.75.75 0 11-.198 1.487l-1.659-.221a3.935 3.935 0 01-.426 1.555l2.364.887a.75.75 0 01-.527 1.404l-2.667-1a.752.752 0 01-.12-.058C10.687 14.491 9.384 15 8 15s-2.687-.509-3.616-1.356a.752.752 0 01-.12.058l-2.667 1a.75.75 0 11-.527-1.404l2.364-.887a3.935 3.935 0 01-.426-1.555l-1.659.22a.75.75 0 01-.198-1.486L3 9.343V8.174L.971 7.363a.75.75 0 01.557-1.393L3 6.56V6.21c0-.474.334-.854.776-.95.065-.015.144-.03.238-.046C4.004 5.114 4 5.012 4 4.909c0-1.056.475-1.977 1.218-2.63l-.415-.415A.75.75 0 015.863.803l.695.694a4.318 4.318 0 012.884 0l.694-.694zm-4.63 4.26C6.133 5.026 6.946 5 8 5c1.054 0 1.867.026 2.494.063.004-.051.006-.102.006-.154C10.5 3.793 9.461 2.75 8 2.75S5.5 3.793 5.5 4.91c0 .05.002.102.006.153zM4.5 7.652v-.994C5.043 6.586 6.093 6.5 8 6.5s2.957.086 3.5.158v3.949c0 1.494-1.454 2.893-3.5 2.893-2.046 0-3.5-1.4-3.5-2.893v-.59-2.335-.03z',
          ],
          fill: 'black',
          title: 'Error & Exception Monitoring',
          route: '/features/errors-exceptions',
        },
        {
          icon_paths: [
            'M9.872 1.774a6.516 6.516 0 013.693 2.864.75.75 0 101.283-.777 8 8 0 10-9.054 11.83.75.75 0 10.412-1.441A6.505 6.505 0 011.52 8.5h2.503a10.929 10.929 0 001.396 4.619.75.75 0 001.307-.736A9.437 9.437 0 015.527 8.5h.723a.75.75 0 000-1.5h-.67C5.835 5.124 6.667 3.335 8 1.836a10.102 10.102 0 011.736 2.71.75.75 0 101.377-.593 11.442 11.442 0 00-1.241-2.18zm-3.744 0A6.508 6.508 0 001.576 7H4.07a11.095 11.095 0 012.06-5.226z',
            'M7.5 7.75A2.25 2.25 0 019.75 5.5h4A2.25 2.25 0 0116 7.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v7.5a.75.75 0 01-1.5 0v-7.5z',
            'M10.25 12a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0V13.5h1.5v1.75a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75h-3zM9.75 8.5a.75.75 0 01.75-.75h.25a.75.75 0 010 1.5h-.25a.75.75 0 01-.75-.75zM12.75 7.75a.75.75 0 000 1.5H13a.75.75 0 000-1.5h-.25zM9.75 10.5a.75.75 0 01.75-.75h.25a.75.75 0 010 1.5h-.25a.75.75 0 01-.75-.75zM12.75 9.75a.75.75 0 000 1.5H13a.75.75 0 000-1.5h-.25z',
          ],
          fill: 'black',
          title: 'Infrastructure Monitoring',
          route: '/features/infrastructure-monitoring',
        },
        {
          icon_paths: [
            'M 19.457031 7.738281 C 19.457031 6.734375 19.078125 5.773438 18.390625 5.039062 C 17.875 4.488281 17.222656 4.101562 16.507812 3.910156 C 16.515625 3.804688 16.523438 3.695312 16.523438 3.585938 C 16.523438 1.609375 14.914062 0 12.933594 0 C 11.722656 0 10.648438 0.605469 10 1.527344 C 9.351562 0.605469 8.277344 0 7.066406 0 C 5.085938 0 3.476562 1.609375 3.476562 3.585938 C 3.476562 3.695312 3.484375 3.804688 3.492188 3.910156 C 2.777344 4.097656 2.125 4.488281 1.609375 5.039062 C 0.921875 5.773438 0.542969 6.734375 0.542969 7.738281 C 0.542969 8.578125 0.804688 9.355469 1.253906 10 C 0.792969 10.660156 0.542969 11.445312 0.542969 12.261719 C 0.542969 14.09375 1.796875 15.640625 3.492188 16.085938 C 3.484375 16.195312 3.476562 16.304688 3.476562 16.414062 C 3.476562 18.390625 5.085938 20 7.066406 20 C 8.277344 20 9.351562 19.394531 10 18.472656 C 10.648438 19.394531 11.722656 20 12.933594 20 C 14.914062 20 16.523438 18.390625 16.523438 16.414062 C 16.523438 16.304688 16.515625 16.195312 16.507812 16.085938 C 18.203125 15.640625 19.457031 14.09375 19.457031 12.261719 C 19.457031 11.445312 19.207031 10.660156 18.746094 10 C 19.195312 9.355469 19.457031 8.578125 19.457031 7.738281 Z M 9.347656 13.402344 L 9.347656 16.414062 C 9.347656 17.671875 8.324219 18.695312 7.066406 18.695312 C 5.804688 18.695312 4.78125 17.671875 4.78125 16.414062 C 4.78125 16.34375 4.785156 16.273438 4.792969 16.207031 C 5.800781 16.132812 6.75 15.671875 7.433594 14.917969 L 6.464844 14.039062 C 5.964844 14.59375 5.246094 14.914062 4.5 14.914062 C 3.039062 14.914062 1.847656 13.722656 1.847656 12.261719 C 1.847656 11.796875 1.96875 11.347656 2.191406 10.953125 C 2.84375 11.417969 3.640625 11.695312 4.5 11.695312 L 4.5 10.390625 C 3.039062 10.390625 1.847656 9.203125 1.847656 7.738281 C 1.847656 6.511719 2.695312 5.460938 3.847656 5.167969 C 4.246094 5.972656 4.9375 6.621094 5.804688 6.945312 L 6.261719 5.726562 C 5.378906 5.394531 4.78125 4.535156 4.78125 3.585938 C 4.78125 2.328125 5.804688 1.304688 7.066406 1.304688 C 8.324219 1.304688 9.347656 2.328125 9.347656 3.585938 L 9.347656 7.503906 L 8.808594 7.503906 L 8.808594 6.597656 L 7.503906 6.597656 L 7.503906 7.503906 L 6.597656 7.503906 L 6.597656 8.808594 L 7.503906 8.808594 L 7.503906 9.347656 L 6.597656 9.347656 L 6.597656 10.652344 L 7.503906 10.652344 L 7.503906 11.191406 L 6.597656 11.191406 L 6.597656 12.496094 L 7.503906 12.496094 L 7.503906 13.402344 L 8.808594 13.402344 L 8.808594 12.496094 L 9.347656 12.496094 Z M 8.808594 11.191406 L 8.808594 8.808594 L 11.191406 8.808594 L 11.191406 11.191406 Z M 17.808594 10.953125 C 18.03125 11.347656 18.152344 11.796875 18.152344 12.261719 C 18.152344 13.722656 16.960938 14.914062 15.5 14.914062 C 14.753906 14.914062 14.035156 14.59375 13.535156 14.039062 L 12.566406 14.917969 C 13.25 15.671875 14.199219 16.132812 15.207031 16.207031 C 15.214844 16.273438 15.21875 16.34375 15.21875 16.414062 C 15.21875 17.671875 14.195312 18.695312 12.933594 18.695312 C 11.675781 18.695312 10.652344 17.671875 10.652344 16.414062 L 10.652344 12.496094 L 11.191406 12.496094 L 11.191406 13.402344 L 12.496094 13.402344 L 12.496094 12.496094 L 13.402344 12.496094 L 13.402344 11.191406 L 12.496094 11.191406 L 12.496094 10.652344 L 13.402344 10.652344 L 13.402344 9.347656 L 12.496094 9.347656 L 12.496094 8.808594 L 13.402344 8.808594 L 13.402344 7.503906 L 12.496094 7.503906 L 12.496094 6.597656 L 11.191406 6.597656 L 11.191406 7.503906 L 10.652344 7.503906 L 10.652344 3.585938 C 10.652344 2.328125 11.675781 1.304688 12.933594 1.304688 C 14.195312 1.304688 15.21875 2.328125 15.21875 3.585938 C 15.21875 4.535156 14.621094 5.394531 13.738281 5.726562 L 14.195312 6.945312 C 15.0625 6.621094 15.753906 5.972656 16.152344 5.167969 C 17.304688 5.460938 18.152344 6.511719 18.152344 7.738281 C 18.152344 9.203125 16.960938 10.390625 15.5 10.390625 L 15.5 11.695312 C 16.359375 11.695312 17.15625 11.417969 17.808594 10.953125 Z M 17.808594 10.953125',
          ],
          fill: 'black',
          title: 'AIOps',
          route: '/features/aiops',
        },
        {
          icon_paths: [
            'M7.235 1.123a6.041 6.041 0 00-3.303.25A6.02 6.02 0 001.26 3.326a5.988 5.988 0 00.515 7.929.75.75 0 001.055-1.066 4.482 4.482 0 01-.386-5.942A4.52 4.52 0 014.451 2.78a4.541 4.541 0 014.688.961 4.496 4.496 0 011.26 2.135.75.75 0 00.726.561h.83c.676 0 1.324.268 1.8.743a2.524 2.524 0 01-.418 3.914.75.75 0 00.812 1.262 4.024 4.024 0 00.665-6.239 4.051 4.051 0 00-2.859-1.18h-.28a5.998 5.998 0 00-1.504-2.285 6.028 6.028 0 00-2.936-1.529z',
            'M9.053 7.257a.75.75 0 00-1.106-1.014l-2.75 3a.75.75 0 00.316 1.218l3.403 1.135-1.969 2.147a.75.75 0 001.106 1.014l2.75-3a.75.75 0 00-.316-1.218L7.084 9.404l1.969-2.147z',
          ],
          fill: 'black',
          title: 'Cross-Cloud LB & Scaling',
          route: '/features/cross-cloud-lb-scaling',
        },
        {
          icon_paths: [
            'M9.375.078a.75.75 0 01.402.82l-.889 4.418 5.485.908a.75.75 0 01.44 1.236l-7.292 8.285a.75.75 0 01-1.298-.643l.889-4.418-5.485-.908a.75.75 0 01-.44-1.236L8.479.255a.75.75 0 01.896-.177zm-6.17 8.439l4.918.815a.75.75 0 01.612.887l-.489 2.433 4.548-5.169-4.917-.814a.75.75 0 01-.612-.888l.489-2.432-4.548 5.168z',
          ],
          fill: 'black',
          title: 'Serverless Actions',
          route: '/features/serverless-actions',
        },
        {
          icon_paths: [
            'M3.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z',
            'M0 4.25A2.25 2.25 0 012.25 2h11.5A2.25 2.25 0 0116 4.25v7.5A2.25 2.25 0 0113.75 14H2.25A2.25 2.25 0 010 11.75v-7.5zm14.5 0V5h-13v-.75a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75zm0 2.75h-13v4.75c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V7z',
          ],
          fill: 'black',
          title: 'Billing Management',
          route: '/features/flexible-billing',
        },
        {
          icon_paths: [
            'M7 11a1 1 0 011-1h.007a1 1 0 110 2H8a1 1 0 01-1-1zM8.75 5.75a.75.75 0 10-1.5 0v2.5a.75.75 0 101.5 0v-2.5z',
            'M.75 6.41L6.407.752a2.25 2.25 0 013.182 0l5.657 5.656a2.25 2.25 0 010 3.182l-5.657 5.657a2.25 2.25 0 01-3.182 0L.75 9.591a2.25 2.25 0 010-3.182zm6.718-4.597L1.81 7.47a.75.75 0 000 1.06l5.657 5.657a.75.75 0 001.06 0l5.657-5.656a.75.75 0 000-1.061L8.528 1.813a.75.75 0 00-1.06 0z',
          ],
          fill: 'black',
          title: 'Incident Management',
          route: '/features/incident-management',
        },
      ],
      resourceItems: [
        {
          icon_paths: [
            'M.5 2.75a2.25 2.25 0 114.28.97l1.345 1.344.284-.284a2.25 2.25 0 013.182 0l.284.284 1.344-1.344a2.25 2.25 0 111.06 1.06l-1.343 1.345.284.284a2.25 2.25 0 010 3.182l-.284.284 1.344 1.344a2.25 2.25 0 11-1.06 1.06l-1.345-1.343-.284.284a2.25 2.25 0 01-3.182 0l-.284-.284-1.344 1.344a2.25 2.25 0 11-1.06-1.06l1.343-1.345-.284-.284a2.25 2.25 0 010-3.182l.284-.284L3.72 4.781A2.25 2.25 0 01.5 2.75zM2.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM7.47 5.841a.75.75 0 011.06 0L10.16 7.47a.75.75 0 010 1.06L8.53 10.16a.75.75 0 01-1.06 0L5.84 8.53a.75.75 0 010-1.06L7.47 5.84z',
          ],
          title: 'API documentation',
          route: 'http://api.alertbird.io/docs',
        },
        {
          icon_paths: [
            'M5 8a1 1 0 011-1h.01a1 1 0 010 2H6a1 1 0 01-1-1zM10.01 7a1 1 0 000 2h.01a1 1 0 100-2h-.01z',
            'M8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM4 8a4 4 0 118 0 4 4 0 01-8 0z',
            'M2.25 0A2.25 2.25 0 000 2.25v11.5A2.25 2.25 0 002.25 16h11.5A2.25 2.25 0 0016 13.75V2.25A2.25 2.25 0 0013.75 0H2.25zM1.5 2.25a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v11.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V2.25z',
          ],
          title: 'SDK documentation',
          route: '/docs/sdk',
        },
        {
          icon_paths: [
            'M11.914 4.971a.7.7 0 00-.885-.885L6.154 5.71a.7.7 0 00-.443.443l-1.625 4.875a.7.7 0 00.885.885l4.875-1.625a.7.7 0 00.443-.443l1.625-4.875zm-6.057 5.172l1.071-3.215 3.215-1.071-1.071 3.215-3.215 1.071z',
            'M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z',
          ],
          title: 'Agent documentation',
          route: '/docs/agent',
        },
      ],
    }
  },
  computed: {
    notOnLoginPage() {
      /**
       * If current route is auth, hide the signup button from navbar
       * It makes no sense to allow click to the same page
       */
      return this.$route.path.split('/').slice(-1)[0] !== 'auth'
    },
    isLoggedIn: {
      get() {
        return store.isLoggedIn
      },
      set(value) {
        store.setIsLoggedIn(value)
      },
    },
  },
  methods: {
    dropdownToggler(dropdownName) {
      if (dropdownName === 'products') {
        this.dropdownResources = false
        this.dropdownProducts = !this.dropdownProducts
      } else if (dropdownName === 'resources') {
        this.dropdownProducts = false
        this.dropdownResources = !this.dropdownResources
      }
    },
    logout() {
      this.isLoggedIn = false
    },
  },
}
</script>
