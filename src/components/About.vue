<template>
  <!-- ABOUT CARD -->
  <section class="text about-top" id="about">
    <div class="lw">
      <div class="banner"></div>
      <h2 class="title">Scumbugs</h2>
      <p class="about__p1">
        Scumbugs is a collection of 15,341 unique on-chain bugs infesting the
        Ethereum Network. Bred at the intersection of generative art and
        creative coding, each scumbug is generated with randomly seeded values,
        issued at the moment of an NFT mint transaction hash.
      </p>
      <p class="about__p1">
        There are 6 species of Scumbugs: Mantis, Caterpillar, Snail, Mosquito,
        Fly, and Moth.
      </p>
    </div>
  </section>

  <!-- SCUMBUGS GRID 100vw -->
  <section class="bugs">
    <ul>
      <li class="bug-1"><img :src="bugs[0]" /></li>
      <li class="bug-2"><img :src="bugs[1]" /></li>
      <li class="bug-3"><img :src="bugs[2]" /></li>
      <li class="bug-4"><img :src="bugs[3]" /></li>
      <li class="bug-5"><img :src="bugs[4]" /></li>
      <li class="bug-6"><img :src="bugs[5]" /></li>
    </ul>
  </section>

  <!-- BULLET POINTS 100vh -->
  <section class="container">
    <div class="hand-grid">
      <figure class="hand-grid__finger">
        <img :src="hand[0]" alt="mantis" />
      </figure>

      <figure class="hand-grid__finger">
        <img :src="hand[1]" alt="fly" />
      </figure>

      <figure class="hand-grid__finger">
        <img :src="hand[2]" alt="snail" />
      </figure>

      <figure class="hand-grid__finger">
        <img :src="hand[3]" alt="caterpillar" />
      </figure>

      <figure class="hand-grid__finger">
        <img :src="hand[4]" alt="moth" />
      </figure>

      <figure class="hand-grid__finger">
        <img :src="hand[5]" alt="mosquito" />
      </figure>
    </div>

    <!-- ABOUT POINTS -->
    <div class="about-grid">
      <p class="about-grid__text">
        Each scumbug has a unique look, formed by the haphazard combination of
        seven character attributes and mystical eyes with a sui generis iris
        showcasing an exclusive generative artwork;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[0]" alt="mantis" />
      </figure>

      <p class="about-grid__text">
        Each scumbug has its own birthday, as all 15 341 insects were bred
        between January 1st 1980 and December 31st 2021. Anniversaries, along
        with a few key Holidays, will mark a special occasion to create a deeper
        digital bond between the user and its scumbug;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[1]" alt="fly" />
      </figure>

      <p class="about-grid__text">
        Each scumbug metadata is 100% stored on the Ethereum blockchain and its
        artwork is hosted permanently on the Arweave blockchain;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[2]" alt="snail" />
      </figure>

      <p class="about-grid__text">
        Each scumbug is originally made in SVG (Scalable Vector Graphic), so
        they can eventually become bigger than you. They are displayed as a PNG
        image for the user experience, but SVG will be available for owners;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[3]" alt="caterpillar" />
      </figure>

      <p class="about-grid__text">
        15 000 Scumbugs will be released on the drop date, on XXX INSCRIRE DATE
        XXX. 341 other Scumbugs will be held for giveaways and various events;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[4]" alt="moth" />
      </figure>

      <p class="about-grid__text">
        Scumbugs collectibles are a genesis project acting as a member pass to
        the Scumbugs digital universe. The full Scumbugs experience will grow as
        the Scumbugs community does too;
      </p>

      <figure class="about-grid__finger">
        <img :src="hand[5]" alt="mosquito" />
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
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.text.about-top {
  display: flex;
  flex-direction: column;
  background: rgb(246, 247, 218);
  background: linear-gradient(
    0deg,
    rgba(246, 247, 218, 1) 85%,
    rgba(235, 228, 207, 1) 100%
  );

  // border: 7px solid red;
  min-height: 70vh;
  padding: 15em 0;

  @include responsive(0, $mobile) {
    padding: 5em 0;
  }

  @keyframes marquee {
    0% {
      background-position: 0;
    }

    100% {
      background-position: 5000%;
    }
  }

  .banner {
    animation: marquee 700s linear infinite;
    background-image: url(../assets/images/scene/tag_banner.png);
    background-color: transparent;
    background-repeat: repeat-x;
    width: 100vw;
    height: 70px;
    margin-bottom: 2em;

    position: absolute;
    top: -240px;
    left: -200px;
    z-index: 10;

    @include responsive(0, $mobile) {
      animation-duration: 2000s;
      width: 100vw;
      margin-bottom: 2em;
    }
  }

  .about-top .lw {
    max-width: none;
  }

  .about {
    background: #f6f7da;

    &__p1 {
      font-weight: 500;
      font-size: 1.7rem;
      line-height: 2.8rem;
    }
  }

  @include responsive(0, $mobile) {
    .text.about-top {
      padding: 7em 0;
    }

    .lw {
      // background: red;
      background: rgb(246, 247, 218);
    }

    .about__p1 {
      font-size: 1.25rem;
      line-height: 2rem;
    }

    .title {
      margin-top: 2em;
    }
  }
}

// -- BUGS ----------------------------------
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
}

/*
  - ABOUT BOTTOM CONTAINER ------------------------------
*/
.container {
  height: 120vh;
  background: #f6f7da;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  // padding: 10em 0;

  /*
  - HAND GRID ------------------------------
  */
  .hand-grid {
    position: absolute;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // border: 2px solid red;

    &__finger {
      width: 42%;
      height: auto;
      margin: 0;
      // border: 2.5px dashed lightgrey;
    }

    &__finger:nth-of-type(even) {
      grid-column-start: 2;
      grid-column-end: 3;
      justify-self: end;
      padding-top: 2em;
      position: relative;
      top: 35%;
    }

    &__finger:nth-of-type(odd) {
      grid-column-start: 1;
      grid-column-end: 2;
      justify-self: start;
      // padding-top: 2em;
      position: relative;
      top: 35%;
    }
  }

  /*
  -- ABOUT GRID ------------------------------
*/
  .about-grid {
    position: absolute;
    margin: 0 auto;
    width: 55vw;

    // border: 1px solid pink;

    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 0.5fr);

    &__text {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 2rem;
      // color: grey;
    }

    &__text:nth-of-type(even) {
      padding: 2em 0;
      padding-left: 7em;
      text-align: right;
    }

    &__text:nth-of-type(odd) {
      padding-right: 7em;
      text-align: left;
    }

    &__finger {
      display: none;
    }
  }

  @include responsive(0, $mobile) {
    padding-bottom: 8em;

    .hand-grid {
      display: none;
    }

    .about-grid {
      grid-template-rows: repeat(3, 0.5fr 0.5fr);
      width: 100vw;
      // position: relative;
      top: 5%;

      &__text {
        font-size: 0.8rem;
        line-height: 1.2rem;
      }

      &__text:nth-of-type(even) {
        padding: 1em 2em 0 0;
        padding-left: 2em;
      }

      &__text:nth-of-type(odd) {
        padding: 0 2em;
      }

      &__finger {
        display: block;
        margin: 0;

        img {
          width: 25%;
        }
      }

      &__finger:nth-of-type(even) {
        text-align: right;
      }
    }
  }
}
</style>
