<template>
  <v-btn-toggle v-model="language" class="ml-6">
    <v-btn>
      <v-img contain height="18" width="24" src="/images/fr.svg" />
    </v-btn>
    <v-btn>
      <v-img contain height="18" width="24" src="/images/gb.svg" />
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data() {
    const lang = localStorage.getItem("lang") || "fr";

    return {
      language: lang === "fr" ? 0 : 1,
    };
  },
  watch: {
    language(val) {
      const locale = val === 0 ? "fr" : "en";

      localStorage.setItem("lang", locale);
      this.$i18n.setLocale(locale);
      // this.$cookies.set("lang", locale, { path: "/" });
    },
  },
};
</script>
