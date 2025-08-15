<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <Header/>
      <div>
        <RouterView/>
      </div>
    </div>
    <Footer/>
  </div>
</template>