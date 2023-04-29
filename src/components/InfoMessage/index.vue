<template>
  <div class="info-message-container">
    <span class="info-message-container__icon">!</span>
    <span class="info-message-container__message">{{ message }}...</span>
  </div>
</template>

<script>
export default {
  name: "InfoMessage",
  props: {
    message: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-message-container {
  display: flex;
  align-items: center;
  background-color: #f3f3f5;
  color: #909399;
  padding: 10px 20px;
  border-radius: 5px;
  &__icon {
    font-size: 21px;
    padding-right: 6px;
  }
  &__message {
    font-size: 14px;
  }
}
</style>
