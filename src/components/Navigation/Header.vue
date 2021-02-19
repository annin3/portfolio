<template>
  <div :class="$style.header">
    <v-app-bar app color="rgba(255, 255, 255, 0)" dense flat>
      <v-app-bar-nav-icon
        v-on:click="drawer = true"
        :class="$style.nav_icon"
      ></v-app-bar-nav-icon>
      <v-tabs :class="$style.nav_tabs">
        <v-tab v-for="(routes, index) in routes" :key="index" :to="routes.path" >
          {{ routes.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
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
import { Vue, Component, Emit } from 'vue-property-decorator';
import routes from '@/router/routes.ts';

@Component({
  name: 'Header',
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
.header {
  padding-bottom: 8rem;
}
</style>
