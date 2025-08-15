<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {Button, Paginator, Skeleton} from "primevue";
import axios from "axios";
import SetImage from "@/components/SetImage.vue"
import {useRoute, useRouter} from "vue-router";
import Filter from "@/components/product/Filter.vue";

const router = useRouter()
const route = useRoute()

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
    const response = await axios.get("http://20.171.9.91/products/products", {params: {...route.query, per_page: 30}})
    products.value = response.data.data
    meta.value = response.data.meta
    window.scrollTo({top: 0, behavior: "smooth"});
  } catch (e) {
    console.log(e)
  } finally {
    getProductsLoading.value = false
  }
}

const selectPage = ({page}: { page: number }) => {
  router.push({name: 'products', query: {...route.query, page: page > 0 ? page + 1 : undefined}})
}

watch(() => route.query, () => {
  getProducts();
})

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div class="bg-gray-50 py-6">
    <div class="container px-4">
      <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <router-link :to="{name: 'home'}">
          <span>Home</span>
        </router-link>
        <i class="pi pi-angle-right"></i>
        <span>Products</span>
      </div>
      <div class="grid grid-cols-12 gap-6 max-xl:gap-2">
        <Filter class="max-xl:hidden"/>
        <main class="col-span-9 max-xl:col-span-12">
          <div class="grid grid-cols-3 gap-6 max-xxl:grid-cols-2 max-xl:grid-cols-3 max-xl:gap-2 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4">
            <template v-if="products?.length && !getProductsLoading">
              <template v-for="(product, i) in products" :key="i">
                <router-link class="flex w-full" :to="{name: 'products-detail', params: {id: product.id}}">
                  <div class="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center justify-between w-full">
                    <div class="flex flex-col mb-2">
                      <SetImage :image-url="product.images[0]" class="h-36 object-contain mb-3"/>
                      <p class="font-medium text-sm mb-2">{{ product.title }}</p>
                      <p class="text-lg font-bold mb-3">${{ product.price }}</p>
                    </div>
                    <div class="px-4 flex w-full">
                      <Button size="small"
                              label="Buy Now"
                              class="bg-red-500 hover:bg-red-600 border-0 w-full rounded-md"/>
                    </div>
                  </div>
                </router-link>
              </template>
            </template>
            <template v-if="getProductsLoading">
              <Skeleton height="300px"
                        width="100%"
                        v-for="n in 30"/>
            </template>
          </div>
          <div class="flex justify-center mt-6 py-2" v-if="meta">
            <Paginator :first="(meta?.current_page - 1) * meta?.per_page"
                       :rows="meta?.per_page"
                       :totalRecords="meta?.total"
                       @page="selectPage"/>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<style lang="css">
.p-paginator .p-paginator-pages .p-paginator-page {
  border-radius: 5px;
  background: white;
  color: #000;
}

@media (min-width: 500px){
  .p-paginator .p-paginator-pages .p-paginator-page {
    width: 30px;
    height: 30px;
  }
}

.p-paginator .p-paginator-pages .p-paginator-page.p-paginator-page-selected {
  background: #000;
  color: #fff;
}
</style>