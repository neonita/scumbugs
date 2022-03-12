<template>
  <section class="text road" id="roadmap">
    <div class="lw">
      <h2 class="title">Roadmap</h2>
      <p>
        No one could have guessed that a simple moth and a primitive computer
        could create a new species of digital bugs. And nobody can predict what
        an intricate insect and a sophisticated metaworld could lead to. 👀
      </p>

      <p>
        Bugs have been crawling the Earth for 400 million years, and the
        metaverse is only beginning to host life. In the physical world, just
        like the digital cyberspace, bugs were one of the first lifeforms to
        proliferate. A true bug can tough it out in the harshest conditions and
        overcome the toughest challenges. Just imagine how easily Scumbugs will
        thrive in an environment optimized for a great user experience…
      </p>

      <p>
        Ownership over a scumbug is the doorway into a bug’s e-life. Immerse
        yourself in the world of NFT’s but with a hedonistic, counter-culture
        twist that can’t be found anywhere else!
      </p>

      <div class="flyguide">
        <ResponsiveImage :sources="flyguide" />
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "./helpers/ResponsiveImage.vue";

export default {
  data() {
    return {
      flyguide: [
        require("@/assets/images/scene/road_map_illu.png"),
        require("@/assets/images/scene/road_map_illu.png"),
        require("@/assets/images/scene/road_map_illu.png"),
      ],
    };
  },
  components: {
    ResponsiveImage,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.text.road {
  background: #f8dfe8;

  @include responsive(0, $mobile) {
    p {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
}

.flyguide {
  overflow: hidden;
  text-align: right;
  position: relative;
  animation: levitate 3s ease-in-out infinite;

  @keyframes levitate {
    0% {
      transform: translatey(0px);
    }

    50% {
      transform: translatey(-32px);
    }

    100% {
      transform: translatey(0px);
    }
  }

  img {
    width: 22%;
    height: auto;
    // transform: rotate(20deg);
    object-fit: cover;
  }
}
</style>
