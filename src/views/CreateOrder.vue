<template>
  <div class="main-container">
    <PageHeader header="Create Order" :is-visible-add-order="false" />
    <div class="container">
      <div class="container__right">
        <div class="container__right__info">
          <ul>
            <li>
              <span>Order Number:</span>
              <small>{{ orderNumber }}</small>
            </li>
            <li>
              <span>Date & Time:</span>
              <small>{{ dateFormat(date) }}</small>
            </li>
          </ul>
        </div>

        <FormInput v-model="name" label="Name" />
        <FormInput v-model="contract" label="Contract" type="number" />
        <span>Trans Type</span>
        <div class="container__right__radio-buttons">
          <RadioButton
            label="Delivery"
            button-id="delivery"
            v-model="checkValue"
            value="Delivery"
          />
          <RadioButton
            label="Takeaway"
            button-id="takeaway"
            v-model="checkValue"
            value="Takeaway"
          />
        </div>
        <FormInput
          v-model="clientMessage"
          label="Message to client"
          large
          multi-column
        />
        <MultiSelectbox
          :options="orderItems"
          placeholder="Pending"
          @update="(list) => (deliveryDetails = list)"
          @isOpenMultiselect="(value) => (isOpenMultiselect = value)"
        />

        <div v-if="deliveryDetails.length && !isOpenMultiselect">
          <div
            v-for="(item, key) in deliveryDetails"
            :key="key"
            class="delivery-items"
          >
            <span>{{ item.value }}</span>
            <div class="delivery-items__calculater">
              <span>{{ calculateCost(item) }}$</span>
              <OrderCounter v-model="item.amount" />
              <img
                alt="remove"
                src="@/assets/icons/icon-remove.svg"
                @click="removeItem(item)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container__left">
        <DeliveryDetails
          :details="deliveryDetails"
          @totalAmount="(value) => (totalAmount = value)"
        />
        <div class="container__left__buttons">
          <div>
            <BaseButton
              v-if="isAddOrderActive"
              value="Cancel"
              @click.native="cancel()"
              button-color="tranparent"
            />
          </div>

          <div>
            <BaseButton
              value="Add Order"
              @click.native="addOrder()"
              :button-color="addOrderStyle"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { OrderType } from "@/utils/Constants";
import helpers from "@/utils/helpers";
import PageHeader from "@/components/PageHeader";
import FormInput from "@/components/FormInput";
import RadioButton from "@/components/RadioButton";
import MultiSelectbox from "@/components/MultiSelectbox";
import OrderCounter from "@/components/OrderCounter";
import DeliveryDetails from "@/components/DeliveryDetails";
import BaseButton from "@/components/BaseButton";
export default {
  name: "CreateOrder",
  components: {
    PageHeader,
    FormInput,
    RadioButton,
    MultiSelectbox,
    OrderCounter,
    DeliveryDetails,
    BaseButton,
  },
  data() {
    return {
      date: Date.now(),
      orderNumber: helpers.orderNumber(),
      name: "",
      contract: "",
      checkValue: "Delivery",
      clientMessage: "",
      totalAmount: "",
      calculateCost: helpers.calculateCost,
      isOpenMultiselect: false,
      orderItems: [
        {
          value: "Beef Stroganoff",
          amount: 1,
          price: "20",
        },
        {
          value: "Reuben",
          amount: 1,
          price: "34",
        },
        {
          value: "Sandwich",
          amount: 1,
          price: "28",
        },
        {
          value: "Waldorf Salad",
          amount: 1,
          price: "45",
        },
        {
          value: "French Fries",
          amount: 1,
          price: "20",
        },
        {
          value: "Caesar Salad",
          amount: 1,
          price: "20",
        },
        {
          value: "Chicken à la King",
          amount: 1,
          price: "29",
        },
        {
          value: "Lobster Newburg",
          amount: 1,
          price: "22",
        },
        {
          value: "Salisbury Steak",
          amount: 1,
          price: "55",
        },
      ],
      deliveryDetails: [],
    };
  },
  methods: {
    ...mapActions({
      setOrderList: "setOrderList",
    }),
    dateFormat(date) {
      return helpers.dateFormat(date);
    },
    removeItem(item) {
      this.deliveryDetails.forEach((delivery, index) => {
        if (delivery.value === item.value) {
          this.deliveryDetails.splice(index, 1);
        }
      });
    },
    cancel() {
      this.deliveryDetails = [];
    },
    addOrder() {
      if (this.isAddOrderActive) {
        const payload = {
          id: this.orderNumber,
          type: OrderType.newOrder,
          recordInfo: [
            { value: "Order number", key: this.orderNumber },
            { value: "Date & Time", key: this.dateFormat(this.date) },
            { value: "Name", key: this.name },
            { value: "Contact", key: this.contract },
            { value: "Trans Type", key: this.checkValue },
            { value: "Amount", key: this.totalAmount },
          ],
          orderedItems: this.deliveryDetails,
        };
        this.setOrderList(payload);
        this.$toast.success("New order added!");
        this.$router.push("/new-orders");
      }
    },
  },
  computed: {
    isAddOrderActive() {
      return this.deliveryDetails.length && this.name && this.contract;
    },
    addOrderStyle() {
      return this.isAddOrderActive ? "green" : "blue";
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 20px;
}
.container {
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  margin-top: 32px;
  &__right {
    display: flex;
    flex-direction: column;
    gap: 28px;
    border-right: 1px solid #ebebeb;
    &__info {
      ul {
        li {
          margin-bottom: 19px;
          display: block;

          span {
            font-size: 17px;
            width: 100%;
            max-width: 200px;
            display: inline-flex;
          }

          small {
            font-weight: 400;
            font-size: 17px;
            color: $dark-gray;
          }
        }
      }
    }
    &__radio-buttons {
      display: flex;
      gap: 70px;
    }
    .delivery-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      &__calculater {
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
        }
      }
    }
  }

  &__left {
    &__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 32px;
    }
  }
}
</style>
