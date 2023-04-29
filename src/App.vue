<template>
  <div id="app" class="layout">
    <button
      :class="['hamburger-menu', isVisibleSidebar ? 'is-active' : '']"
      v-if="window.width < 1000"
      @click="openOrHideMobileMenu"
    >
      X
    </button>
    <transition name="slide-fade">
      <Sidebar v-if="isVisibleSidebar"
    /></transition>
    <router-view />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/SidebarContainer";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: { Sidebar },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  async mounted() {
    await Promise.all([this.fetchOrderList(), this.fetchOrderItems()]);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations({
      setMobileSidebarVisibility: "SET_SIDEBAR_VISIBILITY",
    }),
    ...mapActions({
      fetchOrderList: "fetchOrderList",
      fetchOrderItems: "fetchOrderItems",
    }),
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width < 1000) {
        this.setMobileSidebarVisibility(false);
      } else {
        this.setMobileSidebarVisibility(true);
      }
    },
    openOrHideMobileMenu() {
      this.setMobileSidebarVisibility(!this.isVisibleSidebar);
    },
  },
  computed: {
    ...mapGetters({
      isVisibleSidebar: "getSidebarVisibility",
    }),
  },
};
</script>
<style lang="scss">
$buttonWidth: 30px;
$buttonHeight: 26px;
$buttonColor: darken(#2b32b2, 15%);
$lineThickness: 3px;
$transitionSpeed: 0.25s;
$transitionEasing: ease-in-out;

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}

.hamburger-menu {
  position: fixed;
  z-index: 1099;
  background-color: #fff;
  border: none;
  box-shadow: none;
  right: 13px;
  top: 13px;
  width: $buttonWidth;
  height: $buttonHeight;
  border-top: $lineThickness solid;
  border-bottom: $lineThickness solid;
  color: #000;
  font-size: 0;
  transition: all $transitionSpeed $transitionEasing;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: $lineThickness;
    position: absolute;
    top: 50%;
    left: 50%;
    background: currentColor;
    transform: translate(-50%, -50%);
    transition: transform $transitionSpeed $transitionEasing;
  }
}

.hamburger-menu.is-active {
  border-color: transparent;

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>
