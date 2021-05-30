<template>
  <div :class="$style.container">
    <v-card
      v-for="(skill, i) in skills"
      :key="i"
      class="mx-auto"
      max-width="300"
      :class="$style.card"
    >
      <div :class="$style.cardAbout">
        <!-- <v-avatar class="ma-3" size="80" tile>
          <v-img :src=></v-img>
        </v-avatar> -->
        <div :class="$style.cardSub">
          <v-card-title>
            {{ skill.name }}
          </v-card-title>

          <v-card-actions >
            <div>
              {{skill.time}}
            </div>
            <v-spacer></v-spacer>
            <div :class="$style.level">
              {{skill.level}}
            </div>

            <!-- <v-btn icon @click="skill.open = !skill.open">
              <v-icon>{{ skill.open ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
            </v-btn> -->
          </v-card-actions>
        </div>
      </div>
      <!-- <v-expand-transition> -->
        <!-- <div v-show="skill.open" :class="$style.more"> -->
          <!-- <v-divider></v-divider> -->
          <v-card-text>
            {{ skill.comment }}
          </v-card-text>
        <!-- </div> -->
      <!-- </v-expand-transition> -->
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import skills from "@/components/Skills/skills";

export default Vue.extend({
  name: "Skills",
  data: () => ({
    skills: skills,
    show: false,
  }),
});
</script>

<style lang="scss" module>
.container {
	display: flex;
  flex-wrap: wrap;
  gap:2rem;
  max-width: 1000px;
}
.card {
  width: 300px;
}
.level {
  color: #f8a915;
}
.cardAbout {
  display: flex;
}
.cardSub {
  width: 100%;
  margin-right: 1rem;
}
.cardImg {
}
.more {
  display: flex;
}
</style>
