<template>
  <div class="layout-center">
    <PageHeader header="New Order" />
    <div v-if="newOrderList.length">
      <div v-for="(order, key) in newOrderList" :key="key">
        <OrderCard :order-infos="order" />
      </div>
    </div>
    <InfoMessage v-else message="You do not have a new order" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
import InfoMessage from "@/components/InfoMessage";
export default {
  name: "NewOrders",
  components: {
    OrderCard,
    PageHeader,
    InfoMessage,
  },
  computed: {
    ...mapGetters({
      newOrderList: "getNewOrderList",
    }),
  },
};
</script>
