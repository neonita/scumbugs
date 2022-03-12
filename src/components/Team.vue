<template>
  <section class="team" id="team">
    <h2 class="title">Team</h2>
    <ul>
      <li v-for="member in team" :key="member.name">
        <div class="image">
          <ResponsiveImage :sources="member.image" :alt="member.name" />
        </div>
        <h3 class="title">{{ member.name }}</h3>
        <ul class="description">
          <li>{{ member.description[0] }}</li>
          <li>{{ member.description[1] }}</li>
          <li>{{ member.description[2] }}</li>
          <li>{{ member.description[3] }}</li>
          <li>{{ member.description[4] }}</li>
          <li>{{ member.description[5] }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
import ResponsiveImage from "./helpers/ResponsiveImage.vue";
export default {
  data() {
    return {
      team: [
        {
          name: "Bruno",
          description: [
            "Mischievous Fly",
            "Creative Scumbag / Picky Kid",
            "Brand Strategist",
            "Digital Community Builder",
            "Visionary/ Ref God",
          ],
          image: [
            require("@/assets/images/team/bruno_desktop.png"),
            require("@/assets/images/team/bruno_desktop.png"),
            require("@/assets/images/team/bruno_large.png"),
          ],
        },
        {
          name: "Wholesum_scum",
          description: [
            "Web3 Visionary",
            "JPEG Addict",
            "Creative Mind / Braindump King",
            "Sports & Music Lover",
            "Passionate <3",
          ],
          image: [
            require("@/assets/images/team/wholesum_desktop.png"),
            require("@/assets/images/team/wholesum_desktop.png"),
            require("@/assets/images/team/wholesum_large.png"),
          ],
        },
        {
          name: "0xtina",
          description: [
            "That IT Guy Who Smells Like Soup",
            "Napoleon Dynamite Ambassador",
            "Multi-instrumentalist",
            "Can Kick Gordon Ramsay's Ass In the Kitchen",
          ],
          image: [
            require("@/assets/images/team/0xtina_desktop.png"),
            require("@/assets/images/team/0xtina_desktop.png"),
            require("@/assets/images/team/0xtina_large.png"),
          ],
        },
        {
          name: "Xenobot",
          description: [
            "Image Creator and Digital Compositor",
            "Wacom Pen Adept / Geek",
            "Emergent Music Lover",
            "Part-time DJ",
          ],
          image: [
            require("@/assets/images/team/xenobot_desktop.png"),
            require("@/assets/images/team/xenobot_desktop.png"),
            require("@/assets/images/team/xenobot_large.png"),
          ],
        },
      ],
    };
  },
  components: { ResponsiveImage },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.team {
  color: #fff;

  > .title {
    font-size: clamp(20px, 5vw, 60px);
    margin-block: 60px;
    text-align: center;
  }

  ul {
    display: grid;
    gap: 120px;
    grid-template-columns: 1fr 1fr;
    margin: 40px auto;
    max-width: 900px;
    padding: 0 var(--lp);

    @include responsive(0, $mobile) {
      grid-template-columns: 1fr;
      padding: 0 40px;
    }
  }

  li {
    list-style: none;

    .title {
      font-size: clamp(20px, 4vw, 40px);
    }

    @include responsive(0, $mobile) {
      text-align: center;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;

      .title {
        font-size: 1.6rem;
      }
    }
  }

  .image {
    border-radius: 100%;
    overflow: hidden;
    position: relative;
  }
}

ul.description {
  display: block;
  padding: 0;
}

.description li {
  margin-left: 0;
  padding-left: 0;
}
</style>
