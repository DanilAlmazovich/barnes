<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";

const catalog = [
  { id: 1, title: 'Helmets & Hoods', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Flashlights', img: 'https://images.unsplash.com/photo-1529973565453-c9cf5f7f8c46?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Communications', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Turnout & Proximity', img: 'https://images.unsplash.com/photo-1541976076758-347942db1979?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Air-Paks (SCBA)', img: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Extrication Equipment', img: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1200&auto=format&fit=crop' },
]

interface CategoryModel {
  id: number
  name: string
}

const categories = ref<CategoryModel[]>([])

const getCategories = async () => {
  try {
    const response = await axios.get(`http://20.171.9.91/categories/categories`, {params: {per_page: 6}})
    console.log(response)
    categories.value = response.data.data
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  getCategories()
})
</script>

<template>
  <section class="bg-[#F2F2F4] py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h3 class="text-3xl font-semibold text-neutral-900 max-sm:text-xl">Discover Catalog</h3>
        <p class="mt-2 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      </div>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        <div v-for="c in categories" :key="c.id" class="group overflow-hidden rounded-2xl">
          <div class="aspect-[16/10] overflow-hidden flex flex-col justify-center items-center gap-4 bg-white">
            <i class="pi pi-image text-4xl text-gray-300"/>
            <span class="text-sm text-gray-300">not photo</span>
<!--            <img :src="c.img" :alt="c.title" class="h-full w-full object-cover transition group-hover:scale-105" />-->
          </div>
          <div class="p-4">
            <p class="text-lg font-bold text-neutral-900 text-center">{{ c.name }}</p>
          </div>
        </div>
      </div>
      <div class="mt-8 flex justify-center">
        <router-link :to="{name: 'categories'}">
          <button class="rounded-xl px-12 py-3 text-black border border-[#868686] border-solid">Show all catalog</button>
        </router-link>
      </div>
    </div>
  </section>
</template>