<template>
  <v-card v-if="project">
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <video
            ref="video"
            :src="project.demo.video"
            type="video/mp4"
            controls
            width="260"
            height="540"
            class="mx-auto ml-md-auto mr-md-0"
          />
        </v-col>
        <v-col cols="12" md="6">
          <ul>
            <li
              v-for="timestamp in project.demo.timestamps"
              :key="timestamp.when"
            >
              {{ formatSeconds(timestamp.when) }} - {{ timestamp.desc }}
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-btn @click="closeSelf()">{{ $t("close") }}</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.playVideo();
  },
  beforeDestroy() {
    this.pauseVideo();
  },
  methods: {
    closeSelf() {
      this.$emit("close");
    },
    playVideo() {
      if (this.$refs.video) {
        this.$refs.video.play();
      }
    },
    pauseVideo() {
      if (this.$refs.video) {
        this.$refs.video.pause();
      }
    },
    formatSeconds(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    },
  },
};
</script>
