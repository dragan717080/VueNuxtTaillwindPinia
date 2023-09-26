<template>
    <div class="container z-5 mx-auto py-10">

        <div class="w-auto text-center justify-center pb-10">
            <h1 class="text-3xl font-semibold mb-6">Pricing</h1>
        </div>
    
        <!-- User Pricing Tiers -->
        <section class="flex items-center justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <PricingTier 
                v-for="item, index in userPricingTiers" 
                :key="index" 
                :title="item.title" 
                :price="item.price" 
                :features="item.features" 
                :button-text="item.buttonText" 
                :color="item.color" 
                :highlight="item.highlight" 
                :promo-text="item.promoText"
            />
        </section>

      <!-- Primary Features -->
      <div class="mt-10">
        <h2 class="text-xl font-semibold mb-4">Primary Features</h2>
        <PricingFeature title="Feature 1" description="Description of Feature 1" />
        <PricingFeature title="Feature 2" description="Description of Feature 2" />
        <PricingFeature title="Feature 3" description="Description of Feature 3" />
      </div>

      <!-- Secondary Features -->
      <div class="mt-10">
        <h2 class="text-xl font-semibold mb-4">Secondary Features</h2>
        <PricingFeature title="Feature 4" description="Description of Feature 4" />
        <PricingFeature title="Feature 5" description="Description of Feature 5" />
        <PricingFeature title="Feature 6" description="Description of Feature 6" />
      </div>

    </div>
</template>
  
<script>
import PricingTier from '~/components/base/PricingTier.vue'
import PricingFeature from '~/components/base/PricingFeature.vue'
import aosMixin from '@/mixins/aos'
  
export default {
    name: 'PricingPage',
    components: {
        PricingTier,
        PricingFeature,
    },
    mixins: [aosMixin],
    data() {
        return {
            userPricingTiers: [
                {
                    title: "Free",
                    features: [
                        {
                            title: "10GB Logs",
                            enabled: true
                        },
                        {
                            title: "100 Custom Metrics",
                            enabled: true
                        },
                        {
                            title: "100 Monitors",
                            enabled: true
                        },
                        {
                            title: "Dashboards",
                            enabled: true
                        },
                        {
                            title: "1K Exceptions & Errors",
                            enabled: true
                        },
                        {
                            title: "5 Host & Network Monitoring",
                            enabled: true
                        },
                        {
                            title: "100 Alerts",
                            enabled: true
                        },
                        {
                            title: "1k Serverless Actions",
                            enabled: true
                        }
                    ],
                    buttonText: "Choose plan",
                    color: "bg-gradient-to-br from-cyan-500 to-blue-500"
                },
                {
                    title: "Basic",
                    price: "$15",
                    features: [
                        {
                            title: "Free tier usage",
                            enabled: true
                        },
                        {
                            title: "Distributed Tracing",
                            enabled: true
                        },
                        {
                            title: "APM",
                            enabled: true
                        },
                        {
                            title: "Incident Managment System",
                            enabled: true
                        },
                        {
                            title: "Cross-Cloud LB & Scaling",
                            enabled: false
                        },
                        {
                            title: "Test Governance",
                            enabled: false
                        },
                        {
                            title: "Test Triggers & Monitoring",
                            enabled: false
                        },
                        {
                            title: "AIOps",
                            enabled: false
                        }
                    ],
                    buttonText: "Choose plan",
                    color: "bg-gradient-to-br from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                },
                {
                    title: "Pro",
                    price: "$40",
                    features: [
                        {
                            title: "Free tier usage",
                            enabled: true
                        },
                        {
                            title: "Distributed Tracing",
                            enabled: true
                        },
                        {
                            title: "APM",
                            enabled: true
                        },
                        {
                            title: "Incident Managment System",
                            enabled: true
                        },
                        {
                            title: "Cross-Cloud LB & Scaling",
                            enabled: true
                        },
                        {
                            title: "Test Governance",
                            enabled: true
                        },
                        {
                            title: "Test Triggers & Monitoring",
                            enabled: true
                        },
                        {
                            title: "AIOps",
                            enabled: true
                        }
                    ],
                    buttonText: "Choose plan",
                    highlight: true,
                    promoText: "Fully featured",
                    color: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                },
                {
                    title: "Enterprise",
                    features: [
                        {
                            title: "Free tier usage",
                            enabled: true
                        },
                        {
                            title: "Distributed Tracing",
                            enabled: true
                        },
                        {
                            title: "APM",
                            enabled: true
                        },
                        {
                            title: "Incident Managment System",
                            enabled: true
                        },
                        {
                            title: "Cross-Cloud LB & Scaling",
                            enabled: true
                        },
                        {
                            title: "Test Governance",
                            enabled: true
                        },
                        {
                            title: "Test Triggers & Monitoring",
                            enabled: true
                        },
                        {
                            title: "AIOps",
                            enabled: true
                        }
                    ],
                    buttonText: "Contact Sales",
                    color: "bg-gradient-to-br from-zinc-800 to-neutral-600"
                }
            ]
        }
    }
}
</script>