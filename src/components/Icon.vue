<template>
  <svg role="img" :class="`icon-${icon}`">
    <use :href="`#${icon}`" :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  }
}
</script>