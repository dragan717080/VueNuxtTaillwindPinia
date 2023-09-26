<template>
  <div class="w-full">
    <div class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase">
            <!--Sign Up Today-->
          </span>
          <h1 data-aos="fade-right" data-aos-once="true" class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight sm:pr-8 xl:pr-10">
            <span class="text-header-gradient">All-in-one</span> comprehensive observability platform
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Access all your data in one place and make it actionable within the same platform. No need for multiple vendors!
          </p>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white shadow-md">
              Get started <span aria-hidden="true">→</span>
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/isometric-cloud-data.png')"
              class="-mt-4 pt-8"
              alt=""
            />
          </div>
        </div>
      </BaseSection>
    </section>

    <!-- Features section -->
    <section class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12">
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <div class="light:bg-white-800 light:text-darkgray-100">
          <div data-aos="fade-up" class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
              <h2 class="text-3xl font-extrabold sm:text-4xl">All the <span class="text-header-gradient">features</span> you need</h2>
              <p class="mt-4 text-lg dark:text-gray-400">Fragmentation of services across multiple third party vendors is what sparked the idea for DataWizard - the home of observability, giving you a wide array of functionalities to use within a single platform.</p>
            </div>
            <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              
              <!-- Row 1 -->
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Logs Management</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Centralized log collection and analysis for deep insights into application and system logs, enabling real-time issue detection and historical data analysis.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Metrics &amp; Monitoring</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Comprehensive metrics tracking and real-time monitoring to assess application and infrastructure performance, with customizable alerts and interactive data visualizations.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Distributed Tracing</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">End-to-end tracing of requests and transactions in microservices and distributed systems, facilitating the identification of latency bottlenecks and service interactions.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Application Performance Monitoring (APM)</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Instrument code, capture metrics, trace transactions, and identify performance bottlenecks for optimized code and correlated insights.</dd>
                </div>
              </div>
              
                <!-- Row 2 -->
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Error &amp; Exception Tracking</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Pinpoint issues promptly, reducing downtime and enhancing user satisfaction.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Infrastructure Monitoring</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Continuous monitoring of hosts, servers, and network infrastructure for performance, availability, and security, with real-time alerts and network traffic analysis.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Incident Management</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Stay in control during critical situations, coordinate responses, and ensure business continuity.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Alerting</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Notify stakeholders about critical errors and exceptions, integrating seamlessly with incident response and collaboration tools.</dd>
                </div>
              </div>

              <!-- Row 3 -->
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Test Governance</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Detect flaky tests and track their occurrences to ensure reliable and accurate testing results. On-demand test triggering and real-time monitoring to ensure software functions as expected.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Serverless Actions</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Simplify workflows and save resources with serverless functions, akin to Azure Functions, AWS Lambda, or GitHub Actions.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Cross-Cloud Load Balancing & Auto-Scaling</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Optimize performance and ensure high availability by evenly distributing traffic across multiple servers.</dd>
                </div>
              </div>
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div class="ml-3">
                  <dt class="text-lg font-medium">Easy Billing Managment</dt>
                  <dd class="hidden sm:block mt-2 dark:text-gray-400">Transparent and flexible pricing models based on usage. Choose from various tiers to match your organization's size and requirements, making observability both accessible and cost-effective.</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div> 
    </section>

  <!-- Value proposition section -->
    <section class="w-full my-24">
      <BaseSection>
        <ServiceFragmentation class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-xl font-semibold sm:pr-8 xl:pr-12">
            Why DataWizard?
          </h2>
          <h1 class="text-3xl font-semibold sm:pr-8 xl:pr-12">
            Fluent Bit, Grafana, Prometheus, AWS CloudWatch, DataDog, Rollbar, PagerDuty, database... <br class="hidden sm:block" />
            <span class="text-header-gradient">Sounds familiar?</span>
          </h1>
          <p class="paragraph text-justify">
            When different aspects of monitoring, logging, tracing, and performance analysis are spread across multiple 
            tools and vendors, it becomes harder to gain a comprehensive and unified view of system health. 
            This fragmentation can lead to inefficiencies in troubleshooting and diagnosing issues, increased operational 
            complexity, and slower incident response times. Moreover, it can hinder the ability to correlate events and 
            gain meaningful insights across the entire technology stack. Not to even mention the cost of each of them...
          </p>
        </div>
        <ServiceFragmentation data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <!-- Partners section
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['image1.png', 'image2.png', 'images in assets/img/partner folder']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>
    -->

    <!-- Demo section -->
    <div data-aos="fade-up" class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div 
          class="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#7aa9ed] to-blue-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        >
           <!--<svg 
            viewBox="0 0 1024 1024"  
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" 
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.5" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#FFFFFF" />
                <stop offset="1" stop-color="#FFFFFF" />
              </radialGradient>
            </defs>
          </svg> -->
          <div class="mx-16 max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Unlock the true potential of your data.</h2>
            <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Start using DataWizard today.</h2>
            <p class="mt-6 text-lg leading-8 text-white">DataWizard gives you the necessary tools to empower your data to drive success.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <BaseButton class="max-w-full px-8 py-4 bg-white shadow-md hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get started <span aria-hidden="true">→</span>
              </BaseButton>
            </div>
            <p class="my-7 text-lg tracking-tight bold text-white">Less than 1 minute setup.</p>
          </div>
          <div class="relative h-80">
            <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md ring-white/10" src="../assets/img/demo-placeholder.png" alt="App screenshot" width="1824" height="1080">
          </div>
        </div>
      </div>
    </div>

    <!-- Join our team section -->
    <section class="relative max-w-full overflow-hidden">
      <div class="bg-gradient-to-r from-[#468ef9] via-[#0c66ee] to-[#468ef9] overflow-hidden relative sm:px-32 lg:flex lg:px-32">
        <div class="text-center w-full mr: py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 class="text-2xl font-extrabold text-white sm:text-3xl">
                <span class="block">
                    Are you a builder ?
                </span>
                <span class="block text-white">
                    We&#x27;re building a rocket and want you on board.
                </span>
            </h2>
            <div class="lg:mt-0 lg:flex-shrink-0">
                <div class="mt-12 inline-flex rounded-md">
                    <BaseButton 
                      class="max-w-full px-8 py-4 bg-white shadow-md hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onclick="location.href='/careers'"
                    >
                      Browse careers <span aria-hidden="true">🚀</span>
                    </BaseButton>
                </div>
            </div>
        </div>
      </div>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700 shadow-lg"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
    
  </div>
</template>

<script>
import ServiceFragmentation from '../components/landing/ServiceFragmentation.vue';
import aosMixin from '@/mixins/aos'
export default {
    name: 'IndexPage',
    components: { ServiceFragmentation },
    mixins: [aosMixin],
    data() {
        return {
            selected: 0,
            dropdownConcurency: false
        };
    }
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.max-h-0 {
  max-height: 0;
}
</style>
