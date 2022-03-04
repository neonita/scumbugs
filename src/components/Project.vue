<template>
  <section class="text intro" id="project">
    <div class="lw">
      <!-- <h1 class="title">Scumbugs project</h1> -->
      <ul class="convo">
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user1" />
          </div>
          <span class="convo__user">BUG 1</span>
          <div class="convo__text">
            <p>
              Bugs are curious creatures by nature, so it’s no surprise one once
              ventured into a computer.
            </p>
            <p>
              Decades ago, guided by the blinking lights of a circuit chip, an
              adventurous moth flew into a CPU. The insect, looking for the
              light source, instead found the source
            </p>
            <p>
              The software wasn’t programmed to host a life form and immediately
              shut down. The system had to be debugged and the device rebooted.
              But the spirit of the moth was passed onto the network.
            </p>
            <p>
              That morning of January 1980, when the moth of yore hit the core
              of the processor, it cocooned into a new species of digital life:
              the scumbug. What came out of the pupa were six new types of
              computerized insectia. Ever since, the Scumbugs have been evolving
              into homebodies versions of their intrepid ancestor - up until
              very recently, when they finally banded together to infest the
              blockchain. There, in hope of looking the original scum in the
              eye, they [bug buzzing loudly]
            </p>
          </div>
        </li>
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user2" />
          </div>
          <span class="convo__user">BUG 2</span>
          <div class="convo__text">
            <p>lol wtf are you snailing about just buzz me in</p>
          </div>
        </li>
        <li class="convo__element">
          <div class="convo__avatar">
            <ResponsiveImage :sources="user1" />
          </div>
          <span class="convo__user">BUG 1</span>
          <div class="convo__text">
            <p>Fucking hell, whatever. Here:</p>
            <p>WHAT? ABOUT SCUMBUGS</p>
            <p>
              Scumbugs is a collection of 15 341 unique bugs infesting the
              Ethereum blockchain. Bred at the intersection of generative art
              and creative coding, every scumbug is generated with randomly
              seeded values, issued at the moment of the NFT mint transaction
              hash.
            </p>
            <ul>
              <li>
                There are 6 species of Scumbugs: Mantis, Caterpillar, Snail,
                Mosquito, Fly and Moth;
              </li>
              <li>
                Each scumbug has a unique look, formed by the haphazard
                combination of seven character attributes and mystical eyes with
                a sui generis iris showcasing an exclusive generative artwork;
              </li>
              <li>
                Each scumbug has its own birthday, as all 15 341 insects were
                bred between January 1st 1980 and December 31st 2021.
                Anniversaries, along with a few key Holidays, will mark a
                special occasion to create a deeper digital bond between the
                user and its scumbug;
              </li>
              <li>
                Each scumbug metadata is 100% stored on the Ethereum blockchain
                and its artwork is hosted permanently on the Arweave blockchain;
              </li>
              <li>
                Each scumbug is originally made in SVG (Scalable Vector
                Graphic), so they can eventually become bigger than you. They
                are displayed as a PNG image for the user experience, but SVG
                will be available for owners;
              </li>
              <li>
                15 000 Scumbugs will be released on the drop date, on XXX
                INSCRIRE DATE XXX. 341 other Scumbugs will be held for giveaways
                and various events;
              </li>
              <li>
                Scumbugs collectibles are a genesis project acting as a member
                pass to the Scumbugs digital universe. The full Scumbugs
                experience will grow as the Scumbugs community does too;
              </li>
              <li>
                40% of the primary sales and 50% of the royalties will be
                redistributed to the Scumbugs community treasury, in order to
                finance its ever growing experience.
              </li>
            </ul>
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
        require("@/assets/images/team/bruno_desktop.png"),
        require("@/assets/images/team/bruno_desktop.png"),
        require("@/assets/images/team/bruno_large.png"),
      ],
      user2: [
        require("@/assets/images/team/0xtina_desktop.png"),
        require("@/assets/images/team/0xtina_desktop.png"),
        require("@/assets/images/team/0xtina_large.png"),
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

.convo {
  grid-column: 2 / 11;
  margin: 0;
  padding: 0;

  p,
  ul {
    line-height: 1.2;
    margin-bottom: 1em;
  }

  ul {
    padding: 0 0 0 20px;
  }

  li {
    list-style: disc;
    margin-bottom: 0.75em;
  }

  &__element {
    align-items: center;
    border-radius: 20px;
    display: grid;
    gap: 20px;
    padding: 20px;
    grid-template-columns: 60px 1fr;
    margin-bottom: 30px;
    border: 2px solid #b3aea0;

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

  &__user {
    font-weight: 800;
    grid-column: 2 / -1;
    display: flex;
  }

  &__text {
    grid-column: 2 / -1;
  }
}
</style>
