<template>
  <section class="bugs" id="bugs">
    <ul>
      <li class="bug-1"><img :src="bugs[0]" /></li>
      <li class="bug-2"><img :src="bugs[1]" /></li>
      <li class="bug-3"><img :src="bugs[2]" /></li>
      <li class="bug-4"><img :src="bugs[3]" /></li>
      <li class="bug-5"><img :src="bugs[4]" /></li>
      <li class="bug-6"><img :src="bugs[5]" /></li>
    </ul>
  </section>
</template>

<script>

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      bugs: [
        require('@/assets/bugs/bug1.svg'),
        require('@/assets/bugs/bug2.svg'),
        require('@/assets/bugs/bug3.svg'),
        require('@/assets/bugs/bug4.svg'),
        require('@/assets/bugs/bug5.svg'),
        require('@/assets/bugs/bug6.svg'),
      ]
    }
  },
  mounted: function() {
    // this.bugs.forEach((bug, index) => {
    //   gsap.to(`.bugs .bug-${index + 1}`, {
    //     // transform: 'translateY(0)',
    //     // ease: "none",
    //     scrollTrigger: {
    //       trigger: `.bugs .bug-${index + 1}`,
    //       start: "bottom 90%",
    //       end: "bottom top",
    //       // markers: true,
    //       // scrub: true
    //       toggleClass: 'is-showing',
    //     }, 
    //   });
    // })
  }
}
</script>

<style lang="scss">
.bugs {
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0;
  }

  svg {
    display: block;
    height: auto;
    margin: 0;
    width: 100%;
  }

  li {
    aspect-ratio: 1;
    list-style: none;
    overflow: hidden;
    position: relative;

    img {
      display: block;
      margin: 0;
      transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      width: 100%;
    }

    &:nth-child(1) {
      background: #FFE266;

      // img {
      //   transform: translateY(50%);
      // }
    }
    
    &:nth-child(2) {
      background: #F9AF6B;

      // img {
      //   transform: translateY(20%);
      // }
    }
    
    &:nth-child(3) {
      background: #8CE1E5;

      // img {
      //   transform: translateY(70%);
      // }
    }
    
    &:nth-child(4) {
      background: #ACDD72;

      // img {
      //   transform: translateY(30%);
      // }
    }
    
    &:nth-child(5) {
      background: #EF7575;

      // img {
      //   transform: translateY(40%);
      // }
    }
    
    &:nth-child(6) {
      background: #FCB4D4;

      // img {
      //   transform: translateY(80%);
      // }
    }

    &.is-showing {
      img {
        transform: none;
      }
    }
  }
}
</style>