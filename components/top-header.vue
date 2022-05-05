<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <h1>Bailly Louis</h1>
        <h3 class="text--disabled">{{ $t("home__title") }}</h3>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col v-ripple cols="4">
            <a
              class="text--primary"
              href="https://github.com/ninjinskii"
              target="blank"
            >
              <v-icon class="d-block mx-auto" x-large>{{ mdiGithub }}</v-icon>
              <p class="text-center text-overline">{{ $t("home__github") }}</p>
            </a>
          </v-col>
          <v-col v-ripple cols="4">
            <a class="text--primary" @click="openResume()">
              <v-icon class="d-block mx-auto" x-large>{{
                mdiFileOutline
              }}</v-icon>
              <p class="text-center text-overline">{{ $t("home__resume") }}</p>
            </a>
          </v-col>
          <v-col
            v-ripple
            class="text--primary"
            style="cursor: pointer"
            cols="4"
            @click="$emit('open-contact')"
          >
            <v-icon class="d-block mx-auto" x-large>{{ mdiSend }}</v-icon>
            <p class="text-center text-overline">{{ $t("home__contact") }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiGithub, mdiFileOutline, mdiSend } from "@mdi/js";

export default {
  data() {
    return {
      mdiGithub,
      mdiFileOutline,
      mdiSend,
    };
  },
  methods: {
    openResume() {
      const lang = localStorage.getItem("lang");
      const url =
        lang === "fr" ? "/resume/resume.html" : "/resume/resume-en.html";

      window.location = url;
    },
  },
};
</script>
