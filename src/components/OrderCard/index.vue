<template>
  <div class="order-container">
    <div class="order-container__infos">
      <div
        class="order-container__infos__item"
        v-for="(info, key) in orderInfos.recordInfo"
        :key="key"
      >
        <span class="light-text">{{ info.value }}</span>

        <OrderTag
          v-if="info.value === 'Trans Type'"
          :value="info.key"
          :type="findType(info.key)"
        />
        <div
          v-else-if="info.value === 'Amount'"
          class="order-container__infos__item__amount"
        >
          <span class="dark-text">
            {{ info.key }}
          </span>
          <OrderTag value="COD" type="yellow" />
        </div>

        <span v-else class="dark-text">{{ info.key }}</span>
      </div>
    </div>
    <div class="order-container__ordered-items">
      <span class="ordered-item-title">Ordered Items</span>
      <ul>
        <li v-for="(order, index) in orderInfos.orderedItems" :key="index">
          <span>{{ order.value }} X {{ order.amount }}</span>
        </li>
      </ul>
    </div>

    <div class="light-text" v-if="orderInfos.message">
      Additional information from customer
    </div>
    <div class="last-field">
      <div class="dark-text">
        <span v-if="orderInfos.message">
          {{ orderInfos.message }}
        </span>
      </div>
      <div class="last-field__button">
        <img alt="printer" src="@/assets/icons/icon-printer.svg" />
        <BaseButton
          v-if="buttonText"
          :value="`Move to ${buttonText}`"
          button-color="blue"
          small
          @click.native="moveToOrder()"
          custom-style="width: 169px;border: 1px solid #2159c8;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { OrderType } from "@/utils/constants";
import OrderTag from "@/components/OrderTag";
import BaseButton from "@/components/BaseButton";
export default {
  name: "OrderCard",
  components: {
    OrderTag,
    BaseButton,
  },
  props: {
    orderInfos: Object,
  },
  methods: {
    ...mapActions({
      updateOrderType: "updateOrderType",
    }),
    findType(key) {
      return key === "Delivery" ? "blue" : "orange";
    },
    moveToOrder() {
      this.updateOrderType({
        orderId: this.orderInfos.id,
        newType: this.buttonText.toLowerCase(),
      });
    },
  },
  computed: {
    buttonText() {
      if (this.orderInfos.type === OrderType.accepted) {
        return "Cooking";
      } else if (this.orderInfos.type === OrderType.newOrder) {
        return "Accepted";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  background: #ffffff;
  border: 1.5px solid $light-gray;
  border-radius: 10px;
  padding: 24px 35px;
  margin-bottom: 20px;
  &__infos {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 15px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      &__amount {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1000px) {
          justify-content: flex-start;
        }
      }
    }
  }
  &__ordered-items {
    display: flex;
    margin: 40px 0;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    ul {
      display: block;
      padding: 0 15px;
      @media screen and (max-width: 1000px) {
        padding: 15px 0;
      }

      li {
        display: inline-block;
        width: fit-content;
        margin-right: 12px;

        span {
          font-size: 14px;
          background: #ebebeb;
          border-radius: 4px;
          padding: 5px 10px;
          border: none;
        }
      }
    }
  }
  .moveToCooking {
    color: #ffffff;
    background: $blue;
    border-radius: 3px;
    border: 1px solid #2159c8;
    padding: 10px 20px;
  }
  .last-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 15px;
      margin-top: 10px;
      align-items: flex-start;
    }
    &__button {
      display: flex;
      align-items: center;
      img {
        margin-right: 35px;
      }
    }
  }
}
</style>
