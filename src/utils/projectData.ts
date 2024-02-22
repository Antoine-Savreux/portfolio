import portfolioImage from "../../public/images/portfolio-mobile.png";
import weatherShieldImage from "../../public/images/wheathershield-mobile.png";
import tvShowAdviserImage from "../../public/images/tvshowadviser.png";
import opotagerFrontImage from "../../public/images/opotager-front.png";

export const projectData = [
  {
    id: 1,
    name: "Portfolio",
    description:
      "Première version de mon portfolio. Réalisée avec Next 14 et tailwind. J'ai voulu au maximum n'utiliser que des composants que j'avais créé au préalable. Pas de bibliothèques d'UI. Pur produit Normand garanti !",
    image: portfolioImage,
    url: "/portfolio",
  },
  {
    id: 2,
    name: "WeatherShield",
    description:
      "Une application météo que j'ai commencé à réaliser avec Next 14 et grâce aux données de WeatherAPI. L'UI est construite grâce ) la bibliothèque ShadCN",
    image: weatherShieldImage,
    url: "/weather-shield",
  },
  {
    id: 3,
    name: "Keskonregarde?",
    description:
      "Une application que j'ai eu l'occasion de créer dans le cadre de mon apprentissage de React et Redux dans le cours de Robin Lebhar sur Udemy",
    image: tvShowAdviserImage,
    url: "/react-tv-show-adviser",
  },
  {
    id: 4,
    name: "O'potager",
    description:
      "Une application que j'ai crée avec mon équipe d'apothéose au terme de ma formation chez O'clock. La partie front-end a été réalisée avec React + Tailwind. L'API a été crée grâce à Symfony.",
    image: opotagerFrontImage,
    url: "/apo-front",
  },
];
