<template>
  <v-app>
    <Header />
    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Navigation/Header.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Header,
  },
});
</script>

<style lang="scss" module>
</style>