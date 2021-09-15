<template>
  <div>
    <v-dialog
      v-model="projectDialog.show"
      :fullscreen="goFullscreen"
      max-width="800px"
      @input="controlVideo($event)"
    >
      <project-demo
        ref="demo"
        :project="projectDialog.project"
        :show="projectDialog.show"
        @close="closeProject()"
      />
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
      projectDialog: {
        show: false,
        project: null,
      },
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
      this.projectDialog.project = project;
      this.projectDialog.show = true;
    },
    closeProject() {
      this.projectDialog.show = false;
    },
    controlVideo(event) {
      if (this.$refs.demo) {
        if (event) {
          this.$refs.demo.playVideo();
        } else {
          this.$refs.demo.pauseVideo();
        }
      }
    },
  },
};
</script>
