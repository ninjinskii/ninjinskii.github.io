<template>
  <v-container fluid px-0>
    <v-row>
      <v-col cols="12" md="3" lg="2">
        <v-img
          :src="project.thumbnail"
          class="rounded-circle mx-auto mx-md-0"
          aspect-ratio="1"
          max-width="196px"
          width="100%"
        />
      </v-col>
      <v-col>
        <h2 class="mb-n3 text-center text-md-left" style="width: 100%">
          {{ project.name }}
        </h2>
        <div class="text-overline text--disabled text-center text-md-left">
          {{ $t(project.subtitle) }}
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
          {{ $t(project.story) }}
        </p>
        <v-btn class="mt-4" outlined :href="project.code" target="blank">
          {{ $t("show__code") }}
          <v-icon right>
            {{ mdiOpenInNew }}
          </v-icon>
        </v-btn>
        <v-btn class="mt-4 ml-sm-4" outlined @click="$emit('show-project')">
          {{ $t("show__demo") }}
        </v-btn>
        <v-divider v-if="!last" class="mt-16" />
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
    last: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mdiOpenInNew,
    };
  },
};
</script>
