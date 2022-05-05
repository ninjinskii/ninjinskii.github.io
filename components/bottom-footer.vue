<template>
  <div>
    <v-divider />
    <v-footer padless color="#121212" elevation="0">
      <v-col class="text-center text-caption text--disabled" cols="12">
        {{ new Date().getFullYear() }} — Bailly Louis
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mdiGithub, mdiFileOutline, mdiSend } from "@mdi/js";

export default {
  data() {
    return {
      mdiGithub,
      mdiFileOutline,
      mdiSend,
      lang: localStorage.getItem("lang"),
    };
  },
};
</script>
