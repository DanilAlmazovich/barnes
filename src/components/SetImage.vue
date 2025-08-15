<script setup lang="ts">
import {onMounted, ref, useAttrs} from "vue";
import axios from "axios";

interface PropsImage {
  title?: string,
  imageUrl?: string,
  blobObject?: Blob
}

const attrs = useAttrs()
const {
  title = undefined,
  imageUrl = undefined,
  blobObject = null
} = defineProps<PropsImage>()

const getImage = async () => {
  try {
    if (imageUrl) {
      const response = await axios(`http://20.171.9.91/${imageUrl}`, {responseType: "blob"})
      convertImage(response.data)
    }
  } catch (e) {
    console.log(e)
  }
}

const convertImage = (file: Blob) => {
  imageSrc.value = URL.createObjectURL(file)
}

onMounted(() => {
  if (imageUrl) {
    getImage()
  }
  if (blobObject) {
    convertImage(blobObject)
  }
})
const imageSrc = ref<string | null>(null)

</script>

<template>
  <img v-if="imageSrc"
       v-bind="attrs"
       :src="imageSrc"
       :alt="title">
</template>