import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { france, usa } from "../assets";

const translations = {
  en: {
    navbar: [
      { label: "Home", path: "/" },
      { label: "About Me", path: "/about" },
      { label: "About Imago", path: "/about-imago" },
      { label: "Books", path: "/books" },
      {
        label: "Trainings",
        path: "/trainings",
        children: [
          { label: "Group Training", path: "/trainings/group" },
          { label: "One-on-One Training", path: "/trainings/one-on-one" },
        ],
      },
      {
        label: "Workshops",
        path: "/workshops",
        children: [
          { label: "Online Workshops", path: "/workshops/online" },
          { label: "In-Person Workshops", path: "/workshops/in-person" },
        ],
      },
      { label: "Français", img: france, action: "toggleLanguage" },
    ],
    splash: {
      welcomeHeading: "Welcome to the World of Imago Therapy",
      welcomeSubheading: "Transform your relationships through connection",
      chooseLang: "Choose your language",
      options: [
        { label: "English", value: "en" },
        { label: "Français", value: "fr" },
      ],
    },
    home: {
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
    aboutImago: {
      pageTitle: "About Imago",
      hero: {
        heading: "About Imago",
        subheading:
          "Imago helps people create the relationships they want to be living.  It offers help and support to people of all races, creeds, colours and gender orientations without discrimination.",
      },
      intro: {
        heading: "Definitions of Imago",
        text: [
          "An internal image created in childhood from relational experiences with parents and others, that significantly influences our choice of partner and how we interpret their behaviours in adulthood.",
          "An insect in its most mature, usually-winged form.",
        ],
      },
      sec3: {
        heading: "Imago is",
        points: [
          "a theory and practice that can be used in diverse situations involving human relationships.",
          "a way of being in the world and relating to the world",
          "a way of being in intimate relationship",
          "an approach to couple therapy",
        ],
        details: [
          "Imago helps people create the relationships they want to be living.  It offers help and support to people of all races, creeds, colours and gender orientations without discrimination.",
          "It gives people the skills and understanding to get unstuck from old dynamics, whether they are showing up at home, at work or at play.",
          "We are born in relationship, we are hurt in relationship, we must heal in relationship.",
          "Imago shows us how so we can live our fullest potential - achieve our most adult form and fly, free from old limiting beliefs and behaviours.",
          "Imago was developed in the mid 1980s by Harville Hendrix and Helen LaKelly Hunt, authors of the best-selling book “Getting the Love You Want: A Guide for Couples”, a long-time New York Times best-seller.",
          "It continues to evolve and spread. Workshops, trainings and therapy are offered in over 30 countries around the world.",
          "People from a wide range of spiritual and scientific traditions resonate strongly with the concepts presented through Imago theory and practice.",
        ],
      },
    },
    about: {
      pageTitle: "About",
      hero: {
        heading: "Sophie Slade",
        subheading: "Imago Trainings and Workshops",
        text: "I am passionate about relationships, helping people work through conflict and live in deep empathic connection with themselves and each other.  I am committed to working to the very best of my skills and abilities with all my clients, independent of race, colour, creed or gender identity.",
      },
      bio: [
        {
          heading: "What hooked me into Imago",
          text: [
            "I started trying to understand relationships when I was going through a divorce and studied relationships for my doctoral dissertation.",
            "I discovered Imago when I read “Getting the Love You Want” in 1991. I gave the workshop to my second husband for his birthday, because I thought he needed it! Ha ha! It turned my life around. It transformed my relationship with my husband and gave a focus to my work - to help people experience safe and caring connection.",
          ],
        },
        {
          heading: "My work",
          text: [
            "I have worked in private practice for over 30 years, seeing mainly couples but also individuals with relationship challenges.",
            "I am an Imago Workshop Presenter giving workshops in French and English in Montreal, London and around the world, whenever possible with my husband, David.",
            "As an Imago senior clinical instructor I offer trainings to therapists and others around the world and contribute to the development of theory and new advanced trainings.",
          ],
        },
      ],
      awards: {
        heading: "Awards",
        text: [
          "I have been honoured to receive both the Helen LaKelly Hunt Award for Community Building and the Harville Hendrix Award for Clinical Excellence.",
          "My husband, David, and I are in a long-term, deeply loving and passionate relationship which we pulled back from the brink of disaster and continue to create using the Imago tools.",
          "I live in Montreal, Canada and London, UK. My motto is “Have Imago, Will Travel”.",
        ],
        imgdesc: "Me and my husband David on Safari in South Africa",
        imgFac:
          "Sophie at The Imago Faculty meeting (above) and with Harville Hendrix and Helen Lakelly Hunt (right).",
      },
    },
    book: {
      pageTitle: "Book",
      hero: {
        heading: "Book",
        text: "Discover the power of authentic connection through Imago Therapy",
      },
      bookSec: {
        heading: "My latest book",
        subheading: "For Sale: Wedding Dress, size 20. Never Worn",
        text: [
          'If you saw an ad in the paper "For Sale: Wedding Dress, size 20. Never Worn" would you wonder about the story behind that ad? Sophie did and this collection of 23 short stories is her response. Each is written in a different genre. Each contains the titular phrase somewhere along the way. These stories range from fact to fiction to pure fantasy. Be prepared to plunge into a multiplicity of twisting narratives filled with unexpected turns, some of which may surprise and shock you, some touch and delight you. Become enthralled in a collection written with sensitivity for the challenges and delights of love relationships by a relationship therapist who weaves autobiographical details and imagination into a rich and diverse tapestry. Each story is followed by an invitation to the reader to join the author on a journey of self-discovery through writing.',
          "The opening story describes how the book came to be; how an ad from the pages of a \"Free Trader\" magazine led to a conversation between the author and her husband and sparked inspiration for the first story, followed by many others. Presented in the pages is an adventure for everybody, including humourous situations, erotica, a spiritual journey, elements of sci-fi, a fairy tale, a bet between two drag queens, a weight loss program, a narrative poem, a story of grief and loss, a travelogue and much more. Watch as a fascinating diversity of characters emerge from the pages. Meet a police woman whose partner doesn't show up on the wedding day, the madame of a brothel specializing in wedding scenarios, women and men dealing with the consequences of childhood sexual abuse, a man breaking out from his restrictive childhood, a women grieving her sister's death from cancer, a couple who meet on a train, Mary and Joseph, an alien from the Andromeda galaxy, a giant and a witch, a Fat Admirer, the dress itself, the man who sets off to discover the real story behind the ad, as well as many other endearing and unlikeable characters.",
        ],
        btn1: "Buy Now",
        btn2: "Buy On Amazon",
      },
      reviews: {
        heading: "Comments from other readers",
        comments: [
          {
            name: "Sri Muthu",
            title: "CEO HealthVenture",
            comment:
              "Sophie’s stories invite one into a multiverse of love, humour, sex and desire with the utmost kindness to the reader and characters that she so vividly brings to life. The blend of everyday context with awareness of the larger societal narratives allows the reader to get lost in the familiar yet unspoken landscape of lives lived loudly and well.  Get a cup of tea going, settle in for a deliciously languid and lusty exploration of Sophie’s world.",
          },
          {
            name: "Maureen Brine",
            title:
              "Imago Relationship therapist and lead female Interventionist on A & E television show, Intervention Canada",
            comment:
              "Brilliantly written, Sophie Slade uses her best creative mind to create these compelling full living catastrophe short stories. They are insightful, gutsy, bawdy, poignant, whimsical, erotic, mischievous, intriguing, fanciful, and full of crone wisdom! The book is a must read in front of the fire. Be prepared to enjoy, to laugh and to cry.",
          },
          {
            name: "Cheryl Dolinger Brown",
            title: "LCSW, psychotherapist, NYC",
            comment:
              "The stories in this book are poignant, funny, imaginative and psychologically true. Sophie Slade is a great writer with creativity and wit.",
          },
          {
            name: "Nikki Ali",
            title: "novelist, editor and historian",
            comment:
              "Readers are sure to devour – and be inspired by – this fun, imaginative and insightful short-story collection.",
          },
          {
            name: "Sylvia Rosenfeld",
            title: "Relationship and Sex Therapist",
            comment:
              "Each of these stories is psychologically sophisticated, sensitive, erotic and leaves us feeling that we truly know the woman who placed the ad.",
          },
          {
            name: "Carol Kramer",
            title: "psychotherapist, NYC",
            comment:
              "Sophie’s stories are filled with rich character development, descriptive sensual, sexual and psychologically sophisticated details that titillated this reader. …delicious surprise twists and unexpected conclusions.",
          },
        ],
      },
    },
    workshopsPage: {
      pageTitle: "Workshops",
      hero: {
        heading: "Workshops & Events",
        text: "Transformative experiences designed to enhance connection and create lasting relationship change.",
      },
      buttonLabel: "show Details",
      buttonLabel2: "Hide Details",
      workshopTypes: [
        {
          id: 1,
          heading: "Getting The Love You Want",
          subheading: "A Workshop For Couples",
          text: [
            "“Getting the Love You Want” - a workshop for couples who want a better relationship, whether it is:",
            "– already great and you want more skills to keep making it the very best it can be ",
            "– in deep trouble, possibly on the brink of ending ",
            "– riddled by long-standing irritations you would like to resolve ",
            "– new and full of potential",
            "An educational workshop that may well remind you why you fell in love, give you an experience of deep connection and understanding and prepare you to create the relationship you want into the future. Skills training and knowledge. A course everyone should have.",
          ],
          list: [
            {
              title: "Getting the Love You Want workshop for Couples.",
              date: "November 15-16, 2025",
              time: "9 a.m.- 6 p.m",
              location:
                "Stephens House & Garden (Avenue House), 17 East End Road, Finchley, N3 3QE",
              cost: "£650 per couple, £600 if register before 15 October, 2025. Register early to secure your place. 2/3 off for repeaters.",
              regLink:
                "https://docs.google.com/forms/d/1LvVWhB2CKL10cCcSUVaqtVxtdni4v1kSlN8zSSBWIgo/edit",
              link: "",
            },
            {
              title:
                "Satisfying Sex for Committed Couples workshop for couples",
              date: "Fridays: Sept. 19, 26, Oct. 3, 10, 2025",
              time: " 2-5.30 p.m",
              location: "Online",
              cost: "Before 19 Aug. Early Bird special: CA$850, US $650, 475 GBP, 575 euros. After 19 Aug. CA$950, US$680, 525 GBP, 625 euros.",
              regLink:
                "https://docs.google.com/forms/d/e/1FAIpQLScxuDFIZMkmBJ__exScYQoI7eiRHoodCVHfGR66yKSfA4377Q/viewform",
              link: "",
            },
            {
              title:
                "Satisfying Sex for Committed Couples workshop for couples",
              date: "Sundays: Sept 21, 28, Oct 5",
              time: "19. 9.30 am - 1pm EST",
              location: "Online",
              cost: "Before 19 Aug. Early Bird special: CA$850, US $650, 475 GBP, 575 euros. After 19 Aug. CA$950, US$680, 525 GBP, 625 euros.",
              regLink:
                "https://docs.google.com/forms/d/e/1FAIpQLScxuDFIZMkmBJ__exScYQoI7eiRHoodCVHfGR66yKSfA4377Q/viewform",
              link: "",
            },
          ],
        },
        {
          id: 2,
          heading: "Keeping the Love You Find",
          subheading: "A Workshop For Singles",
          text: [
            "A weekend workshop for singles, divorcees and anyone else who wants to understand how you are contributing to creating your relationships in positive and unproductive ways.",
            "Prepare to stop blaming others and take a good hard look at yourself. How empowering!",
          ],
          list: [
            {
              title: "Keeping the Love You Find - A Workshop For Singles",
              date: "Wednesdays, January 10 - March 6, 2024",
              time: "12 - 2 p.m. Eastern, 5-7 p.m. UK",
              location:
                "Online - en anglais. Pour le français contactez Pierrette.richard@cpamoncton.ca",
              cost: "$475 US per person",
              regLink: "https://bit.ly/KeepingWorkshopforTherapists",
              expired: true,
              link: "",
            },
          ],
        },
      ],
    },
    trainingsPage: {
      pageTitle: "Trainings",
      hero: {
        heading: "Training Programs",
        text: "Comprehensive training programs for therapists and individuals interested in Imago methodology.",
      },
      buttonLabel: "Learn more",
      trainings: [
        {
          title: "Clinical Training Program",
          text: "This training in couple therapy for psychotherapists, psychologists, psychiatrists, marriage and  family therapists will transform your work with your couple clients, help you to help them work through their conflicts and connect more deeply and safely with each other.",
          subtitle: "features",
          features: [
            "Clinical Track open to psychotherapists, psychologists, couple and family therapists",
            "Clinical Track open to psychotherapists, psychologists, couple and family therapists",
            "Clinical Track open to psychotherapists, psychologists, couple and family therapists",
          ],
          link: "",
        },
        {
          title: "Imago Professional Facilitator Training",
          text: "Imago skills and understanding of relationship dynamics are applicable in so many diverse fields. Wherever relationships are involved - at work, at home, at play -relationship challenges can arise.",
          subtitle: "features",
          features: [
            "Working with Individuals in the Relational Paradigm",
            "Working with Individuals in the Relational Paradigm",
            "Working with Individuals in the Relational Paradigm",
          ],
          link: "",
        },
        {
          title: '"Getting the Love You Want" Workshop Presenter Training',
          text: 'The "Getting the Love You Want" workshop has helped thousands of couples around the world over the past 20 plus years.  This 12-day training to be accredited to present this amazing, transformational workshop takes Imago therapists to a whole other level of understanding of Imago theory and practice.',
          subtitle: "features",
          features: [
            "It helps you to grow yourself as a presenter",
            "It helps you to grow yourself as a presenter",
            "It helps you to grow yourself as a presenter",
          ],
          link: "",
        },
        {
          title: "Training Videos",
          embedLink: "https://www.youtube.com/embed/TEdza5Dy8Wk",
          link: "",
        },
        {
          title: "Advanced Trainings",
          expanded: true,
          text: "These courses are generally offered over 3 days in person, or totalling 24 hours on-line including some self-study, but some can be adapted to shorter or longer presentations. Price is usually US$650 or equivalent per course.",
          subtitle: "Trainings list",
          features: [
            "The Relational Self / Working with Individuals in the Imago Paradigm ",
            "Brilliant at the Basics",
            "Giving and Receiving Love",
            "Sexuality, Sensuality and Imago",
            "Growing in Competence in Imago",
            "Characterological Growth",
            "From Despair to Repair",
            "The Journey of Change",
            "Imago Therapy through the Developmental Lens",
            "Presentational Skills Training",
            "“Getting the Love You Want” Workshop Presenters' Training",
            "“Keeping the Love You Find” Workshop Presenters Training",
          ],
        },
      ],
    },
    testimonials: {
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
    footer: {
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
  },
  fr: {
    navbar: [
      { label: "Accueil", path: "/" },
      { label: "À propos de moi", path: "/about" },
      { label: "À propos d'Imago", path: "/about-imago" },
      { label: "Livres", path: "/books" },
      {
        label: "Formations",
        path: "/trainings",
        children: [
          { label: "Formation de groupe", path: "/trainings/group" },
          { label: "Formation individuelle", path: "/trainings/one-on-one" },
        ],
      },
      {
        label: "Ateliers",
        path: "/workshops",
        children: [
          { label: "Ateliers en ligne", path: "/workshops/online" },
          { label: "Ateliers en présentiel", path: "/workshops/in-person" },
        ],
      },
      { label: "English", img: usa, action: "toggleLanguage" },
    ],
    splash: {
      welcomeHeading: "Bienvenue dans le monde de la thérapie Imago",
      welcomeSubheading: "Transformez vos relations grâce à la connexion",
      chooseLang: "Choisissez votre langue",
      options: [
        { label: "Anglais", value: "en" },
        { label: "Français", value: "fr" },
      ],
    },
    home: {
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
    },
    aboutImago: {
      pageTitle: "A propos d'Imago",
      hero: {
        heading: "À propos d'Imago",
        subheading:
          "Imago aide chacun à créer les relations qu’il souhaite vivre. Il offre soutien et accompagnement sans discrimination de race, croyance, couleur ou orientation de genre.",
      },
      intro: {
        heading: "Définitions d'Imago",
        text: [
          "Une image interne créée pendant l'enfance à partir d'expériences relationnelles avec les parents et d'autres figures, qui influence notre choix de partenaire et notre interprétation de ses comportements à l'âge adulte.",
          "Un insecte dans sa forme la plus mature, généralement ailée.",
        ],
      },
      sec3: {
        heading: "Imago est",
        points: [
          "une théorie et une pratique applicables dans diverses situations relationnelles.",
          "une façon d'être dans le monde et de s'y relier.",
          "une manière d'être en relation intime.",
          "une approche de la thérapie de couple.",
        ],
        details: [
          "Imago aide chacun à créer les relations qu'il souhaite vivre, sans aucune discrimination.",
          "Elle donne les compétences et la compréhension nécessaires pour se libérer des dynamiques limitantes, qu'elles surgissent à la maison, au travail ou pendant les loisirs.",
          "Nous naissons en relation, nous sommes blessés en relation, nous devons guérir en relation.",
          "Imago nous montre comment vivre pleinement notre potentiel et « prendre notre envol », libres des croyances et comportements anciens.",
          "Imago a été développée au milieu des années 1980 par Harville Hendrix et Helen LaKelly Hunt, auteurs du best-seller « Getting the Love You Want: A Guide for Couples ».",
          "Elle continue d'évoluer et de se répandre : ateliers, formations et thérapies sont proposés dans plus de 30 pays.",
          "Des personnes de nombreuses traditions spirituelles et scientifiques adhèrent fortement aux concepts Imago.",
        ],
      },
    },
    about: {
      pageTitle: "A propos",
      hero: {
        heading: "Sophie Slade",
        subheading: "Formations et ateliers Imago",
        text: "Je suis passionnée par les relations : j’aide chacun à gérer les conflits et à vivre une connexion empathique profonde. Je m’engage à mobiliser tout mon savoir-faire auprès de mes clients, sans distinction de race, couleur, croyance ou identité de genre.",
      },
      bio: [
        {
          heading: "Ce qui m'a attirée vers Imago",
          text: [
            "J'ai commencé à m'intéresser aux relations durant mon divorce et à en faire le sujet de ma thèse doctorale.",
            "J'ai découvert Imago en lisant « Getting the Love You Want » en 1991. J'ai offert cet atelier à mon deuxième mari pour son anniversaire… et cela a révolutionné ma vie !",
          ],
        },
        {
          heading: "Mon travail",
          text: [
            "Je pratique en cabinet privé depuis plus de 30 ans, principalement avec des couples, mais aussi avec des individus en difficulté relationnelle.",
            "Je suis animatrice d'ateliers Imago en français et en anglais, à Montréal, Londres et ailleurs avec mon mari David.",
            "En tant qu'instructrice clinique senior Imago, je forme des thérapeutes dans le monde entier et participe à l'évolution de la méthode.",
          ],
        },
      ],
      awards: {
        heading: "Récompenses",
        text: [
          "J'ai reçu le prix Helen LaKelly Hunt pour la construction de communauté et le prix Harville Hendrix pour l'excellence clinique.",
          "Mon mari David et moi avons surmonté une crise majeure et entretenons aujourd'hui une relation passionnée grâce aux outils Imago.",
          "Je vis à Montréal (Canada) et à Londres (Royaume-Uni). Ma devise : « Ayez Imago, et vous voyagerez ».",
        ],
        imgdesc: "David et moi lors d’un safari en Afrique du Sud",
        imgFac:
          "Sophie à la réunion de la faculté Imago (gauche) et avec Harville Hendrix & Helen LaKelly Hunt (droite).",
      },
    },
    book: {
      pageTitle: "Livre",
      hero: {
        heading: "Livre",
        text: "Découvrez le pouvoir d'une connexion authentique grâce à la thérapie Imago",
      },
      bookSec: {
        heading: "Mon dernier livre",
        subheading: "À vendre : Robe de mariée, taille 20. Jamais portée",
        text: [
          "Si vous voyiez l’annonce « À vendre : Robe de mariée, taille 20. Jamais portée » dans un journal, vous vous demanderiez l’histoire derrière ces mots ? Sophie l’a fait, et ce recueil de 23 nouvelles est sa réponse. Chaque texte explore un genre différent, toutes contiennent la phrase titre. Attendez-vous à plonger dans un kaléidoscope d’aventures et de rebondissements, du réel au fantastique, parfois drôles, parfois choquantes, mais toujours émouvantes.",
          "La nouvelle d’ouverture raconte comment tout a commencé : une annonce dans le magazine Free Trader puis une conversation entre l’auteure et son mari. Vous y découvrirez humour, érotisme, voyage spirituel, science-fiction, conte de fées, pari entre deux drag queens, programme minceur, poème narratif, récit de deuil, carnet de voyage, et bien plus encore. Rencontrez une policière abandonnée le jour du mariage, la gérante d’un bordel thématique, des survivant·e·s d’abus, un extraterrestre d’Andromède, un géant, une sorcière, et même la robe elle-même !",
        ],
        btn1: "Acheter maintenant",
        btn2: "Acheter sur Amazon",
      },
      reviews: {
        heading: "Commentaires des lecteurs",
        comments: [
          {
            name: "Sri Muthu",
            title: "CEO HealthVenture",
            comment:
              "Les histoires de Sophie vous entraînent dans un multivers d’amour, d’humour, de désir, avec une bienveillance rare pour le lecteur et ses personnages. Installez-vous confortablement, préparez une tasse de thé, et laissez-vous captiver par ce voyage langoureux et mémorable.",
          },
          {
            name: "Maureen Brine",
            title:
              "Thérapeute relationnelle Imago et consultante tv sur Intervention Canada",
            comment:
              "Brillamment écrit ! Sophie Slade déploie tout son génie créatif pour ces récits foisonnants, tantôt cocasses, tantôt érotiques, toujours poignants. Un incontournable devant la cheminée !",
          },
          {
            name: "Cheryl Dolinger Brown",
            title: "LCSW, psychothérapeute, NYC",
            comment:
              "Ces nouvelles sont à la fois poignantes, drôles et psychologiquement justes. Sophie Slade manie l’humour et l’émotion avec une maîtrise exceptionnelle.",
          },
          {
            name: "Nikki Ali",
            title: "Romancière et historienne",
            comment:
              "Un recueil à dévorer et à savourer : imaginative, percutante et pleine de surprises.",
          },
          {
            name: "Sylvia Rosenfeld",
            title: "Thérapeute relation et sexe",
            comment:
              "Chaque histoire est finement ciselée, psychologiquement riche et empreinte d’une sensualité captivante. On ressort transformé.",
          },
          {
            name: "Carol Kramer",
            title: "Psychothérapeute, NYC",
            comment:
              "Des personnages vivants, des descriptions sensuelles et des retournements de situation délicieux : ce livre est un régal pour les sens et l’esprit.",
          },
        ],
      },
    },
    workshopsPage: {
      pageTitle: "Ateliers",
      hero: {
        heading: "Ateliers & événements",
        text: "Expériences transformatrices pour renforcer la connexion et générer un changement relationnel durable.",
      },
      buttonLabel: "Voir la liste",
      buttonLabel2: "Cacher la liste",
      workshopTypes: [
        {
          id: 1,
          heading: "Getting The Love You Want",
          subheading: "Atelier pour couples",
          text: [
            '"Getting the Love You Want" est un atelier pour couples souhaitant :',
            "– développer davantage de compétences pour une relation déjà épanouie,",
            "– raviver l’étincelle en cas de difficultés persistantes,",
            "– résoudre les irritations de longue date.",
            "Cet atelier éducatif vous rappellera pourquoi vous êtes tombés amoureux, offrira une expérience de connexion profonde et vous donnera des outils concrets pour l’avenir.",
          ],
          list: [
            {
              title: "Getting the Love You Want – Atelier pour couples",
              date: "15-16 novembre 2025",
              time: "9 h–18 h",
              location:
                "Stephens House & Garden, 17 East End Road, Finchley, N3 3QE",
              cost: "650 £ par couple (600 £ si inscription avant le 15 octobre 2025). 2/3 de réduction pour les participants répétiteurs.",
              regLink:
                "https://docs.google.com/forms/d/1LvVWhB2CKL10cCcSUVaqtVxtdni4v1kSlN8zSSBWIgo/edit",
              link: "",
            },
            {
              title: "Satisfying Sex for Committed Couples – Atelier en ligne",
              date: "Vendredis : 19 & 26 sept., 3 & 10 oct. 2025",
              time: "14 h–17h30",
              location: "En ligne",
              cost: "850 CA$ / 650 US$ / 475 £ / 575 € (early bird avant le 19 août).",
              regLink:
                "https://docs.google.com/forms/d/e/1FAIpQLScxuDFIZMkmBJ__exScYQoI7eiRHoodCVHfGR66yKSfA4377Q/viewform",
              link: "",
            },
            {
              title: "Satisfying Sex for Committed Couples – Atelier en ligne",
              date: "Dimanches : 21 & 28 sept., 5 oct. 2025",
              time: "9 h30–13 h EST",
              location: "En ligne",
              cost: "850 CA$ / 650 US$ / 475 £ / 575 € (early bird avant le 19 août).",
              regLink:
                "https://docs.google.com/forms/d/e/1FAIpQLScxuDFIZMkmBJ__exScYQoI7eiRHoodCVHfGR66yKSfA4377Q/viewform",
              link: "",
            },
          ],
        },
        {
          id: 2,
          heading: "Keeping the Love You Find",
          subheading: "Atelier pour célibataires",
          text: [
            "Un atelier de week-end pour célibataires et divorcé·e·s désirant comprendre leur rôle dans la création de relations épanouissantes ou frustrantes.",
            "Arrêtez de blâmer l’autre et prenez conscience de votre part de responsabilité : un pas vers l’autonomie relationnelle.",
          ],
          list: [
            {
              title: "Keeping the Love You Find – Atelier pour célibataires",
              date: "Mercredis, 10 janv. – 6 mars 2024",
              time: "12 h–14 h (EST) / 17 h–19 h (UK)",
              location:
                "En ligne (en anglais). Contact pour le français : Pierrette.richard@cpamoncton.ca",
              cost: "475 US$ par personne",
              regLink: "https://bit.ly/KeepingWorkshopforTherapists",
              expired: true,
              link: "",
            },
          ],
        },
      ],
    },
    trainingsPage: {
      pageTitle: "Formations",
      hero: {
        heading: "Programmes de formation",
        text: "Formations complètes pour thérapeutes et personnes souhaitant maîtriser la méthodologie Imago.",
      },
      buttonLabel: "En savoir plus",
      trainings: [
        {
          title: "Formation clinique",
          text: "Destinée aux psychothérapeutes, psychologues et thérapeutes de couple, cette formation transformera votre accompagnement des conflits et renforcera la connexion de vos clients.",
          subtitle: "Caractéristiques",
          features: [
            "Volet clinique pour thérapeutes de couple et famille",
            "Techniques avancées d'écoute et de dialogue",
            "Supervisions et cas pratiques",
          ],
          link: "",
        },
        {
          title: "Formation de facilitateurs professionnels Imago",
          text: "Apprenez à animer ateliers et groupes en appliquant la théorie relationnelle Imago dans divers contextes (couple, travail, communauté).",
          subtitle: "Caractéristiques",
          features: [
            "Approche relationnelle pour individus",
            "Dynamique de groupe et supervision",
            "Outils pratiques pour la facilitation",
          ],
          link: "",
        },
        {
          title:
            "Formation « Getting the Love You Want » – Présentateur·rice d’atelier",
          text: "Formation de 12 jours pour devenir animateur·rice certifié·e du célèbre atelier « Getting the Love You Want ».",
          subtitle: "Caractéristiques",
          features: [
            "Conception et gestion d’un atelier",
            "Techniques avancées d’animation",
            "Certification officielle Imago",
          ],
          link: "",
        },
        {
          title: "Vidéos de formation",
          embedLink: "https://www.youtube.com/embed/TEdza5Dy8Wk",
          link: "",
        },
        {
          title: "Formations avancées",
          expanded: true,
          text: "Cours intensifs de 24 h (en ligne ou présentiel), modulables selon vos besoins. Tarif standard : 650 US$ ou équivalent.",
          subtitle: "Liste des formations",
          features: [
            "Le soi relationnel",
            "Fondamentaux du dialogue",
            "Donner et recevoir l'amour",
            "Sexualité et sensualité Imago",
            "Croissance de caractère",
            "Du désespoir à la réparation",
            "Parcours du changement",
            "Therapie Imago pour enfants",
            "Techniques de présentation",
            "« Getting the Love You Want » animateur·rice",
            "« Keeping the Love You Find » animateur·rice",
          ],
        },
      ],
    },
    testimonials: {
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
    footer: {
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
  },
};

// Language context setup
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  selectLanguage: () => {},
  showSplash: true,
  setShowSplash: () => {},
  ...translations.en,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "fr") {
      setLanguage(stored);
      setShowSplash(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    localStorage.clear();
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const selectLanguage = useCallback((lang) => {
    if (lang === "en" || lang === "fr") {
      localStorage.clear();
      setLanguage(lang);
      setShowSplash(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
      selectLanguage,
      showSplash,
      setShowSplash,
      ...translations[language],
    }),
    [language, showSplash]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
