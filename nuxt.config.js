import colors from 'vuetify/es5/util/colors'
// const pkg = require("./package");
const express = require("express");
const axios = require("axios");

export default {
  mode: "universal",
  head: {
    titleTemplate: '%s - challenge-philips-selecionar',
    title: 'challenge-philips-selecionar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //   { src: "/__/firebase/8.6.5/firebase-app.js", },
    //   { src: "/__/firebase/init.js", }
    // ],
  },

  loading: { color: "#fa923f", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },

  css: ["~assets/styles/main.css"],

  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  axios: {
    baseURL: process.env.BASE_URL || "https://challenge-philips-selecionar-default-rtdb.firebaseio.com",
    credentials: false
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    extend(config, ctx) { }
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },

  env: {
    baseUrl: process.env.BASE_URL || "https://challenge-philips-selecionar-default-rtdb.firebaseio.com",
    fbAPIKey: "AIzaSyBxy_XJbxDihlDKHHq8wwgBkeIHRlbzvdI"
  },
  serverMiddleware: [express.json(), "~/api"],
  generate: {
    routes: function () {
      return axios
        .get("https://challenge-philips-selecionar-default-rtdb.firebaseio.com/posts.json")
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: { postData: res.data[key] }
            });
          }
          return routes;
        });
    }
  },

  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          search: 'Search',
          by: 'By',
          to: 'Para',
          name: 'Name',
          sorted: 'Sorted',
          dosage: 'Dosage',
          register: 'Register',
          medication: 'Medication',
          login: 'Login',
          logout: 'Logout',
          switch: 'Switch',
          password: 'Password',
          history: 'History',
          edit: 'Edit',
          initialStock: 'Initial Stock',
          initial: 'Initial',
          stock: 'Stock',
          updated: 'Updated',
          sales: 'Sales',
          avarage: 'Avarage',
          thumbnail: 'Thumbnail',
          measurement: 'measurement',
          trimester: 'Trimester',
          title: 'Title',
          cancel: 'Cancel',
          submit: 'Submit',
          delete: 'Delete',
        },
        pt: {
          search: 'Pesquisar',
          by: 'Por',
          to: 'Para',
          dosage: ' Dose',
          name: 'Nome',
          sorted: 'Ordenar',
          register: 'Registrar',
          medication: 'Medicamento',
          login: 'Entrar',
          logout: 'Sair',
          switch: 'Trocar',
          password: 'Senha',
          history: 'Histórico',
          edit: 'Editar',
          stock: 'Estoque',
          initialStock: 'Estoque Inicial',
          initial: 'Inicial',
          updated: 'Atualizado',
          sales: 'Vendas',
          avarage: 'Média',
          thumbnail: 'Foto de Capa',
          measurement: 'Unidade de Medida',
          trimester: 'Trimester',
          title: 'Title',
          cancel: 'Cancelar',
          submit: 'Enviar',
          delete: 'Deletar',
        }
      }
    }
  }
}
