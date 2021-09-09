<template>
  <v-container>
    <h2 class="my-16">{{ $t("home__projects") }}</h2>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="5"
        :offset-md="index % 2 === 0 ? '0' : '2'"
      >
        <project-item :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Ginko Real Time Widget",
          bullets: [
            "Bullet point number 1",
            "Bullet point number 2",
            "Bullet point number 3",
          ],
          code: "http://",
          demo: "/ginko",
        },
        {
          name: "Cavity",
          bullets: [
            "Bullet point number 1",
            "Bullet point number 2",
            "Bullet point number 3",
          ],
          code: "http://",
          demo: "/cavity",
        },
      ],
    };
  },
};
</script>
