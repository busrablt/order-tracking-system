<template>
  <div class="sidebar-icon-container">
    <div class="sidebar-icon-container__logo" />
    <div v-for="(icon, key) in icons" :key="key">
      <img
        class="sidebar-icon-container__icon"
        :alt="icon.key"
        :src="getIconUrl(icon.url)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarIcons",
  data() {
    return {
      icons: [
        { url: "icon-box.svg", key: "box" },
        { url: "icon-screen.svg", key: "screen" },
        { url: "icon-settings.svg", key: "settings" },
      ],
    };
  },
  methods: {
    getIconUrl(pet) {
      const images = require.context("@/assets/icons/", false, /\.svg$/);
      return images("./" + pet);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  &__logo {
    height: 60px;
    width: 60px;
    background-repeat: no-repeat;
    background-image: url("@/assets/icons/icon-logo.svg");
  }
  &__icon {
    padding: 15px 0;
    height: 30px;
    width: 30px;
  }
  @media screen and (max-width: map-get($breakpoints, "md")) {
    flex-direction: row;
    justify-content: space-between;
    &__logo {
      height: 40px;
      width: 40px;
      background-size: contain;
    }
  }
}
</style>
