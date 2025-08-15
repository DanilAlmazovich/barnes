<script setup lang="ts">
import {Button, Card, Carousel, Rating, Skeleton} from "primevue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import SetImage from "@/components/SetImage.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

interface ProductModel {
  id: number
  title: string
  price: number
  category: string
  description: string
  images: string[]
}

interface MetaModel {
  current_page: number
  last_page: number
  per_page: number
  total: number
  total_pages: number
}

const products = ref<ProductModel[]>([])
const meta = ref<MetaModel | null>(null)
const getProductsLoading = ref<boolean>(false)

const getProducts = async () => {
  getProductsLoading.value = true
  try {
    const response = await axios.get("http://20.171.9.91/products/products", {params: {per_page: 10}})
    products.value = response.data.data
    meta.value = response.data.meta
    window.scrollTo({top: 0, behavior: "smooth"});
  } catch (e) {
    console.log(e)
  } finally {
    getProductsLoading.value = false
  }
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <section class="py-20 bg-[#F2F2F4]">
    <div class="max-w-[1200px] mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-6 max-sm:text-xl">Discover Brands</h2>
      <Swiper :slides-per-view="4"
              :space-between="20">
        <template v-if="products?.length && !getProductsLoading">
          <SwiperSlide v-for="product in products" :key="product.id" class="h-full py-2 min-w-[270px]">
            <router-link class="flex w-full h-full" :to="{name: 'products-detail', params: {id: product.id}}">
              <div
                  class="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center justify-between w-full min-h-[300px]">
                <div class="flex flex-col mb-2">
                  <SetImage :image-url="product.images[0]" class="h-36 object-contain mb-6"/>
                  <p class="font-medium text-sm mb-2">{{ product.title }}</p>
                  <p class="text-lg font-bold mb-3">${{ product.price }}</p>
                </div>
              </div>
            </router-link>
          </SwiperSlide>
        </template>
        <template v-if="getProductsLoading">
          <div class="grid grid-cols-4 gap-4">
            <Skeleton height="300px"
                      width="100%"
                      v-for="n in 4"/>
          </div>
        </template>
      </Swiper>
    </div>
  </section>
</template>