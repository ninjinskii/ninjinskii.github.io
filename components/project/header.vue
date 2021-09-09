<template>
  <div>
    <v-btn class="ma-8" icon x-large @click="$router.go(-1)">X</v-btn>
    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <h2 style="width: 100%">{{ project.name }}</h2>
          <v-chip-group column>
            <v-chip v-for="(techno, index) in project.technos" :key="index">
              {{ techno }}
            </v-chip>
          </v-chip-group>
          <p>
            Mon texte sur l'application Ginko Real Time Widget. Il ne doit pas
            forcément être très long
          </p>
        </v-col>
        <v-col cols="12" md="5" order="first" order-md="12">
          <v-img
            src="/images/aviatorjk_bark.jpg"
            class="rounded-circle mx-auto"
            height="196px"
            width="196px"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import projects from "~/assets/data/projects.js";

export default {
  data() {
    return {
      project: projects.find((project) => project.id == this.$route.params.id),
    };
  },
};
</script>
