// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  alias:{
    image: '/<rootDir>/public/image'
  },
  image: ['~/public/image/logo.jpg']
})