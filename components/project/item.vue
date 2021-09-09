<template>
  <v-card shaped>
    <v-img src="/images/aviatorjk_bark.jpg" height="196px" />
    <v-card-title>
      <h3 style="width: 100%">{{ project.name }}</h3>
      <v-chip-group column>
        <v-chip v-for="(techno, index) in project.technos" :key="index">
          {{ techno }}
        </v-chip>
      </v-chip-group>
    </v-card-title>
    <v-card-text>
      <ul>
        <li v-for="(bullet, index) in project.bullets" :key="index">
          {{ bullet }}
        </li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn outlined color="primary" class="mr-4"> Code </v-btn>
      <v-btn
        color="primary"
        class="mr-4"
        outlined
        nuxt
        :to="`/project/${project.id}`"
      >
        Demo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
