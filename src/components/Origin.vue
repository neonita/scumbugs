<template>
  <section class="text intro" id="origin">
    <div class="lw">
      <!-- <h1 class="title">Scumbugs Origins</h1> -->
      <ul class="convo">
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user1" />
          </div>
          <div class="convo__thread">
            <div class="convo__user">
              <span class="convo__name og_snail">OG_Snail</span>
              <span class="convo__timestamp">03/08/2022</span>
            </div>
            <div class="convo__text">
              <p>
                Bugs are curious creatures by nature, so it’s no surprise one
                once ventured into a computer.
              </p>
              <p>
                That morning of September 1947, an adventurous moth crept into a
                CPU while looking for the light source. The software wasn't
                programmed to host organisms and sparked a new species and the
                spirit of the moth was passed into the network. For generations,
                computer nerds throughout the world considered a "bug" to be a
                glitch in an operating system. We now know what every software
                bug has always been, this new species of digital life: a
                scumbug, a digital descendant of the original moth.
              </p>
              <p>
                Fast forward thirty odd years and not only have computing
                machines greatly evolved, so have the Scumbugs. Six types of
                these computerized insectia, bred in the computer world, were
                ready to hatch.
              </p>
              <p>
                From January 1st, 1980 to the very end of the year 2021, a
                scumbug was born daily into cyberspace. Although different in
                allure, each shared the intrepid character of their mother-moth.
              </p>
              <p>
                Today, the Scumbugs are banding together in order to infest the
                blockchain. There, in hopes of looking the original scum in the
                eye, they….
              </p>
              <p class="bold" style="margin-top: 2em">[bug buzzing loudly]</p>
            </div>
          </div>
        </li>
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user2" />
          </div>
          <div class="convo__thread">
            <div class="convo__user">
              <span class="convo__name n0rman">n0rman</span>
              <span class="convo__timestamp">03/08/2022</span>
            </div>
            <div class="convo__text">
              <p>Looool bo0oOooring! Just drop the alpha already!</p>
            </div>
          </div>
        </li>
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user1" />
          </div>
          <div class="convo__thread">
            <div class="convo__user">
              <span class="convo__name og_snail">OG_Snail</span>
              <span class="convo__timestamp">03/08/2022</span>
            </div>
            <div class="convo__text">
              <p>
                I was in the midst of explaining something, you good for nothing
                pest! C’mon up and make sure to wipe the sand off you before
                approaching the computer screen...
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "./helpers/ResponsiveImage.vue";

export default {
  data() {
    return {
      user1: [
        require("@/assets/images/scene/OG_snail.png"),
        require("@/assets/images/scene/OG_snail.png"),
        require("@/assets/images/scene/OG_snail.png"),
      ],
      user2: [
        require("@/assets/images/scene/norman.png"),
        require("@/assets/images/scene/norman.png"),
        require("@/assets/images/scene/norman.png"),
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

.bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

.text p {
  font-weight: 400;
  font-size: none;
}

.convo {
  // grid-column: 2 / 11; // ref _layout.scss // 12 cols // actually does nothing due to display: block's override in Scene.vue line 227
  margin: 0;
  padding: 0;

  p,
  ul {
    margin-bottom: 1em;
    color: rgb(61, 61, 61);
  }

  p:nth-of-type(1) {
    margin-top: 0.5em;
  }

  ul {
    padding: 0 0 0 20px;
  }

  li {
    list-style: disc;
    margin-bottom: 1.5em;
  }

  &__element {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 5px 20px;
    padding: 0 20px;

    @include responsive(0, $mobile) {
      grid-template-columns: 40px 1fr;
    }
  }

  &__avatar {
    aspect-ratio: 1;
    border-radius: 100%;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  &__thread {
    display: grid;
    grid-template-rows: 25px auto;
  }

  &__user {
    align-items: flex-end;
    display: flex;
    gap: 0 0.5em;
  }

  &__name {
    font-weight: 700;
  }

  &__timestamp {
    color: rgb(156, 156, 156);
    font-size: small;
  }

  &__text {
    grid-column: 2 / -1;
  }
}

.og_snail {
  color: #c75454;
}

.n0rman {
  color: #d89658;
}
</style>
