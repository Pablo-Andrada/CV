import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  fotocv,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andrada Pablo Matias",
  initials: "AP",
  location: "Pilar, Córdoba, Argentina",
  locationLink: "https://maps.app.goo.gl/Q3pZkMCTx9AdcJkY8",
  about:
    "Desarrollador Full Stack, con conocimientos en JavaScript, React, Node, Express, Sequelize y PostgreSQL",
  summary:
    "Full Stack Developer con background en React, Redux, Express, Node JS, JavaScript, HTML, CSS,Sequelize y PostgreSQL. Cuento con proyectos que avalan mi experiencia en el campo del software y que me ayudaron a agregar competencias: trabajar en equipo, manejo de librerías, entornos de trabajo, etc. Conocimientos en metodologías ágiles, GIT, estructura de datos, algoritmos, frameworks CSS. Actualmente además de formarme en HENRY, estoy cursando estudios en la carrera Licenciatura en Ciencias de la Computación de la  UNC en la Facultad de Matemática,Astronomía, Física y Computación, con el fin de aprender más de este mundo del software.",
  avatarUrl: "https://avatars.githubusercontent.com/u/76768919?s=400&u=0b8a8f1ba4eb1ec803d584edf98c4cc32d8ba2b8&v=4",
  
  contact: {
    email: "pablomatiasandrada@gmail.com",
    tel: "+543572529573",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Pablo-Andrada",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pablo-matias-andrada-5ab113211/",
        icon: LinkedInIcon,
      }

    ],
  },
  education: [
    {
      school: "Soy HENRY",
      degree: "Desarrollador FULL STACK",
      start: "2023",
      end: "2023",
    },
    {
      school: "Facultad de Matemática, Astronomía, Física y Computación",
      degree: "Licenciado en Ciencias de la Computación",
      start: "2023",
      end: "Actualmente"
    },
  ],
  work: [
    {
      company: "Full Stack Web Developer - Proyecto Grupal Final - The Next Page",
      link: "https://the-next-page.vercel.app",
      badges: [],
      title: "Full Stack Developer",
      logo: null,
      start: "Sep 2023",
      end: "Oct 2023",
      description:
        "El objetivo de la app es poner en práctica los conocimientos adquiridos. Es una app de venta ecommerce de venta de libros.  Creando todo un flujo desde crear una Base de datos, crear rutas para el back, con funciones controladoras que manejan la lógica, luego usar REDUX para conectar el back con el front, en dicho front  renderizamos cards de Libros,usamos filtros, creamos Libros, tenemos un carrito de compras con mercado pago y stripe, envios de mail con nodemailer,loguin, funciones de administrador,etc",
    },
    {
      company: "Full Stack Web Developer - Proyecto Integrador - Rick and Morty ",
      link: "https://github.com/Pablo-Andrada/Proyecto-RickAndMorty",
      badges: [],
      title: "Full Stack Developer",
      logo: null,
      start: "Jun 2023",
      end: "Jul 2023",
      description:
        "Experiencia académica. Henry Bootcamp. El objetivo de la app es poner en práctica los conocimientos del Bootcamp, renderizar personajes de la serie, filtrarlos, agregar favoritos, crear base de datos y utilizarla para guardar la información traída de una API externa.",
        
    },
    
  ],
  skills: [
    "JavaScript",
    "React",
    "Node JS",
    "Express JS",
    "Sequelize",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Proyecto Grupal Final - The Next Page",
      techStack: [
        "JavaScript",
        "React",
        "Node JS",
        "Express JS",
        "Sequelize",
        "PostgreSQL",
      ],
      description: "Ecommerce para venta de libros",
      logo: null,
      link: {
        label: "the-next-page",
        href: "https://the-next-page.vercel.app",
      },
    },
    {
      title: "Proyecto Integrador - Rick and Morty",
      techStack: [
      "JavaScript",
      "React",
      "Node JS",
      "Express JS",
      "Sequelize",
      "PostgreSQL",],
      description:
        "App que renderiza cards basada en personajes de Rick and Morty",
      logo: MonitoLogo,
      link: {
        label: "RickAndMorty",
        href: "https://github.com/Pablo-Andrada/Proyecto-RickAndMorty",
      },
    },
    
  ],
} as const;
