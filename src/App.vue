<template>
  <v-app id="app">
  <v-toolbar light flat app>
    <v-toolbar-title>roadbook.vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Accueil</v-btn>
      <v-btn flat to="/about">A propos</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
        <router-view/>
    </v-container>
  </v-content>
  <v-footer app light>
    <span class="white--text">Websylvain &copy; 2017</span>
  </v-footer>
</v-app>
</template>

<style>

</style>
