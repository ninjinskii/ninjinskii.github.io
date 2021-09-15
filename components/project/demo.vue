<template>
  <v-card v-if="project">
    <v-card-title>
      <h2 class="mb-n3 text-center text-md-left" style="width: 100%">
        {{ project.name }}
      </h2>
      <div class="text-overline text--disabled text-center text-md-left">
        {{ project.subtitle }}
      </div>
    </v-card-title>
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <video
            ref="video"
            :src="project.demo.video"
            type="video/mp4"
            height="540"
            width="260"
            autoplay
            muted
            controls
            class="mx-auto ml-md-auto mr-md-0"
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @timeupdate="updateTime()"
          />
          <v-slider
            :value="timebar"
            style="width: 260px"
            color="primary"
            min="0"
            max="100"
            :prepend-icon="isPlaying ? mdiPause : mdiPlay"
            :hint="currentPlayerTime"
            persistent-hint
            @click:prepend="toggleVideo()"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-list rounded dense>
            <v-list-item-group :value="currentTimestamp" mandatory>
              <v-list-item
                v-for="timestamp in project.demo.timestamps"
                :key="timestamp.when"
                color="primary"
                @click="goTo(timestamp.when)"
              >
                <v-list-item-action>
                  <span>
                    {{ formatSeconds(timestamp.when) }}
                  </span>
                </v-list-item-action>
                <v-list-item-content>
                  {{ timestamp.desc }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <v-btn @click="closeSelf()">{{ $t("close") }}</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlay, mdiPause } from "@mdi/js";

export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mdiPlay,
      mdiPause,
      isPlaying: false,
      currentTime: 0,
      timebar: 0,
      muted: true,
    };
  },
  computed: {
    currentTimestamp() {
      if (this.project) {
        const a = this.project.demo.timestamps
          .filter((t) => this.currentTime >= t.when)
          .pop();

        return this.project.demo.timestamps.indexOf(a);
      } else {
        return 0;
      }
    },
    currentPlayerTime() {
      return this.formatSeconds(~~this.currentTime);
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    },
    timebar(val) {
      const duration = ~~this.$refs.video.duration;
      const time = duration * (val / 100);
      this.goTo(time);
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
    toggleVideo() {
      this.isPlaying ? this.pauseVideo() : this.playVideo();
    },
    updateTime() {
      if (this.$refs.video) {
        const duration = ~~this.$refs.video.duration;
        this.timebar = ~~((100 / duration) * this.currentTime);
        this.currentTime = this.$refs.video.currentTime;
      }
    },
    goTo(time) {
      if (this.$refs.video) {
        this.$refs.video.currentTime = time;
      }

      this.playVideo();
    },
    formatSeconds(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    },
  },
};
</script>
