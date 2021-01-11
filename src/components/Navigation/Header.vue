<template>
  <v-app-bar
    app
    color="rgba(255, 255, 255, 0)"
    dense="boolean"
    flat="boolean"
  >
    <v-app-bar-nav-icon v-on:click="drawer = true"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div>English</div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component({
  name: 'AppBar'
})

export default class AppBar extends Vue {
}
</script>

<style lang="sass" scoped>
</style>