<template>
  <v-card v-if="project">
    <v-card-title>
      <div style="max-width: 90%">
        <h2 v-if="!$vuetify.breakpoint.mobile" class="mb-n1">
          {{ project.name }}
        </h2>
        <div v-else>
          {{ project.name }}
        </div>
        <div
          v-if="!$vuetify.breakpoint.mobile"
          class="text-overline text--disabled"
        >
          {{ project.subtitle }}
        </div>
      </div>
      <v-spacer />
      <v-btn v-if="$vuetify.breakpoint.mobile" icon large @click="closeSelf()">
        <v-icon large>{{ mdiClose }} </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-row justify="center" class="mt-1 mt-sm-4">
        <v-col cols="12" md="6">
          <div
            v-ripple="{ class: 'primary--text' }"
            class="mx-auto"
            style="width: 260px"
          >
            <video
              ref="video"
              :src="project.demo.video"
              type="video/mp4"
              height="540"
              width="260"
              autoplay
              muted
              class="mx-auto ml-md-auto mr-md-0"
              @play="isPlaying = true"
              @pause="isPlaying = false"
              @timeupdate="updateTime()"
              @click="toggleVideo()"
            />
            <v-slider
              color="primary"
              min="0"
              max="100"
              :value="timebar"
              :prepend-icon="isPlaying ? mdiPause : mdiPlay"
              :hint="currentPlayerTime"
              persistent-hint
              @start="isDragging = true"
              @end="isDragging = false"
              @input="drag = $event"
              @change="goTo($refs.video.duration * ($event / 100))"
              @click:prepend="toggleVideo()"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-list rounded dense outlined>
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
                  {{ $t(timestamp.desc) }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlay, mdiPause, mdiClose } from "@mdi/js";

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
      mdiClose,
      isPlaying: false,
      isDragging: false,
      drag: 0,
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
      const timeToUse = this.isDragging
        ? this.computeRatio(this.drag)
        : this.currentTime;

      const current = this.formatSeconds(~~timeToUse);
      const total = this.formatSeconds(
        this.$refs.video ? ~~this.$refs.video.duration : 0
      );
      return `${current} / ${total}`;
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
      if (this.$refs.video && !this.isDragging) {
        const duration = ~~this.$refs.video.duration;
        this.timebar = ~~((100 / duration) * this.currentTime);
        this.currentTime = this.$refs.video.currentTime;
      }
    },
    goTo(time) {
      if (this.$refs.video) {
        this.$refs.video.currentTime = time;
        this.updateTime();
      }

      this.playVideo();
    },
    computeRatio(sliderValue) {
      if (this.$refs.video) {
        const duration = ~~this.$refs.video.duration;
        return ~~(duration * (sliderValue / 100));
      } else {
        return 0;
      }
    },
    formatSeconds(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    },
  },
};
</script>

<style scoped>
.v-input {
  margin-top: -8px;
  padding: 4px 4px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
