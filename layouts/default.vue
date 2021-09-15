<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <v-snackbar v-model="snack" top :color="color">
      <span> {{ snackText }} </span>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackText: "",
      color: "success",
    };
  },
  mounted() {
    this.$nuxt.$on("form-success", () => {
      this.snackText = this.$t("form__success");
      this.color = "success";
      this.snack = true;
    });
    this.$nuxt.$on("form-error", () => {
      this.snackText = this.$t("form__error");
      this.color = "error";
      this.snack = true;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("form-success");
    this.$nuxt.$off("form-error");
  },
};
</script>
