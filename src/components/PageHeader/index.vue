<template>
  <div>
    <div class="page-header">
      <div class="page-header__icon"></div>
      <span>{{ header }}</span>
    </div>
    <div class="orders-container">
      <span class="orders-container__count">
        <small class="orders-container__count__icon" /> Showing 10 Orders
      </span>
      <BaseButton
        value="Add New Order"
        button-color="blue"
        small
        @click.native="addNewOrder()"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "PageHeader",
  components: {
    BaseButton,
  },
  props: {
    header: {
      type: String,
      default: "",
    },
  },
  methods: {
    addNewOrder() {
      this.$router.push("/create-order");
    },
  },
};
</script>
<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  &__icon {
    height: 20px;
    width: 22px;
    background-repeat: no-repeat;
    background-image: url("@/assets/icons/icon-hamburger.svg");
    background-size: contain;
  }
  span {
    font-size: 30px;
    margin-left: 25px;
  }
}
.orders-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0 25px 0;
  border-bottom: 1.5px solid #e5e5e5;
  margin-bottom: 25px;
  &__count {
    background: #ebebeb;
    border: 1px solid #ebebeb;
    border-radius: 5px 0px 0px 5px;
    padding: 14px 20px;
    &__icon {
      height: 18px;
      width: 20px;
      background-repeat: no-repeat;
      background-image: url("@/assets/icons/icon-hamburger.svg");
      padding-left: 30px;
      background-size: contain;
    }
  }
}
</style>
