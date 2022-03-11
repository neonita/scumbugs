<template>
  <section class="content">
    <div class="content__scroller" ref="scroll">
      <div class="content__scroller__inner" ref="scrollInner">
        <section class="scene">
          <div class="scene__button_container">
            <h1 class="scene__title">
              Once upon a time, deep in the sun-kissed meadow...
            </h1>
          </div>
          <div class="scene__top">
            <ResponsiveImage
              :sources="topScene"
              :on-image-loaded="
                () => {
                  topSceneLoaded = true;
                }
              "
            />
          </div>
          <div class="scene__main">
            <ResponsiveImage
              :sources="mainScene"
              :on-image-loaded="
                () => {
                  mainSceneLoaded = true;
                }
              "
            />
          </div>
        </section>
        <Origin />
      </div>
    </div>
    <About />
    <Roadmap />
    <GenerativeArtwork />
    <Team />
  </section>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ResponsiveImage from "./helpers/ResponsiveImage.vue";
import About from "./About.vue";
import Team from "./Team.vue";
import GenerativeArtwork from "./GenerativeArtwork.vue";
import Roadmap from "./Roadmap.vue";
import Origin from "./Origin.vue";

export default {
  data() {
    return {
      topScene: [
        require("@/assets/images/scene/top_scene_mobile.png"),
        require("@/assets/images/scene/top_scene_desktop.png"),
        require("@/assets/images/scene/top_scene_large.png"),
      ],
      mainScene: [
        require("@/assets/images/scene/main_scene_mobile.png"),
        require("@/assets/images/scene/main_scene_desktop.png"),
        require("@/assets/images/scene/main_scene_large.png"),
      ],
      topSceneLoaded: false,
      mainSceneLoaded: false,
    };
  },
  components: {
    ResponsiveImage,
    About,
    Team,
    GenerativeArtwork,
    Roadmap,
    Origin,
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setScrollerHeight()
    })
  },
  methods: {
    initializeGsap() {
      gsap.fromTo(
        ".scene__main",
        { transform: "translateY(40vh)" },
        {
          transform: "translateY(0)",
          ease: "none",
          scrollTrigger: {
            trigger: ".scene",
            start: "top top",
            end: "30% top",
            scrub: true,
          },
        }
      );

      gsap.to(".scene__top", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".scene",
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      gsap.to(".content__scroller", {
        ease: "none",
        scrollTrigger: {
          trigger: ".content__scroller",
          start: "bottom bottom",
          end: "bottom top",
          toggleClass: "content__scroller--sticky",
        },
      });
    },
    enabledScroll() {
      if (this.topSceneLoaded && this.mainSceneLoaded) {
        this.initializeGsap();
        this.setScrollerHeight();
        document.body.style.overflow = "auto";
      }
    },
    setScrollerHeight() {
      this.$refs.scroll.style.height = `${this.$refs.scrollInner.clientHeight}px`;
    }
  },
  watch: {
    topSceneLoaded() {
      this.enabledScroll();
    },
    mainSceneLoaded() {
      this.enabledScroll();
    },
  },
  created() {
    document.body.style.overflow = "hidden";
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.content {
  position: relative;

  &__scroller {
    position: relative;

    &--sticky {
      .content__scroller__inner {
        bottom: 0;
        position: fixed;
      }
    }
  }

}

.scene {
  position: relative;

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  &__top {
    align-items: center;
    background: #82b34a;
    display: grid;
    height: calc(100vh - 60px);
    padding-bottom: 100vh;
    justify-content: center;
    position: relative;
    z-index: 1;

    &__cover,
    picture {
      grid-column: 1;
      grid-row: 1;
    }

    picture {
      height: 100%;
      object-fit: cover;
      width: 100%;
      z-index: 2;
    }
  }

  &__button_container {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__title {
    font-size: clamp(20px, 5vw, 60px);
    left: 50%;
    position: absolute;
    text-align: center;
    top: 45vh;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  &__button {
    appearance: none;
    background: #fff;
    border-radius: 10px;
    border: 0;
    display: block;
    font-size: clamp(20px, 5vw, 60px);
    margin: 0 auto;
    padding: 20px;
    position: sticky;
    text-transform: uppercase;
    text-align: center;
    transform: translateY(-50%);
    top: 50%;
    width: 240px;
    z-index: 10;
  }

  &__main {
    position: relative;
    margin-top: -140vh;
    pointer-events: none;
    transform: translateY(20%);
    z-index: 4;
  }
}

.text {
  --lw: 860px;
  align-items: center;
  background: #ebe4cf;
  box-sizing: border-box;

  @include responsive(0, $mobile) {
    // margin-top: -5vh;
    padding: 60px 0;
  }

  @include responsive($mobile) {
    display: flex;
    min-height: 110vh;
    padding: 120px 0;
    position: relative;
    // margin-top: -20vh;
    z-index: 3;
  }

  .lw {
    // @include responsive(0, $tablet) {
    //   display: block;
    // }
    display: block;
  }

  .title {
    margin-top: 0;
  }

  h1,
  h2 {
    font-size: clamp(60px, 10vw, 120px);
    grid-column: 1 / 6;
    letter-spacing: -0.04rem;
  }

  p:nth-of-type(1) {
    grid-column: 1 / 7;
  }

  p:nth-of-type(2) {
    grid-column: 7 / -1;
  }
}

.intro {
  min-height: 70vh;
  margin-top: -12vw;
  padding-top: 8vw;
}

.image {
  img {
    display: block;
    width: 100%;
  }
}
</style>
