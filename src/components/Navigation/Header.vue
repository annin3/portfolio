<template>
  <div>
    <v-app-bar app color="rgba(255, 255, 255)" dense>
      <v-app-bar-nav-icon
        v-on:click="drawer = true"
        :class="$style.nav_icon"
      ></v-app-bar-nav-icon>
      <v-tabs :class="$style.nav_tabs" color="red">
        <v-tab v-for="(routes, index) in routes" :key="index" :to="routes.path">
          {{ routes.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn
        rounded
        text
        href="https://twitter.com/annin_rippo"
        target="_blank"
      >
        <v-icon color="#1DA1F2">mdi-twitter</v-icon>
      </v-btn>
      <v-btn rounded text href="https://github.com/annin3" target="_blank">
        <v-icon color="#24292e">mdi-github</v-icon>
      </v-btn>
      <!-- <v-switch
        v-model="ex11"
        label="English"
        color="red"
        value="red"
        hide-details
      ></v-switch> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(routes, index) in routes"
            :key="index"
            :to="routes.path"
          >
            <v-list-item-title>{{ routes.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import routes from "@/router/routes";

@Component({
  name: "Header",
})
export default class Header extends Vue {
  private drawer: boolean = false;
  private routes = routes;
}
</script>

<style lang="scss" module>
.nav_icon {
  @include display_tb_pc {
    display: none !important;
  }
}
.nav_tabs {
  display: none;

  @include display_tb_pc {
    display: block !important;
  }
}
</style>
