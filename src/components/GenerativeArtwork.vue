<template>
  <section class="text generative" id="generative-artwork">
    <div class="lw">
      <h2 class="title">Iris Generative Art</h2>
    </div>
    <div class="images">
      <div class="image" v-for="image in images" :key="image.description">
        <ResponsiveImage :sources="image.image" :alt="image.description" />
      </div>
    </div>
    <div class="lw">
      <p>Every scumbug has a gaze like you’ve never seen before.</p>
      <p>
        Made with generative art, a practice that involves both technical
        prowess and a creative process, the Scumbugs’ irises have something
        mystical about them: they are generated based on randomly seeded values
        from the minting transaction hash.
      </p>
      <p>
        Each iris is an artifact of their ancestor DNA and portrays fragments of
        what their ancestor once saw. The transaction hash IS the DNA.
      </p>
      <p>All this is a little vague, you say?</p>
      <p>
        Let’s just put it this way then: each pair of eyes has a unique work of
        art, just like each scumbug has a unique style, personality, birthday,
        and DNA!
      </p>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "./helpers/ResponsiveImage.vue";

export default {
  components: {
    ResponsiveImage,
  },
  data() {
    return {
      images: [
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_1_200px.png'),
            // require('@/assets/images/iris/bug_iris_1_400px.png'),
            // require('@/assets/images/iris/bug_iris_1_600px.png')
            require("@/assets/images/iris/bug_iris_1_2000px.png"),
            require("@/assets/images/iris/bug_iris_1_2000px.png"),
            require("@/assets/images/iris/bug_iris_1_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris1_200px.png'),
            // require('@/assets/images/iris/iris1_400px.png'),
            // require('@/assets/images/iris/iris1_600px.png')
            require("@/assets/images/iris/iris1_2000px.png"),
            require("@/assets/images/iris/iris1_2000px.png"),
            require("@/assets/images/iris/iris1_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_2_200px.png'),
            // require('@/assets/images/iris/bug_iris_2_400px.png'),
            // require('@/assets/images/iris/bug_iris_2_600px.png')
            require("@/assets/images/iris/bug_iris_2_2000px.png"),
            require("@/assets/images/iris/bug_iris_2_2000px.png"),
            require("@/assets/images/iris/bug_iris_2_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris2_200px.png'),
            // require('@/assets/images/iris/iris2_400px.png'),
            // require('@/assets/images/iris/iris2_600px.png')
            require("@/assets/images/iris/iris2_2000px.png"),
            require("@/assets/images/iris/iris2_2000px.png"),
            require("@/assets/images/iris/iris2_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris3_200px.png'),
            // require('@/assets/images/iris/iris3_400px.png'),
            // require('@/assets/images/iris/iris3_600px.png')
            require("@/assets/images/iris/iris3_2000px.png"),
            require("@/assets/images/iris/iris3_2000px.png"),
            require("@/assets/images/iris/iris3_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_3_200px.png'),
            // require('@/assets/images/iris/bug_iris_3_400px.png'),
            // require('@/assets/images/iris/bug_iris_3_600px.png')
            require("@/assets/images/iris/bug_iris_3_2000px.png"),
            require("@/assets/images/iris/bug_iris_3_2000px.png"),
            require("@/assets/images/iris/bug_iris_3_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris4_200px.png'),
            // require('@/assets/images/iris/iris4_400px.png'),
            // require('@/assets/images/iris/iris4_600px.png')
            require("@/assets/images/iris/iris4_2000px.png"),
            require("@/assets/images/iris/iris4_2000px.png"),
            require("@/assets/images/iris/iris4_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_4_200px.png'),
            // require('@/assets/images/iris/bug_iris_4_400px.png'),
            // require('@/assets/images/iris/bug_iris_4_600px.png')
            require("@/assets/images/iris/bug_iris_4_2000px.png"),
            require("@/assets/images/iris/bug_iris_4_2000px.png"),
            require("@/assets/images/iris/bug_iris_4_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_5_200px.png'),
            // require('@/assets/images/iris/bug_iris_5_400px.png'),
            // require('@/assets/images/iris/bug_iris_5_600px.png')
            require("@/assets/images/iris/bug_iris_5_2000px.png"),
            require("@/assets/images/iris/bug_iris_5_2000px.png"),
            require("@/assets/images/iris/bug_iris_5_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris5_200px.png'),
            // require('@/assets/images/iris/iris5_400px.png'),
            // require('@/assets/images/iris/iris5_600px.png')
            require("@/assets/images/iris/iris5_2000px.png"),
            require("@/assets/images/iris/iris5_2000px.png"),
            require("@/assets/images/iris/iris5_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/bug_iris_6_200px.png'),
            // require('@/assets/images/iris/bug_iris_6_400px.png'),
            // require('@/assets/images/iris/bug_iris_6_600px.png')
            require("@/assets/images/iris/bug_iris_6_2000px.png"),
            require("@/assets/images/iris/bug_iris_6_2000px.png"),
            require("@/assets/images/iris/bug_iris_6_2000px.png"),
          ],
        },
        {
          description: "Generative Artwork",
          image: [
            // require('@/assets/images/iris/iris6_200px.png'),
            // require('@/assets/images/iris/iris6_400px.png'),
            // require('@/assets/images/iris/iris6_600px.png')
            require("@/assets/images/iris/iris6_2000px.png"),
            require("@/assets/images/iris/iris6_2000px.png"),
            require("@/assets/images/iris/iris6_2000px.png"),
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.text.generative {
  background: #caf7ad;
  flex-direction: column;

  .title {
    grid-column: 1 / 7;
    margin: 0;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: clamp(40px, 10vh, 80px) 0;

    @include responsive(0, $tablet) {
      grid-template-columns: 1fr 1fr;

      :nth-child(1) {
        order: 1;
      }

      :nth-child(2) {
        order: 2;
      }

      :nth-child(3) {
        order: 4;
      }

      :nth-child(4) {
        order: 3;
      }

      :nth-child(5) {
        order: 6;
      }

      :nth-child(6) {
        order: 5;
      }

      :nth-child(7) {
        order: 7;
      }

      :nth-child(8) {
        order: 8;
      }

      :nth-child(9),
      :nth-child(10),
      :nth-child(11),
      :nth-child(12) {
        display: none;
      }
    }
  }

  @include responsive(0, $mobile) {
    p {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
}
</style>
