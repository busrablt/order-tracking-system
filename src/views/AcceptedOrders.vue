<template>
  <div class="layout-center">
    <PageHeader header="Accepted" />
    <div v-for="(order, key) in acceptedList" :key="key">
      <OrderCard :order-infos="order" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
export default {
  name: "AcceptedOrders",
  components: {
    OrderCard,
    PageHeader,
  },
  computed: {
    ...mapGetters({
      acceptedList: "getAcceptedList",
    }),
  },
};
</script>
