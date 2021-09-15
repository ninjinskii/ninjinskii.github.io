<template>
  <v-container>
    <h2 class="my-8 my-md-16 d-block text-truncate">
      {{ $t("home__projects") }}
    </h2>
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12">
        <project-item
          :project="project"
          :last="index === projects.length - 1"
          @show-project="$emit('show-project', project)"
        />
        <!-- <v-divider v-if="index !== projects.length - 1" class="mt-8" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projects from "~/assets/data/projects.js";

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>
