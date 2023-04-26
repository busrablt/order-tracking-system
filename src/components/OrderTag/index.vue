<template>
  <div id="order-tag">
    <button :class="type">{{ value }}</button>
  </div>
</template>

<script>
export default {
  name: "OrderTag",
  props: {
    value: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  width: fit-content;
  padding: 3px 6px;
  border-radius: 3px;
  border: none;
  color: $white;
  &.yellow {
    background: $yellow;
  }
  &.blue {
    background: $blue;
  }
  &.orange {
    background: $orange;
  }
}
</style>
