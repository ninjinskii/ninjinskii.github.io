<template>
  <v-container fluid px-0>
    <v-row>
      <v-col cols="2">
        <v-img
          src="/images/aviatorjk_bark.jpg"
          class="rounded-circle"
          height="196px"
          width="196px"
        />
      </v-col>
      <v-col>
        <h2 class="mb-n3 text-center text-md-left" style="width: 100%">
          {{ project.name }}
        </h2>
        <div class="text-overline text--disabled text-center text-md-left">
          {{ project.subtitle }}
        </div>
        <v-chip-group column>
          <v-chip
            v-for="(techno, index) in project.technos"
            :key="index"
            :ripple="false"
          >
            {{ techno }}
          </v-chip>
        </v-chip-group>
        <p class="text--medium text-justify text-sm-left">
          {{ project.story }}
        </p>
        <v-btn class="mt-4" outlined :href="project.code" target="blank">
          {{ $t("show__code") }}
          <v-icon right>
            {{ mdiOpenInNew }}
          </v-icon>
        </v-btn>
        <v-btn class="mt-4 ml-4" outlined>
          {{ $t("show__demo") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiOpenInNew } from "@mdi/js";

export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      mdiOpenInNew,
    };
  },
};
</script>
