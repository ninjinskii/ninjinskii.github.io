<template>
  <v-btn-toggle v-model="language" class="ml-6">
    <v-btn>
      <v-img contain src="/images/fr.svg" />
    </v-btn>
    <v-btn>
      <v-img contain src="/images/gb.svg" />
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem("lang") === "fr" ? 0 : 1,
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
