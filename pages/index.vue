<template>
  <div>
    <v-dialog
      v-model="projectDialog.show"
      :fullscreen="goFullscreen"
      max-width="850px"
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
    <lang-select />
    <project-list @show-project="showProject($event)" />
    <bottom-footer class="mt-14" />
  </div>
</template>

<script>
import projects from "~/data/projects.js";

export default {
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
  created() {
    this.setDefaultLanguage();

    const query = this.$route.query.project;
    if (query) {
      const project = projects.find(
        (project) => project.shortname.toLowerCase() === query
      );

      if (project) {
        this.showProject(project);
      }
    }
  },
  methods: {
    setDefaultLanguage() {
      const lang = localStorage.getItem("lang");

      // User visits the page for the first time
      if (lang === null) {
        localStorage.setItem("lang", "fr");
      }
    },
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
