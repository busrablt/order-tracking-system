<template>
  <div class="layout-center">
    <PageHeader header="Cooking" />
    <div v-if="cookingList.length">
      <div v-for="(order, key) in cookingList" :key="key">
        <OrderCard :order-infos="order" />
      </div>
    </div>
    <InfoMessage v-else message="You do not have an cooking order" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import OrderCard from "@/components/OrderCard";
import InfoMessage from "@/components/InfoMessage";
export default {
  name: "CookingOrders",
  components: {
    OrderCard,
    PageHeader,
    InfoMessage,
  },
  computed: {
    ...mapGetters({
      cookingList: "getCookingList",
    }),
  },
};
</script>
