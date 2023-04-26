<template>
  <div class="layout-center">
    <PageHeader header="New Order" />
    <div v-for="(order, key) in newOrderList" :key="key">
      <OrderCard :order-infos="order" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
export default {
  name: "NewOrders",
  components: {
    OrderCard,
    PageHeader,
  },
  computed: {
    ...mapGetters({
      newOrderList: "getNewOrderList",
    }),
  },
};
</script>
