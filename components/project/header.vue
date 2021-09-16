<template>
  <div>
    <v-btn
      class="mt-4 ml-4 mt-md-8 ml-md-8 mb-2"
      color="primary"
      icon
      x-large
      @click="$router.go(-1)"
    >
      <v-icon x-large> {{ mdiArrowLeft }} </v-icon>
    </v-btn>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="mb-n3 text-center text-md-left" style="width: 100%">
            {{ project.name }}
          </h2>
          <div class="text-overline text--disabled text-center text-md-left">
            Horaires en temps réel des bus de Besançon (25)
          </div>
          <v-chip-group column>
            <v-chip v-for="(techno, index) in project.technos" :key="index">
              {{ techno }}
            </v-chip>
          </v-chip-group>
          <p class="text--medium text-justify text-sm-left">
            Cette application permet d'enregistrer les trajets les plus
            fréquents que l'utilisateur effectue pour ensuite lui afficher les
            temps de passages des bus.
          </p>
          <v-btn class="mt-4" outlined>
            Voir le code
            <v-icon right>
              {{ mdiOpenInNew }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" order="first" order-md="12">
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
import projects from "~/data/projects.js";
import { mdiArrowLeft, mdiOpenInNew } from "@mdi/js";

export default {
  data() {
    return {
      mdiArrowLeft,
      mdiOpenInNew,
      project: projects.find((project) => project.id == this.$route.params.id),
    };
  },
};
</script>
