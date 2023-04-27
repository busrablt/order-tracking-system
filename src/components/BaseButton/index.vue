<template>
  <div id="order-button">
    <button
      :style="customStyle"
      class="buttons"
      :class="[buttonColor, { small: small }, { disable: disable }]"
      :disabled="disable"
    >
      {{ value }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    value: {
      type: String,
      default: "",
    },
    small: {
      type: Boolean,
      default: false,
    },
    buttonColor: {
      type: String,
      require: true,
    },
    customStyle: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  &.tranparent {
    background: $white;
    border: 1.5px solid $light-gray;
    color: $dark-gray;
  }
  &.green {
    background: $green;
    border: none;
    font-size: 21px;
    color: $white;
  }
  &.blue {
    background: $blue;
    border: none;
    font-size: 21px;
    color: $white;
  }
  &.small {
    height: 40px;
    width: 179px;
    font-size: 14px;
    border-radius: 3px;
  }
  &.disable {
    background: $light-gray;
    border: none;
    color: $dark-gray;
    cursor: not-allowed;
  }
}
</style>
