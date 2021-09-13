<template>
  <div>
    <v-dialog v-model="project" max-width="600px">
      <project-demo :project="project" @close="project = null" />
    </v-dialog>
    <top-header />
    <project-list @show-project="showProject($event)" />
  </div>
</template>

<script>
export default {
  transition: {
    name: "shared-reverse",
    mode: "",
  },
  data() {
    return {
      project: null,
    };
  },
  methods: {
    showProject(project) {
      this.project = project;
    },
  },
};
</script>
