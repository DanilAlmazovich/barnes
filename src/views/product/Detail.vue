<script setup lang="ts">
import { Button } from "primevue";
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()

const product = ref(null)

const getProduct = async () => {
  try {
    const response = await axios.get(`http://20.171.9.91/products/products/${route.params.id}`)
    console.log(response)
    product.value = response.data.data
  } catch (e) {
    console.log(e)
  } finally {

  }
}
onMounted(() => {
  getProduct()
})
</script>

<template>
  <div class="max-w-[1200px] mx-auto p-6">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-4 flex items-center space-x-2">
      <router-link :to="{name: 'home'}">
        <span class="cursor-pointer hover:text-gray-800">Home</span>
      </router-link>
      <i class="pi pi-angle-right"></i>
      <router-link :to="{name: 'products'}">
        <span class="cursor-pointer hover:text-gray-800">Products</span>
      </router-link>
      <i class="pi pi-angle-right"></i>
      <span class="text-gray-800 font-medium">3M</span>
    </nav>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Side (Images) -->
      <div>
        <div class="mb-4">
<!--          <img-->
<!--              src="/images/headset.png"-->
<!--              alt="Headset"-->
<!--              class="w-full rounded-lg shadow"-->
<!--          />-->
        </div>
        <div class="flex gap-4">
<!--          <img-->
<!--              src="/images/headset.png"-->
<!--              alt=""-->
<!--              class="w-20 border rounded cursor-pointer hover:shadow"-->
<!--          />-->
<!--          <img-->
<!--              src="/images/headset.png"-->
<!--              alt=""-->
<!--              class="w-20 border rounded cursor-pointer hover:shadow opacity-50"-->
<!--          />-->
        </div>
      </div>

      <!-- Right Side (Details) -->
      <div>
        <h1 class="text-2xl font-bold mb-2">
          3M™ PELTOR™ LiteCom FRS Headset MT53H7B4602-NA, Neckband
        </h1>
        <p class="text-gray-500 mb-4">
          3M™ PELTOR™ FRS Headset is a hearing protector with built-in analog
          two-way communication radio, programmed to operate on the 22 FRS
          channels. The noise-cancelling, voice operated speech microphone
          helps enable clear, hands-free communication in noisy environments.
        </p>

        <!-- Rating -->
        <div class="flex items-center text-yellow-500 mb-4">
          <i class="pi pi-star-fill" v-for="i in 5" :key="i"></i>
        </div>

        <!-- Price -->
        <div class="mb-4">
          <span class="text-2xl font-bold text-gray-900 mr-4">
            US$554.51*
          </span>
          <span class="line-through text-gray-400">US$777.51</span>
        </div>

        <!-- Brand -->
        <div class="flex items-center mb-6">
          <span class="font-medium mr-2">Brand:</span>
<!--          <img src="/images/3m-logo.png" alt="3M" class="h-8" />-->
        </div>

        <!-- Add to Cart Button -->
        <Button
            label="Add to Cart"
            icon="pi pi-shopping-cart"
            class="p-button-danger w-full md:w-auto mb-6"
        />

        <!-- Info Icons -->
        <div class="flex flex-wrap gap-6 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <i class="pi pi-check-circle text-green-500"></i> In Stock Today
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-truck text-blue-500"></i> Free Delivery 1-2 day
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-shield text-purple-500"></i> Guaranteed 1 year
          </div>
        </div>
      </div>
    </div>
  </div>
</template>