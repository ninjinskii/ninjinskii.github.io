// TODO: replace text with translatable keys
export default [
  {
    id: 1,
    name: "Ginko Real Time Widget",
    subtitle: "Horaires en temps réel des bus de Besançon (25)",
    technos: ["Android", "Kotlin", "SQLite", "XML"],
    bullets: [
      "Bullet point number 1",
      "Bullet point number 2",
      "Bullet point number 3",
    ],
    story:
      "Cette application permet d'enregistrer les trajets les plus fréquents que l'utilisateur effectue pour ensuite lui afficher les temps de passages des bus.",
    code: "https://github.com/ninjinskii/GinkoRealTimeWidget",
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
  {
    id: 2,
    name: "Cavity",
    subtitle: "Gestionnaire de cave à vin",
    technos: ["Android", "Java", "SQLite", "XML"],
    bullets: ["Bullet point number 1", "Bullet point number 3"],
    story: "",
    code: "https://github.com/ninjinskii/JavaCavity",
    demo: {
      video: "/videos/cavity.mp4",
      timestamps: [{ when: 99, desc: "bla" }],
    },
  },
];
