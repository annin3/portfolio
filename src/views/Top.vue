<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/icon.svg')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <v-if>
          
        </v-if>
        <h1 class="display-2 mb-3">杏仁^3's Portfolio site</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default Vue.extend({
  name: 'Top',
});
</script>
