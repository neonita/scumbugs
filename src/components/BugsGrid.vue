<template>
  <section class="text about" id="about">
    <div class="lw">
      <h2 class="title">Scumbugs</h2>
      <p>
        Scumbugs is a collection of 15,341 unique on-chain bugs infesting the
        Ethereum Network. Bred at the intersection of generative art and
        creative coding, each scumbug is generated with randomly seeded values,
        issued at the moment of an NFT mint transaction hash.
      </p>
      <p>
        There are 6 species of Scumbugs: Mantis, Caterpillar, Snail, Mosquito,
        Fly, and Moth.
      </p>
    </div>
  </section>

  <section class="bugs">
    <!-- Scumbugs grid 100vh -->
    <ul>
      <li class="bug-1"><img :src="bugs[0]" /></li>
      <li class="bug-2"><img :src="bugs[1]" /></li>
      <li class="bug-3"><img :src="bugs[2]" /></li>
      <li class="bug-4"><img :src="bugs[3]" /></li>
      <li class="bug-5"><img :src="bugs[4]" /></li>
      <li class="bug-6"><img :src="bugs[5]" /></li>
    </ul>
  </section>

  <section class="text about">
    <div class="lw">
      <!-- content -->
      <ul>
        <li>
          Each scumbug has a unique look - the result of a randomized
          combination of seven character attributes.
        </li>
        <li>
          Each scumbug has a unique stare showcasing an exclusive generative
          work of art.
        </li>
        <li>
          Each scumbug has its own birthday, as all 15,341 insects emerged from
          their eggs between January 1st, 1980, and December 31st, 2021.
        </li>
        <li>
          Each scumbug’s metadata is 100% stored on the Ethereum blockchain and
          its artwork is hosted permanently on the Arweave blockchain.
        </li>
        <li>
          341 Scumbugs will be reserved for giveaways, incentives for hirings,
          and other purposes that help grow and sustain the project.
        </li>
        <li>
          The Scumbugs collection and its digital universe is the genesis
          project of (lab name). Building a strong IP (intellectual property)
          for the Scumbugs universe will remain the top priority when exploring
          further cyber-ecosystem development.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      bugs: [
        require("@/assets/bugs/bug1.svg"),
        require("@/assets/bugs/bug2.svg"),
        require("@/assets/bugs/bug3.svg"),
        require("@/assets/bugs/bug4.svg"),
        require("@/assets/bugs/bug5.svg"),
        require("@/assets/bugs/bug6.svg"),
      ],
    };
  },
  mounted: function () {
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
  },
};
</script>

<style lang="scss">
.text.about {
  background: #f6f7da;
}

// ======= BUGS =============================
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
      background: #ffe266;

      // img {
      //   transform: translateY(50%);
      // }
    }

    &:nth-child(2) {
      background: #f9af6b;

      // img {
      //   transform: translateY(20%);
      // }
    }

    &:nth-child(3) {
      background: #8ce1e5;

      // img {
      //   transform: translateY(70%);
      // }
    }

    &:nth-child(4) {
      background: #acdd72;

      // img {
      //   transform: translateY(30%);
      // }
    }

    &:nth-child(5) {
      background: #ef7575;

      // img {
      //   transform: translateY(40%);
      // }
    }

    &:nth-child(6) {
      background: #fcb4d4;

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
} // .bugs
</style>
