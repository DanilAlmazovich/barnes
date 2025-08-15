<script setup lang="ts">

</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/10 bg-gray-700 backdrop-blur">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-3 max-xxl:w-24">
          <router-link class="flex" :to="{name: 'home'}">
            <img src="@/assets/images/logo.png" alt="">
          </router-link>
        </div>
        <nav class="flex items-center gap-12 text-sm text-neutral-400 max-xxl:gap-6 max-xl:hidden">
          <router-link :to="{name: 'products'}" class="hover:text-white uppercase">Products</router-link>
          <a href="#" class="hover:text-white uppercase">Brands</a>
          <a href="#" class="hover:text-white uppercase">About us</a>
          <a href="#" class="hover:text-white uppercase">Blog</a>
          <a href="#" class="hover:text-white uppercase">Contact</a>
        </nav>
        <div class="flex items-center gap-4 max-xl:hidden">
          <div class="relative hidden sm:block">
            <input
                class="w-60 rounded-[8px] bg-gray-600 px-4 py-2 text-sm text-neutral-200 placeholder-neutral-400 outline-none max-xxl:w-50"
                placeholder="Search for anything…"/>
            <svg class="absolute right-3 top-2.5 h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <button class="md:hidden rounded-full p-2 text-neutral-200 hover:bg-neutral-800" aria-label="Search">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>