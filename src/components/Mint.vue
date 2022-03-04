<template>
  <section class="mint">
    <div class="mint__inner">
      <fade-loader :loading="loading" :color="'white'"></fade-loader>
      <div v-if="!loading">
        <div class="mint__logo">
          <Logo />
        </div>
        <div class="mint__left">
        </div>
        <div class="mint__range">
          <input type="range" min="1" :max="maxAmount" range="1" v-model="bugNum" />
        </div>
        <div class="mint__actions">
          <input type="number" :max="maxAmount" v-model="bugNum" />
          <button @click="mint">Mint</button>
        </div>
        <p class="mint__price">
          price: {{totalPrice}} eth
        </p>
        <p class="mint__error">
          {{error}}
        </p>
      </div>
    </div>
    <button class="mint__close" @click="onToggle"><Icon icon="x" /></button>
  </section>
</template>

<script>
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import ContractService from '../services/contract.service';
import WalletService from '../services/wallet.service';
import EnvUtils from "../utils/env.utils";
import Icon from './Icon.vue'
import Logo from './Logo.vue'

export default {
  components: {
    Icon,
    Logo,
    FadeLoader
  },
  computed: {
    totalPrice() {
      const price = parseInt(this.unitPrice) * this.bugNum;
      return ContractService.weiToEth(price.toString());
    }
  },
  async created() {
    this.loading = true;
    this.unitPrice = await ContractService.getUnitPrice();
    this.maxAmount = await ContractService.getMaxAmount();
    if (!WalletService.isConnected()) {
      try {
        await WalletService.connect();
      } catch(e) {
        this.$emit('toggle')
      }
    }
    this.loading = false;
  },
  data() {
    return {
      bugNum: 1,
      loading: false,
      maxAmount: 1,
      unitPrice: 0.069,
      error: "",
    }
  },
  methods: {
    onToggle() {
      this.$emit('toggle')
    },
    async mint() {
      const desiredNetwork = EnvUtils.getNetwork();
      if ((await WalletService.getNetwork()) !== desiredNetwork) {
        this.error = `select ${desiredNetwork} network`;
        return;
      }
      WalletService.mint(this.bugNum).catch(e => {
        console.log(e.message);
        this.error = "tx failed";
      });
      this.error = "";
    }
  }

}
</script>

<style lang="scss">

@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.mint {
  align-items: center;
  background: rgba(0,0,0,0.9);
  color: #FFF;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  &__close {
    align-items: center;
    background: none;
    border: 0;
    display: flex;
    height: 60px;
    justify-content: center;
    position: absolute;
    right: 60px;
    top: 60px;
    width: 60px;

    svg {
      height: 20px;
      fill: white;
      width: 20px;
    }

    @include responsive(0, $mobile) {
      right: 0;
      top: 0;
    }

    @include responsive($mobile, $tablet) {
      right: 20px;
      top: 20px;
    }
  }

  &__inner {
    padding: 20px;
  }

  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;

    svg {
      max-width: 320px;
      width: 100%;

      @include responsive(0, $mobile) {
        max-width: 280px;
      }
    }
  }

  &__range {
    margin-bottom: 40px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;

    input {
      appearance: none;
      background: none;
      border: 0;
      color: #FFF;
      font-size: 2em;
      width: 80px;

      &:focus {
        border: 0;
        outline: none;
      }
    }

    button {
      @include button-primary;
    }
  }

  &__price {
    margin-top: 60px;
    text-align: center;
  }

  &__error {
    text-align: center;
    color: red;
  }
}

input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  cursor: pointer;
  background: #FFF;
  border-radius: 2px;
  height: 12px;
  width: 100%;
}

input[type=range]::-webkit-slider-thumb {
  border: 4px solid #8CE1E5;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  height: 36px;
  width: 36px;
  border-radius: 100%;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -12px;
}

input[type=range]:focus::-webkit-slider-thumb {
  background: #8CE1E5;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}

input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}

</style>