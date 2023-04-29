<template>
  <div class="layout-center">
    <PageHeader header="Accepted" />
    <div v-if="acceptedList.length">
      <div v-for="(order, key) in acceptedList" :key="key">
        <OrderCard :order-infos="order" />
      </div>
    </div>
    <InfoMessage v-else message="You do not have an accepted order" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
import InfoMessage from "@/components/InfoMessage";
export default {
  name: "AcceptedOrders",
  components: {
    OrderCard,
    PageHeader,
    InfoMessage,
  },
  computed: {
    ...mapGetters({
      acceptedList: "getAcceptedList",
    }),
  },
};
</script>
