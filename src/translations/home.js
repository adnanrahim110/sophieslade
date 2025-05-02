import { france, usa } from "../assets";

export const navbar = {
  en: [
    { label: "Home", path: "/" },
    { label: "About Imago", path: "/about-imago" },
    { label: "About Me", path: "/about" },
    { label: "Books", path: "/books" },
    {
      label: "Trainings",
      path: "/trainings",
      children: [
        {
          label: "Imago Clinical Training Program",
          path: "/trainings/clinical-training-program",
        },
        {
          label: "Imago Professional Facilitator Training",
          path: "/trainings/imago-professional-facilitator-training",
        },
        {
          label: '"Getting the Love You Want" Workshop Presenter Training',
          path: "/trainings/workshop-presenter-training",
        },
        {
          label: "Advanced Trainings",
          path: "/trainings/advanced-trainings",
        },
        {
          label: "Training Videos",
          path: "/trainings/training-videos",
        },
      ],
    },
    {
      label: "Workshops",
      path: "/workshops",
      children: [
        {
          label: "Getting the Love You Want workshop for Couples",
          path: "/workshops/getting-the-love-you-want-workshop-for-couples",
        },
        {
          label: "Satisfying Sex for Committed Couples - workshop",
          path: "/workshops/satisfying-sex-for-committed-couples-workshop",
        },
        {
          label: "Keeping the Love You Find - A Workshop For Singles",
          path: "/workshops/keeping-the-love-you-find-a-workshop-for-singles",
        },
      ],
    },
    { label: "Français", img: france, action: "toggleLanguage" },
  ],
  fr: [
    { label: "Accueil", path: "/" },
    { label: "À propos d'Imago", path: "/about-imago" },
    { label: "À propos de moi", path: "/about" },
    { label: "Livres", path: "/books" },
    {
      label: "Formations",
      path: "/trainings",
      children: [
        {
          label: "Programme de formation clinique Imago",
          path: "/trainings/clinical-training-program",
        },
        {
          label: "Formation de facilitateurs professionnels Imago",
          path: "/trainings/imago-professional-facilitator-training",
        },
        {
          label: "Formation de présentateur·rice “Getting the Love You Want”",
          path: "/trainings/workshop-presenter-training",
        },
        {
          label: "Formations avancées",
          path: "/trainings/advanced-trainings",
        },
        {
          label: "Vidéos de formation",
          path: "/trainings/training-videos",
        },
      ],
    },
    {
      label: "Ateliers",
      path: "/workshops",
      children: [
        {
          label: "Atelier “Getting the Love You Want” pour couples",
          path: "/workshops/getting-the-love-you-want-workshop-for-couples",
        },
        {
          label: "Sexe épanouissant pour couples engagés – atelier",
          path: "/workshops/satisfying-sex-for-committed-couples-workshop",
        },
        {
          label: "Atelier “Keeping the Love You Find” pour célibataires",
          path: "/workshops/keeping-the-love-you-find-a-workshop-for-singles",
        },
      ],
    },
    { label: "English", img: usa, action: "toggleLanguage" },
  ],
};

