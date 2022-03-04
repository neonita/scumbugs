<template>
  <picture>
    <!-- <source media="screen and (min-width: 1440px)" type="image/jpeg" :srcset="`${sources[2] } 1x`">
    <source media="screen and (min-width: 769px) and (-webkit-min-device-pixel-ratio: 2), screen and (min-width: 769px) and (min--moz-device-pixel-ratio: 2), screen and (min-width: 769px) and (-moz-min-device-pixel-ratio: 2), screen and (min-width: 769px) and (-o-min-device-pixel-ratio: 2/1), screen and (min-width: 769px) and (min-device-pixel-ratio: 2), screen and (min-width: 769px) and (min-resolution: 192dpi), screen and (min-width: 769px) and (min-resolution: 2dppx)" type="image/jpeg" :data-srcset="`${sources[2] } 1x`">
    <source media="screen and (max-width: 600px)" type="image/jpeg" :srcset="`${sources[0] } 1x`">
    <source type="image/jpeg" :srcset="`${sources[1] } 1x`"> -->
    <img :alt="alt" :src="src" @load="onImageLoaded">
  </picture>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener('resize', this.onResize);
    },
    computed: {
      src() {
        if (this.windowWidth > 1600) {
          return this.sources[2];
        } 
        else if (this.windowWidth > 400) {
          return this.sources[1];
        }
        return this.sources[0];
        // return this.sources[1];
      }
    },
    beforeUnmount() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {  
        onResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    data() {
      return {
        windowWidth: window.innerWidth,
      };
    },
    props: {
      sources: {
        type: Array
      },
      alt: {
        type: String
      },
      onImageLoaded: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>