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

  <!-- 
    BULLET POINTS 100vh
 -->
  <section class="about">
    <div class="grid-container">
      <figure class="finger">
        <img
          :src="hand[0]"
          alt="caterpillar's middle finger"
          class="finger__img"
        />
      </figure>

      <p class="about__p">
        Each scumbug has a unique look - the result of a randomized combination
        of seven character attributes.
      </p>

      <p class="about__p">
        Each scumbug has its own birthday, as all 15,341 insects emerged from
        their eggs between January 1st, 1980, and December 31st, 2021.
      </p>

      <figure class="finger">
        <img :src="hand[1]" alt="fly's middle finger" class="finger__img" />
      </figure>

      <figure class="finger">
        <img :src="hand[2]" alt="mantis's middle finger" class="finger__img" />
      </figure>

      <p class="about__p">
        Each scumbug’s metadata is 100% stored on the Ethereum blockchain and
        its artwork is hosted permanently on the Arweave blockchain.
      </p>

      <p class="about__p">
        Each Scumbug is originally made in SVG (Scalable Vector Graphic) - they
        may eventually become bigger than you! They are displayed as a PNG image
        for optimal user experience, but the SVG file will be available for all
        owners.
      </p>

      <figure class="finger">
        <img
          :src="hand[3]"
          alt="mosquito's middle finger"
          class="finger__img"
        />
      </figure>

      <figure class="finger">
        <img :src="hand[4]" alt="moth's middle finger" class="finger__img" />
      </figure>

      <p class="about__p">
        The Scumbugs collection and its digital universe is the genesis project
        of (lab name). Building a strong IP (intellectual property) for the
        Scumbugs universe will remain the top priority when exploring further
        cyber-ecosystem development.
      </p>

      <p class="about__p">
        Scumbugs collectibles is a genesis project actig as a member pass to tge
        Scumbugs digital universe. The full Scumbugs experience will grow as the
        Scumbugs community done too.
      </p>

      <figure class="finger">
        <img :src="hand[5]" alt="snail's middle finger" class="finger__img" />
      </figure>
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
      hand: [
        require("@/assets/svg/bugyou/fuck_mantis.svg"),
        require("@/assets/svg/bugyou/fuck_mosquito.svg"),
        require("@/assets/svg/bugyou/fuck_snail.svg"),
        require("@/assets/svg/bugyou/fuck_caterpi.svg"),
        require("@/assets/svg/bugyou/fuck_moth.svg"),
        require("@/assets/svg/bugyou/fuck_fly.svg"),
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
.text.about,
.about {
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

// ======= BULLET POINTS N FINGERS =============================
.grid-container {
  display: grid;
  grid-template-columns: 400px 1fr 1fr 400px;
  grid-template-rows: repeat(4, auto);

  padding: 5em 0;
}

.finger {
  margin: 0;
  width: auto;

  &__img {
    height: auto;
    width: 100%;
  }
}

.finger:nth-of-type(even),
.about__p:nth-of-type(even) {
  margin-top: 5em;
  text-align: right;
}

.finger:nth-of-type(odd),
.about__p:nth-of-type(odd) {
  margin-top: 0;
  text-align: left;
}

.finger {
  &__img:nth-of-type(odd) {
    width: 100%;
  }
}

.finger:nth-of-type(even) {
  grid-column-start: 4;
  grid-column-end: 5;
}

.finger:nth-of-type(odd) {
  grid-column-start: 1;
  grid-column-end: 2;
}

.about__p:nth-of-type(even) {
  grid-column-start: 3;
  grid-column-end: 4;
  text-align: right;
}

.about__p:nth-of-type(odd) {
  grid-column-start: 2;
  grid-column-end: 3;

  margin-top: 0em;
}

.about__p {
  font-weight: 700;
}

// .about__p:nth-child(2) {
//   grid-row-start: 1;
//   grid-row-end: 2;
// }

// .about__p:nth-child(4) {
//   grid-row-start: 3;
//   grid-row-end: 4;
// }

// .about__p:nth-child(6) {
//   grid-row-start: 5;
//   grid-row-end: 6;
// }
</style>
