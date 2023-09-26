<template>

    <div class="w-full">
        <section class="w-auto pt-20 text-center justify-center">
            <div class="w-auto">
                <h1 class="text-3xl font-bold text-center">System Status</h1>
            </div>
            <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                <div class="py-8">
                    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            System
                                        </th>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Last updated
                                        </th>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr 
                                        v-for="(item, index) in systems" 
                                        :key="index" 
                                        class="text-center justify-center items-center"
                                    >
                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0">
                                                    <svg
                                                        v-if="item.iconPaths"
                                                        class="w-6 h-6 text-gray-500"
                                                        :fill="item.fill"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <g v-for="ipath in item.iconPaths" :key="ipath.index">
                                                        <path 
                                                            :d="ipath"
                                                            clip-rule="evenodd"
                                                            fill-rule="evenodd" 
                                                        ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 justify-center whitespace-no-wrap">
                                                        {{ item.name }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ item.lastUpdated }}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                <span aria-hidden="true" class="absolute inset-0 rounded-full opacity-50" :class="getStatusColor(item)">
                                                </span>
                                                <span class="relative">
                                                    {{ item.status }}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex w-auto p-20 text-center justify-center">
            <h1 class="text-3xl font-bold text-center">Updates</h1>
            <!-- Implement some form of blog or update list here regarding incidents -->
        </section>
    </div>

</template>
<script>
import aosMixin from '@/mixins/aos'


export default {
    name: 'SystemStatusPage',
    components: {},
    mixins: [aosMixin],
    data() {
        return {
            systems: null
        }
    },
    mounted() {
        // need to add methods that fetch system status from our API
        this.systems = [
            {
                iconPaths: [
                    'M8 0a8 8 0 100 16A8 8 0 008 0zM6.128 1.774A6.508 6.508 0 001.576 7H4.07a11.095 11.095 0 012.06-5.226zm3.744 0A11.096 11.096 0 0111.932 7h2.492a6.508 6.508 0 00-4.552-5.226zM10.42 7C10.165 5.124 9.333 3.335 8 1.836 6.667 3.335 5.835 5.124 5.58 7h4.84zM5.527 8.5h4.946C10.31 10.557 9.451 12.533 8 14.164 6.55 12.533 5.691 10.557 5.527 8.5zm-1.505 0H1.52a6.505 6.505 0 004.61 5.726C4.896 12.525 4.163 10.555 4.021 8.5zm5.85 5.726c1.231-1.701 1.964-3.671 2.106-5.726h2.503a6.505 6.505 0 01-4.61 5.726z'
                ], 
                name: "Website homepage", 
                lastUpdated: "13. September 2023", 
                status: "healthy"
            },
            {
                iconPaths: [
                    'M9.424 2.02a.75.75 0 00-.904.556l-2.5 10.5a.75.75 0 001.46.348l2.5-10.5a.75.75 0 00-.556-.904zM11.2 4.24a.75.75 0 011.06-.04l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1L14.148 8 11.24 5.3a.75.75 0 01-.04-1.06zM4.76 5.3a.75.75 0 00-1.02-1.1L.24 7.45a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1L1.852 8 4.76 5.3z'
                ], 
                name: "Web App", 
                lastUpdated: "13. September 2023", 
                status: "offline"
            },
            {
                iconPaths: [
                    'M1 2.25C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25v11.5C7 14.44 6.44 15 5.75 15h-3.5C1.56 15 1 14.44 1 13.75V2.25zm1.5.25v11h3v-11h-3zM9 2.25C9 1.56 9.56 1 10.25 1h3.5c.69 0 1.25.56 1.25 1.25v3.5C15 6.44 14.44 7 13.75 7h-3.5C9.56 7 9 6.44 9 5.75v-3.5zm1.5.25v3h3v-3h-3zM10.25 9C9.56 9 9 9.56 9 10.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C15 9.56 14.44 9 13.75 9h-3.5zm.25 4.5v-3h3v3h-3z'
                ], 
                name: "Dashboard service", 
                lastUpdated: "13. September 2023"
            },
            {
                icon_paths: [
                    'M1.75 2a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1zM6.75 5.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM1 6.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 011 6.25zM1.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM1 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.75 2a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 9.75A.75.75 0 016.75 9h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 016 9.75zM6.75 12.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z'
                ], 
                name: "Log Management", 
                lastUpdated: "13. September 2023", 
                status: "deprecated"
            }
        ]
    },
    methods: {
        getStatusColor(item) {
            if (item.status === "healthy") {
                return "bg-green-200"
            }
            else if (item.status === "deprecated") {
                return "bg-yellow-200"
            }
            else if (item.status === "offline") {
                return "bg-red-200"
            }
            else {
                item.status = "unknown"
                return "bg-gray-200"
            }
        }
    }
}
</script>