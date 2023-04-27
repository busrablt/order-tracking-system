<template>
  <div id="app" class="layout">
    <Sidebar />
    <router-view />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/SidebarContainer";
import { mapActions } from "vuex";
export default {
  components: { Sidebar },
  async mounted() {
    await Promise.all([this.fetchOrderList(), this.fetchOrderItems()]);
  },
  methods: {
    ...mapActions({
      fetchOrderList: "fetchOrderList",
      fetchOrderItems: "fetchOrderItems",
    }),
  },
};
</script>
