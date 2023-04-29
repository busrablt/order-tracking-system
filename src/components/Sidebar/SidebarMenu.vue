<template>
  <div class="sidebar-menu-container">
    <span class="sidebar-menu-container__title">Orders</span>
    <ul>
      <li
        v-for="(menu, key) in menuItems"
        :key="key"
        @click="setActiveMenu(menu)"
      >
        <span :class="{ active: activeMenu === menu.key }">{{
          menu.title
        }}</span>
        <small>{{ menu.value }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "SidebarMenu",
  data() {
    return {
      activeMenu: "accepted",
    };
  },
  methods: {
    ...mapMutations({
      setMobileSidebarVisibility: "SET_SIDEBAR_VISIBILITY",
    }),
    setActiveMenu(menu) {
      if (window.innerWidth < 1000) {
        this.setMobileSidebarVisibility(false);
      }
      this.activeMenu = menu.key;
      this.$router.push(menu.url);
    },
  },
  computed: {
    ...mapGetters({
      newOrderList: "getNewOrderList",
      acceptedList: "getAcceptedList",
      cookingList: "getCookingList",
    }),
    menuItems() {
      return [
        {
          title: "New Order",
          value: this.newOrderList.length,
          key: "newOrder",
          url: "/new-orders",
        },
        {
          title: "Accepted",
          value: this.acceptedList.length,
          key: "accepted",
          url: "/",
        },
        {
          title: "Cooking",
          value: this.cookingList.length,
          url: "/cooking-orders",
          key: "cooking",
        },
        { title: "Parcel Ready", value: 3, key: "parcelReady" },
        { title: "Delivered", value: 2, key: "delivered" },
        { title: "Completed", value: 1, key: "completed" },
      ];
    },
  },
  watch: {
    "$route.path": {
      handler(value) {
        const selectedMenu = this.menuItems.find((menu) => menu.url === value);
        this.activeMenu = selectedMenu.key;
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-menu-container {
  width: 100%;
  background: #f6f6f6;
  border: 1px solid $light-gray;
  padding: 0 28px;

  &__title {
    font-size: 28px;
    margin: 20px 0 26px;
    display: block;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 27px;
      cursor: pointer;

      span {
        font-weight: 400;
        font-size: 18px;

        &.active {
          color: $blue;
        }
      }

      small {
        font-size: 18px;
        color: $gray;
      }
    }
  }
}
</style>
