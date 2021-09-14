<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <h1>Bailly Louis</h1>
        <p>{{ $t("home__intro") }}</p>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="6">
            <a
              class="text--primary"
              href="https://github.com/ninjinskii"
              target="blank"
            >
              <v-btn class="d-block mx-auto" x-large icon>
                <v-icon x-large>{{ mdiGithub }}</v-icon>
              </v-btn>
              <p class="text-center text-overline">{{ $t("home__github") }}</p>
            </a>
          </v-col>
          <v-col cols="6">
            <a
              class="text--primary"
              href="https://github.com/ninjinskii"
              target="blank"
            >
              <v-btn class="d-block mx-auto" x-large icon>
                <v-icon x-large>{{ mdiFileOutline }}</v-icon>
              </v-btn>
              <p class="text-center text-overline">{{ $t("home__resume") }}</p>
            </a>
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
