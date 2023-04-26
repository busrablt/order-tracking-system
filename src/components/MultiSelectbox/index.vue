<template>
  <div id="multi-select">
    <div class="multi-select" @click="isOpen = !isOpen">
      <span v-if="selectedItems.length">{{ selectedText }}</span>
      <span v-else class="multi-select__placeholder">
        {{ placeholder }}
      </span>
      <div class="multiselect___icon" />
      <img alt="printer" src="@/assets/icons/icon-chevron.svg" />
    </div>
    <div class="list" v-show="isOpen">
      <div class="list__item" v-for="(option, index) in options" :key="index">
        <input
          type="checkbox"
          :id="index"
          :value="option"
          v-model="selectedItems"
          @change="toggle(option)"
        />
        <label class="list__item__label" :for="index">
          {{ option.value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelectbox",
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selectedItems: [],
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.$emit("update", this.selectedItems);
    },
  },
  computed: {
    selectedText() {
      const array = [];
      this.selectedItems.forEach((item) => {
        array.push(item.value);
      });
      return array.join();
    },
  },
};
</script>
<style lang="scss" scoped>
.multi-select {
  display: flex;
  align-items: center;
  height: 40px;
  border: 1.5px solid $light-gray;
  border-radius: 5px;
  padding: 0 12px;
  cursor: pointer;
  &__placeholder {
    color: $gray;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 680px;
  }
}
.list {
  border: 1.5px solid $light-gray;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  padding: 20px;
  &__item {
    padding-bottom: 12px;
    &__label {
      margin-left: 16px;
    }
  }
}
</style>
