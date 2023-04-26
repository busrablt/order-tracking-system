<template>
  <div id="app" class="layout">
    <Sidebar />
    <router-view />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/SidebarContainer";
export default {
  components: { Sidebar },
};
</script>
