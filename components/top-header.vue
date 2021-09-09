<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h1>Bailly Louis</h1>
        <p>Ma petite phrase</p>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="6">
            <v-btn class="d-block mx-auto" x-large icon>
              <v-icon x-large>{{ mdiGithub }}</v-icon>
            </v-btn>
            <p class="text-center text-overline">{{ $t("home__github") }}</p>
          </v-col>
          <v-col cols="6">
            <v-btn class="d-block mx-auto" x-large icon>
              <v-icon x-large>{{ mdiFileOutline }}</v-icon>
            </v-btn>
            <p class="text-center text-overline">{{ $t("home__resume") }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiGithub, mdiFileOutline } from "@mdi/js";

export default {
  data() {
    return {
      mdiGithub,
      mdiFileOutline,
    };
  },
};
</script>
