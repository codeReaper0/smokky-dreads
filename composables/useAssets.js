// export default function useAssets(id) {
//     const jpegs = import.meta.glob('../assets/images/slide/*.jpg');

//     let slide = ref("");

//     jpegs[`../assets/images/slide/slide-${id}.jpg`]().then((mod) => {
//         console.log(mod.default)
//         slide.value = mod.default;
//     })
  
//     return slide
//   }