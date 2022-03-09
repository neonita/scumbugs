<template>
  <header ref="header" :class="`header ${menuOpened ? 'menu-opened' : ''}`">
    <div class="lw">
      <a class="logo" href="/">
        <Logo />
      </a>
      <button class="btn-connect" @click="onToggle">Coming soon</button>
      <nav>
        <ul>
          <li>
            <a @click.prevent="scrollTo" href="#origin" data-target="origin"
              >Origin</a
            >
          </li>
          <li>
            <a @click.prevent="scrollTo" href="#bugs" data-target="bugs"
              >The bugs</a
            >
          </li>
          <li>
            <a @click.prevent="scrollTo" href="#roadmap" data-target="roadmap"
              >Roadmap</a
            >
          </li>
          <li>
            <a
              @click.prevent="scrollTo"
              href="#generative-artwork"
              data-target="generative-artwork"
              >Generative artwork</a
            >
          </li>
          <li>
            <a @click.prevent="scrollTo" href="#team" data-target="team"
              >The team</a
            >
          </li>
        </ul>
      </nav>
      <div class="social">
        <ul>
          <li>
            <a href="https://twitter.com" target="_blank">
              <Icon icon="twitter" />
            </a>
          </li>
          <li>
            <a href="https://discord.com" target="_blank">
              <Icon icon="discord" />
            </a>
          </li>
        </ul>
      </div>
      <button
        :class="`btn-toggle ${menuOpened ? 'menu-opened' : ''}`"
        @click="menuOpened = !menuOpened"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Icon from "./Icon.vue";
import Logo from "./Logo.vue";

export default {
  data() {
    return {
      menuOpened: false,
    };
  },
  components: {
    Icon,
    Logo,
  },
  mounted() {
    gsap.to("#app", {
      scrollTrigger: {
        trigger: "#app",
        start: "300px top",
        toggleClass: "header-shadow",
      },
    });
  },
  methods: {
    scrollTo(event) {
      const $ref = document.querySelector(
        `#${event.srcElement.dataset.target}`
      );
      let offset = $ref.offsetTop;

      this.menuOpened = false;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    },
    onToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

header {
  height: 120px;
  position: fixed;
  width: 100%;
  z-index: 20;

  @include responsive($medium) {
    --lp: 40px;
  }

  &::after {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    content: "";
    display: block;
    height: 160%;
    left: 0;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 0.3s;
    width: 100%;
    z-index: -1;

    @include responsive(0, $mobile) {
      height: 120%;
      opacity: 0.7;
    }
  }

  .lw {
    --logo-width: 160px;
    align-items: center;
    grid-template-columns: var(--logo-width) 1fr auto auto;
    height: 100%;

    @include responsive(0, 360px) {
      --logo-width: 100px;
    }

    @include responsive(360px, 374px) {
      --logo-width: 120px;
    }

    @include responsive(375px, $mobile) {
      --logo-width: 130px;
    }

    @include responsive(0, $mobile) {
      grid-template-columns: var(--logo-width) 1fr 40px;
    }

    @include responsive($mobile, $large) {
      grid-template-columns: var(--logo-width) 1fr auto 40px;
    }
  }

  .logo {
    display: block;
    z-index: 3;

    svg {
      height: 42px;
      width: 100%;
    }
  }

  .btn-connect {
    @include button-primary;

    @include responsive(0, 374px) {
      padding: 10px;
    }

    @include responsive(0, $mobile) {
      grid-column: 2;
    }

    @include responsive($large) {
      grid-column: 4;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  nav {
    z-index: 2;

    @include responsive(0, $large) {
      align-items: center;
      background: rgba(0, 0, 0, 0.96);
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      display: flex;
      height: 100vh;
      left: 0;
      position: absolute;
      transition: clip-path 0.5s;
      top: 0;
      width: 100%;
    }

    @include responsive($large) {
      grid-column: 2;
      grid-row: 1;
    }

    ul {
      justify-content: center;

      @include responsive(0, $large) {
        align-items: center;
        flex-direction: column;
        width: 100%;
      }
    }

    li {
      margin: 0 20px;
    }

    a {
      display: block;
      white-space: nowrap;

      @include responsive(0, $large) {
        font-size: clamp(20px, 10vw, 30px);
        height: max(40px, 8vh);
      }
    }
  }

  .social {
    z-index: 3;

    @include responsive(0, $mobile) {
      bottom: 10vh;
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: fixed;
      transform: translateY(10px);
      transition: opacity 0.2s, transform 0.3s;
      width: 100%;
    }

    @include responsive(0, $large) {
      justify-self: end;
    }

    @include responsive($mobile, $large) {
      grid-column: 2;
      grid-row: 1;
    }

    @include responsive($large) {
      grid-column: 3;
      grid-row: 1;
    }

    ul {
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    li:not(:first-child) {
      margin-left: 20px;
    }

    a {
      display: block;
      height: 30px;
    }

    svg {
      fill: $white;
      height: 30px;
      width: 30px;
    }
  }

  .btn-toggle {
    background: none;
    display: none;
    height: 40px;
    justify-self: end;
    position: relative;
    width: 40px;
    z-index: 3;

    @include responsive(0, $large) {
      display: block;
    }

    span {
      background: $white;
      height: 2px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.2s;
      transform-origin: left center;
      width: 30px;

      &:nth-child(1) {
        margin-top: -8px;
      }

      &:nth-child(4) {
        margin-top: 8px;
      }
    }

    &.menu-opened {
      span {
        &:nth-child(1),
        &:nth-child(4) {
          transform: scaleX(0) translate(-50%, -50%);
        }

        &:nth-child(2) {
          transform: rotate(45deg) translate(-50%, 0);
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate(-50%, 0);
        }
      }
    }
  }

  &.menu-opened {
    nav {
      @include responsive(0, $large) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }

    .social {
      opacity: 1;
      pointer-events: initial;
      transform: none;
      transition-delay: 0.2s;
    }
  }

  .header-shadow & {
    &::after {
      opacity: 1;
    }
  }
}
</style>
