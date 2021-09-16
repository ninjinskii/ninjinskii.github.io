// TODO: replace text with translatable keys
export default [
  {
    id: 1,
    shortname: "grtw",
    name: "Ginko Real Time Widget",
    subtitle: "grtw__subtitle",
    thumbnail: "/images/logo-grtw.png",
    technos: ["Android", "Kotlin", "SQLite", "XML"],
    story: "grtw__story",
    bullets: [
      "Utilisation d'une base de données pour stocker les trajets",
      "Communication avec une API pour afficher les temps de passages",
      "Création d'un widget pour afficher ses temps directement sur l'écran d'acceuil",
    ],
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
        { when: 81, desc: "demo__change_path" },
        { when: 98, desc: "demo__delete_path" },
      ],
    },
  },
  {
    id: 2,
    shortname: "cavity",
    name: "Cavity",
    subtitle: "cavity__subtitle",
    thumbnail: "/images/logo-cavity.png",
    technos: ["Android", "Java", "SQLite", "XML"],
    bullets: ["Bullet point number 1", "Bullet point number 3"],
    story: "cavity__story",
    code: "https://github.com/ninjinskii/JavaCavity",
    demo: {
      video:
        "https://user-images.githubusercontent.com/31962617/133339957-7a56500a-65b1-4343-999f-ad7c653cf391.mp4",
      timestamps: [
        { when: 0, desc: "demo__display_wines" },
        { when: 9, desc: "demo__delete_wine" },
        { when: 12, desc: "demo__add_wine" },
        { when: 46, desc: "demo__search_wine" },
        { when: 57, desc: "demo__add_bottle" },
        { when: 115, desc: "demo__display_bottle" },
        { when: 134, desc: "demo__consume_bottle" },
        { when: 159, desc: "demo__delete_bottle" },
      ],
    },
  },
];
