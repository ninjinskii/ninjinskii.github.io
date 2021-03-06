export default [
  {
    shortname: "cavity",
    name: "Cavity",
    subtitle: "cavity__subtitle",
    thumbnail: "/images/logo-cavity.png",
    technos: ["Android", "Kotlin", "SQLite", "XML", "CI/CD"],
    story: "cavity__story",
    code: "https://github.com/ninjinskii/Cavity",
    demo: {
      video:
        "https://user-images.githubusercontent.com/31962617/167398025-647f7166-98ae-4355-858f-07b4c99b9e61.mp4",
      timestamps: [
        { when: 0, desc: "demo__display_wines" },
        { when: 9, desc: "demo__add_wine" },
        { when: 36, desc: "demo__add_bottle" },
        { when: 80, desc: "demo__display_bottle" },
        { when: 91, desc: "demo__search_bottle" },
        { when: 106, desc: "demo__consume_bottle" },
        { when: 129, desc: "demo__show_history" },
        { when: 147, desc: "demo__show_stats" },
        { when: 169, desc: "demo__delete_wine" },
      ],
    },
    playstore:
      "https://play.google.com/store/apps/details?id=com.louis.app.cavity",
  },
  {
    shortname: "cavity-backend",
    name: "Cavity backend",
    subtitle: "cavity_backend__subtitle",
    thumbnail: "/images/logo-cavity-backend.png",
    technos: ["Deno", "Typescript", "PostgreSQL", "Docker"],
    story: "cavity_backend__story",
    code: "https://github.com/ninjinskii/Cavity-backend",
    demo: null,
    playstore: null,
  },
  {
    shortname: "grtw",
    name: "Ginko Real Time Widget",
    subtitle: "grtw__subtitle",
    thumbnail: "/images/logo-grtw.png",
    technos: ["Android", "Kotlin", "SQLite", "XML"],
    story: "grtw__story",
    code: "https://github.com/ninjinskii/GinkoRealTimeWidget",
    demo: {
      video:
        "https://user-images.githubusercontent.com/31962617/133438216-aeb103ca-983a-4808-90c2-166db4ea4e04.mp4",
      timestamps: [
        { when: 0, desc: "demo__add_path" },
        { when: 23, desc: "demo__choose_path" },
        { when: 31, desc: "demo__add_widget" },
        { when: 47, desc: "demo__update_times" },
        { when: 54, desc: "demo__switch_directions" },
        { when: 64, desc: "demo__add_new_path" },
        { when: 70, desc: "demo__fill_stops" },
        { when: 81, desc: "demo__change_path" },
        { when: 98, desc: "demo__delete_path" },
      ],
    },
    playstore: null,
  },
];
