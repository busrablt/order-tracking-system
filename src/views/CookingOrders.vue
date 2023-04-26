<template>
  <div class="layout-center">
    <PageHeader header="Cooking" />
    <div v-for="(order, key) in cookingList" :key="key">
      <OrderCard :order-infos="order" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
export default {
  name: "CookingOrders",
  components: {
    OrderCard,
    PageHeader,
  },
  computed: {
    ...mapGetters({
      cookingList: "getCookingList",
    }),
  },
};
</script>
