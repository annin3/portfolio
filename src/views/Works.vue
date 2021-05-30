<template>
  <div :class="$style.container">
    <v-card
      v-for="(work, i) in works"
      :key="i"
      class="mx-auto"
      max-width="400"
      :class="$style.card"
    >
      <v-card-text>
        <div>{{ work.subtitle }}</div>
        <div :class="$style.nameAndLink">

          <p class="display-1 text--primary" >
            {{ work.name }}
          </p>
          <v-spacer></v-spacer>
          <v-btn rounded text v-bind:href="work.link" target="_blank">
            <v-icon color="work.iconColor">{{work.icon}}</v-icon>
          </v-btn>
        </div>
        <div class="text--primary">
          {{ work.comment }}
        </div>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import works from "@/components/Works/works";

export default Vue.extend({
  name: "Skills",
  data: () => ({
    works: works,
  }),
});
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
}
.card {
  width: 400px;
}
.nameAndLink {
  display: flex;
}
.cardSub {
  width: 100%;
  margin-right: 1rem;
}
.more {
  display: flex;
}
</style>
