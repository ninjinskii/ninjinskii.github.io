<template>
  <v-container>
    <h2 class="my-16 d-block text-truncate">{{ $t("home__projects") }}</h2>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="5"
        :offset-md="index % 2 === 0 ? '0' : '2'"
      >
        <project-item :project="project" />
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
