<script setup lang="ts">
interface IProps {
  title: string,
  img: string,
}
const {title = '' , img = ''} = defineProps<IProps>()
</script>

<template>
  <div class='group rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition hover:shadow-md'>
    <div class='aspect-[4/3] w-full overflow-hidden rounded-xl'>
      <img :src="img" :alt="title" class='h-full w-full object-cover transition group-hover:scale-105' />
    </div>
    <div class='mt-3 space-y-1'>
      <div class='flex items-center gap-1 text-yellow-500 text-sm'>★★★★★</div>
      <p class='text-sm font-medium text-neutral-800 line-clamp-2'>{{ title }}</p>
    </div>
  </div>
</template>