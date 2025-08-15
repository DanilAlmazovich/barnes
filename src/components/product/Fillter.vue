<script setup lang="ts">

import {Checkbox, Divider, InputText} from "primevue";
import {ref} from "vue";

const searchBrand = ref("");
const brands = ref([
  {name: "3M", selected: true},
  {name: "Air Systems", selected: false},
  {name: "Akron Brass Company", selected: false},
]);

const sort = ref(null);
const sortOptions = [
  {label: "By rating", value: "rating"},
  {label: "By price", value: "price"},
];
</script>

<template>
  <aside class="col-span-3 bg-white rounded-lg shadow-sm p-4">
    <h3 class="font-bold mb-2">Brand</h3>
    <InputText v-model="searchBrand" placeholder="Search" class="w-full mb-3"/>
    <div v-for="(brand, i) in brands" :key="i" class="flex items-center space-x-2 mb-2">
      <Checkbox v-model="brand.selected" :inputId="'brand-' + i"/>
      <label :for="'brand-' + i">{{ brand.name }}</label>
    </div>
    <Divider/>
    <h3 class="font-bold mb-2">Catalog</h3>
    <p class="text-gray-500">...</p>
  </aside>
</template>