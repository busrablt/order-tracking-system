<template>
  <div class="button-container">
    <input
      type="radio"
      :id="buttonId"
      :checked="checked"
      :value="value"
      @change="$emit('change', $event.target.value)"
      :disabled="disabled"
    />
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "radio-button",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    label: String,
    disabled: Boolean,
    buttonId: String,
    modelValue: String,
    value: String,
  },
  computed: {
    checked() {
      return this.modelValue === this.value;
    },
  },
};
</script>
<style lang="scss">
.button-container {
  span {
    margin-left: 12px;
  }
}
</style>
