<template>
  <div>
    <v-dialog v-model="project" :fullscreen="goFullscreen" max-width="600px">
      <project-demo :project="project" @close="project = null" />
    </v-dialog>
    <v-dialog
      v-model="contactDialog"
      :fullscreen="goFullscreen"
      max-width="600px"
    >
      <contact-form @close="contactDialog = false" />
    </v-dialog>
    <top-header @open-contact="contactDialog = true" />
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
      contactDialog: false,
    };
  },
  computed: {
    goFullscreen() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    showProject(project) {
      this.project = project;
    },
  },
};
</script>
