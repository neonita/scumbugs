<template>
  <section class="team" id="team">
    <h2 class="title">Team</h2>
    <ul>
      <li v-for="member in team" :key="member.name">
        <div class="image">
          <ResponsiveImage :sources="member.image" :alt="member.name" />
        </div>
        <h3 class="title">{{ member.name }}</h3>
        <p class="description">{{ member.description }}</p>
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
          description:
            "A mischiveous fly, the ultimate scum of scums. The Brunoest of Brunos. We don't talk about them. But it was our wedding day, we were getting ready and there wasn't a cloud in the sky--no clouds allowed in the sky. Bruno hovers in with a mischiveous grin--THUNDER!...",
          image: [
            require("@/assets/images/team/bruno_desktop.png"),
            require("@/assets/images/team/bruno_desktop.png"),
            require("@/assets/images/team/bruno_large.png"),
          ],
        },
        {
          name: "Wholesum_scum",
          description:
            "Lorem ipsum dolor sit amet, cons ec- tetuer adipiscing elit, sed diam nonum- my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: [
            require("@/assets/images/team/wholesum_desktop.png"),
            require("@/assets/images/team/wholesum_desktop.png"),
            require("@/assets/images/team/wholesum_large.png"),
          ],
        },
        {
          name: "0xtina",
          description:
            "Lorem ipsum dolor sit amet, cons ec- tetuer adipiscing elit, sed diam nonum- my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: [
            require("@/assets/images/team/0xtina_desktop.png"),
            require("@/assets/images/team/0xtina_desktop.png"),
            require("@/assets/images/team/0xtina_large.png"),
          ],
        },
        {
          name: "Xenobot",
          description:
            "Lorem ipsum dolor sit amet, cons ec- tetuer adipiscing elit, sed diam nonum- my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
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
    margin: 60px auto;
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
  }

  .image {
    border-radius: 100%;
    overflow: hidden;
    position: relative;
  }
}
</style>
