<template>
  <v-app>
    <Header />
    <main>
      <router-view :class="$style.main" />
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Navigation/Header.vue";
export default Vue.extend({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style lang="scss" module>
.main {
  width: 90%;
  margin: 4rem auto;
  max-width: 1200px;
}
</style>
