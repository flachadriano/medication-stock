<template>
  <v-app dark>
    <v-app-bar app>
      <v-btn @click="$router.push('/medications')" depressed>
        <v-toolbar-title>Medication Stock</v-toolbar-title>
      </v-btn>
      <v-spacer> </v-spacer>
      <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
        <v-btn> Switch to English </v-btn>
      </nuxt-link>
      <nuxt-link v-if="$i18n.locale !== 'pt'" :to="switchLocalePath('pt')">
        <v-btn> Switch to Portuguese </v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>