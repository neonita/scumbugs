<template>
  <main>
    <Header
      @toggle="toggleMint"
    />
    <!-- <Transition name="fade-in-up">
      <Mint 
        v-if="showMint"
        @toggle="toggleMint"
      />
    </Transition> -->
    <Scene />
    <Footer />
  </main>
</template>

<script>


import Header from './components/Header.vue'
// import Mint from './components/Mint.vue'
import Scene  from './components/Scene.vue'
import Footer from './components/Footer.vue'

import 'normalize.css'
import './assets/scss/global.scss'


export default {
  name: 'Scumbugs',
  components: {
    Header,
    // Mint,
    Scene,
    Footer,
  },
  data() {
    return {
      showMint: false
    }
  },
  methods: {
    toggleMint() {
      this.showMint = !this.showMint
    }
  }
}
</script>

<style lang="scss">

  // @import url('https://fonts.googleapis.com/css2?family=Acme&family=Roboto:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;800&display=swap');

  .web3modal-modal-lightbox {
    z-index: 150 !important;
  }
  

  body {
    background: #010101;
    font-family: 'Work Sans', sans-serif;
  }

  .fade-in-up-enter-active,
  .fade-in-up-leave-active {
    transition: opacity 0.3s;

    .mint__inner {
      transition: opacity 0.3s, transform 0.3s;
    }
  }
  .fade-in-up-enter-from,
  .fade-in-up-leave-to {
    opacity: 0;

    .mint__inner {
      opacity: 0;
      transform: scale(1.05);
      transition-delay: 0s;
    }
  }

</style>