export const home = {
  en: {
    pageTitle: "Home",
    hero: {
      heading: "Transform Your Relationships",
      subheading:
        "Discover the power of authentic connection through Imago Therapy",
      actions: [
        { label: "Learn More", path: "/about-imago" },
        { label: "Contact Me", path: "#contact" },
      ],
      scrolldown: "#learnmore",
    },
    intro: {
      heading: "What is Imago Relationship Therapy?",
      text: "Imago Relationship Therapy is a transformative approach that helps couples and individuals understand the unconscious dynamics that shape their relationships. By creating a safe space for dialogue, Imago therapy facilitates healing and growth.",
    },
    services: {
      heading: "My Services",
      buttonLabel: "Learn more",
      cards: [
        {
          title: "Workshops",
          text: "Participate in interactive workshops designed to enhance communication and connection.",
          path: "/workshops",
          icon: "Users",
        },
        {
          title: "Training Programs",
          text: "Comprehensive training programs for therapists and individuals interested in Imago methodology.",
          path: "/trainings",
          icon: "BookOpen",
        },
        {
          title: "Therapy Sessions",
          text: "One-on-one and couples therapy sessions tailored to your specific relationship needs.",
          path: "/workshops",
          icon: "Heart",
        },
      ],
    },
  },
  fr: {
    pageTitle: "Accueil",
    hero: {
      heading: "Transformez vos relations",
      subheading:
        "Découvrez le pouvoir d'une connexion authentique grâce à la thérapie Imago",
      actions: [
        { label: "En savoir plus", path: "/about-imago" },
        { label: "Contactez-moi", path: "#contact" },
      ],
      scrolldown: "#learnmore",
    },
    intro: {
      heading: "Qu'est-ce que la thérapie relationnelle Imago ?",
      text: "La thérapie relationnelle Imago est une approche transformative qui aide les couples et les individus à comprendre les dynamiques inconscientes qui façonnent leurs relations. En créant un espace sûr pour le dialogue, la thérapie Imago facilite la guérison et la croissance.",
    },
    services: {
      heading: "Mes services",
      buttonLabel: "En savoir plus",
      cards: [
        {
          title: "Ateliers",
          text: "Participez à des ateliers interactifs conçus pour améliorer la communication et la connexion.",
          path: "/workshops",
          icon: "Users",
        },
        {
          title: "Programmes de formation",
          text: "Programmes complets pour thérapeutes et particuliers souhaitant maîtriser la méthodologie Imago.",
          path: "/trainings",
          icon: "BookOpen",
        },
        {
          title: "Séances de thérapie",
          text: "Séances individuelles et de couple adaptées à vos besoins relationnels spécifiques.",
          path: "/workshops",
          icon: "Heart",
        },
      ],
    },
    testimonials: {
      heading: "Ce que disent mes clients",
      items: [
        {
          text: "L’atelier Imago a complètement transformé notre façon de communiquer. Pour la première fois depuis des années, nous nous sommes vraiment écoutés.",
          author: "Sarah & Michael",
        },
        {
          text: "La thérapie Imago nous a aidés à briser des barrières dont nous ne soupçonnions même pas l’existence.",
          author: "Alex & Taylor",
        },
        {
          text: "J’ai trouvé un espace sûr pour exprimer mes sentiments et reconstruire la confiance avec mon conjoint.",
          author: "Jordan & Casey",
        },
        {
          text: "Chaque session était un pas vers une compréhension et une connexion plus profondes.",
          author: "Morgan & Riley",
        },
        {
          text: "Notre communication n’a jamais été aussi claire, grâce aux conseils reçus.",
          author: "Chris & Jamie",
        },
      ],
    },
  }
};

export const splash = {
  en: {
    welcomeHeading: "Welcome to the World of Imago Therapy",
    welcomeSubheading: "Transform your relationships through connection",
    chooseLang: "Choose your language",
    options: [
      { label: "English", value: "en" },
      { label: "Français", value: "fr" },
    ],
  },
  fr: {
    welcomeHeading: "Bienvenue dans le monde de la thérapie Imago",
    welcomeSubheading: "Transformez vos relations grâce à la connexion",
    chooseLang: "Choisissez votre langue",
    options: [
      { label: "Anglais", value: "en" },
      { label: "Français", value: "fr" },
    ],
  },
}

export const testimonials = {
  en: {
    heading: "What Clients Say",
    items: [
      {
        text: "The Imago workshop completely transformed how we communicate. For the first time in years, we truly listened to each other.",
        author: "Sarah & Michael",
      },
      {
        text: "Imago Therapy helped me and my partner break down barriers we didn't even know existed.",
        author: "Alex & Taylor",
      },
      {
        text: "I found a safe space to express my feelings and rebuild trust with my spouse.",
        author: "Jordan & Casey",
      },
      {
        text: "Each session felt like a step toward understanding and deeper connection.",
        author: "Morgan & Riley",
      },
      {
        text: "Our communication has never been clearer, thanks to the guidance we received.",
        author: "Chris & Jamie",
      },
    ],
  },
  fr: {
    heading: "Ce que disent mes clients",
    items: [
      {
        text: "L’atelier Imago a changé notre façon de communiquer : pour la première fois, nous nous sommes vraiment compris.",
        author: "Sarah & Michael",
      },
      {
        text: "Nous avons brisé des barrières que nous ne soupçonnions pas, grâce à Imago.",
        author: "Alex & Taylor",
      },
      {
        text: "J’ai trouvé un espace sûr pour exprimer mes émotions et reconstruire la confiance.",
        author: "Jordan & Casey",
      },
      {
        text: "Chaque séance nous a rapprochés un peu plus.",
        author: "Morgan & Riley",
      },
      {
        text: "Nous communiquons aujourd’hui avec une clarté inédite.",
        author: "Chris & Jamie",
      },
    ],
  },
}

export const footer = {
  en: {
    text: "Transforming relationships through conscious connection",
    contact: { heading: "Contact", emailLabel: "Email", phoneLabel: "Phone" },
    rights: "All rights reserved",
    newsletter: {
      heading: "Newsletter",
      label: "Stay updated with our latest workshops and events.",
      placeholder: "Enter your email",
      btn: "Subscribe",
    },
  },
  fr: {
    text: "Transformer les relations par la connexion consciente",
    contact: {
      heading: "Contact",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
    },
    rights: "Tous droits réservés",
    newsletter: {
      heading: "Bulletin",
      placeholder: "Entrez votre email",
      label: "Restez informé de nos derniers ateliers et événements.",
      btn: "S'abonner",
    },
  },
}
