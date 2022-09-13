<template>
    <!-- <VueScrollFixedNavbar :isFixed="true"> -->
        <nav class="bg-[#AAC7FC] flex justify-between items-center px-6 lg:px-12 xl:px-20 2xl:px-[182px] w-full sticky top-0 z-50">
            <!-- icon -->
            <NuxtLink to="/" class="text-[30px] font-semibold text-[#322659]">
                <img class="h-[70px] md:h-[100px] object-cover" src="~/assets/images/SDD@4x.png" alt="smokky dreads">
            </NuxtLink>


            <div class="lg:hidden text-white">
                <svg @click="toggle = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  
            </div>

            <!-- Navigation -->
            <ul class="hidden lg:flex gap-10 xl:gap-20">
                <li>
                    <NuxtLink to="/" class="text-xl font-semibold text-[#322659]">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="text-xl font-semibold text-[#322659]">About</NuxtLink>
                </li>
                <li>
                    <a href="/about#roadmap" class="text-xl font-semibold text-[#322659]">Road Map</a>
                </li>
                <li>
                    <NuxtLink to="/blog" class="text-xl font-semibold text-[#322659]">Blog</NuxtLink>
                </li>
            </ul>

            <div v-show="toggle" class="fixed inset-0 z-[60] bg-[#AAC7FC] p-8 space-y-8">
                <div class="text-white">
                    <svg @click="toggle = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </div>
                <ul class="space-y-4">
                    <li>
                        <NuxtLink to="/" class="text-3xl text-center block font-semibold text-[#322659]">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-3xl text-center block font-semibold text-[#322659]">About</NuxtLink>
                    </li>
                    <!-- <li>
                        <a href="/about#roadmap" class="text-3xl text-center block font-semibold text-[#322659]">Road Map</a>
                    </li> -->
                    <li>
                        <NuxtLink to="/blog" class="text-3xl text-center block font-semibold text-[#322659]">Blog</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    <!-- </VueScrollFixedNavbar> -->
</template>

<script setup>
    const toggle = ref(false)
</script>


<style>
	.router-link-exact-active {
		color: #5B73D6 !important;
	}
</style>