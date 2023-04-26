<template>
  <div class="sidebar-container">
    <SidebarIcons />
    <SidebarMenu />
  </div>
</template>

<script>
import SidebarMenu from "@/components/Sidebar/SidebarMenu";
import SidebarIcons from "@/components/Sidebar/SidebarIcons";
export default {
  name: "SidebarContainer",
  components: {
    SidebarMenu,
    SidebarIcons,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
}
</style>
