<template>
  <div id="form-input">
    <div class="label">{{ label }}</div>
    <textarea
      v-if="multiColumn"
      :value="value"
      @input="setInput"
      :class="{ large: large }"
    />
    <input
      v-else
      :value="value"
      @input="setInput"
      :class="{ large: large }"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    value: String,
    label: String,
    type: {
      type: String,
      default: "text",
    },
    multiColumn: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "setInput",
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    setInput(e) {
      this.$emit("setInput", e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.label {
  margin-bottom: 13px;
}
input,
textarea {
  background: #ffffff;
  border: 1.5px solid $light-gray;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  font-size: 18px;
  text-indent: 18px;

  &.large {
    height: 110px;
    padding-top: 20px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
