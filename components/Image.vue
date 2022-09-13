<template>
    <img class="rounded-[8px]" :src="chosenImageSource" />
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  
  export default defineComponent({
    props: {
      slug: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const allImages = import.meta.glob('../assets/images/slide/*.jpg');
      let chosenImageSource = ref("");
  
      onMounted(() => {
        allImages[`../assets/images/slide/slide-${props.slug}.jpg`]().then((mod) => {
          chosenImageSource.value = mod.default;
        });
      });
  
      return { chosenImageSource };
    },
  });
</script>