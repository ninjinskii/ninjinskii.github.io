<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-snackbar v-model="snack" top color="white">
      <span style="color: rgba(0, 0, 0, 0.86)"> {{ snackText }} </span>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackText: "",
    };
  },
  mounted() {
    this.$nuxt.$on("form-success", () => {
      this.snackText = this.$t("form__success");
      this.snack = true;
    });
    this.$nuxt.$on("form-error", () => {
      this.snackText = this.$t("form__error");
      this.snack = true;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("form-success");
    this.$nuxt.$off("form-error");
  },
};
</script>
