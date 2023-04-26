<template>
  <div class="counter">
    <span @click="decrement" class="counter__sign">-</span>
    <span class="counter__count">{{ value }}</span>
    <span @click="increment" class="counter__sign">+</span>
  </div>
</template>

<script>
export default {
  name: "OrderCounter",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    increment() {
      this.$emit("input", this.value + 1);
    },
    decrement() {
      if (this.value > 0) {
        this.$emit("input", this.value - 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 67px;
  height: 22px;
  border: 2px solid #0b69ff;
  border-radius: 16px;
  margin: 0 30px;
  user-select: none;
  &__sign {
    font-weight: 400;
    font-size: 16px;
    color: #aaaaaa;
    cursor: pointer;
  }
  &__count {
    font-size: 14px;
  }
}
</style>
