export type PortfolioCategoryKey = "wordpress" | "react" | "mobile" | "backendJava";

export type PortfolioProjectMeta = {
  image: string;
  stack: string[];
  projectUrl?: string;
  repositoryUrl?: string;
};

export const portfolioCategories: { key: PortfolioCategoryKey; projectIds: string[] }[] = [
  {
    key: "wordpress",
    projectIds: [
      "wp_pkhortifruti",
      "wp_blogalmabela",
      "wp_zeus",
      "wp_trafegosupremo",
      "wp_adncurso",
      "wp_cursoadn",
      "wp_heliopsi",
      "wp_inovarenutricao",
      "wp_nexus",
      "wp_inovasoft_demo",
    ],
  },
  { key: "react", projectIds: [] },
  { key: "mobile", projectIds: [] },
  { key: "backendJava", projectIds: [] },
];

export const portfolioProjectMeta: Record<string, PortfolioProjectMeta> = {
  wp_pkhortifruti: {
    image: "/images/portfolio-1.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance"],
    projectUrl: "https://pkhortifruti.inovasoft.tech/",
  },
  wp_blogalmabela: {
    image: "/images/portfolio-2.png",
    stack: ["WordPress", "Blog", "Conteudo", "UI"],
    projectUrl: "https://blogalmabela.inovasoft.tech/",
  },
  wp_zeus: {
    image: "/images/portfolio-4.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance", "Vendas"],
    projectUrl: "https://zeusadvogados.inovasoft.tech/",
  },
  wp_trafegosupremo: {
    image: "/images/portfolio-3.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance", "Vendas"],
    projectUrl: "https://trafegosupremo.inovasoft.tech/",
  },
  wp_adncurso: {
    image: "/images/ADNCurso.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance"],
    projectUrl: "https://adncurso.inovasoft.tech/",
  },
  wp_cursoadn: {
    image: "/images/wp_cursoadn.png",
    stack: ["WordPress", "Elementor", "SEO", "Vendas"],
    projectUrl: "https://cursoadn.inovasoft.tech/",
  },
  wp_heliopsi: {
    image: "/images/wp_heliopsi.png",
    stack: ["WordPress", "Elementor", "SEO"],
    projectUrl: "https://heliopsi.inovasoft.tech/",
  },
  wp_inovarenutricao: {
    image: "/images/wp_inovarenutricao.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance"],
    projectUrl: "https://inovarenutricao.inovasoft.tech/",
  },
  wp_nexus: {
    image: "/images/wp_nexus.png",
    stack: ["WordPress", "Elementor", "SEO", "Portfolio"],
    projectUrl: "https://nexus.inovasoft.tech/",
  },
  wp_inovasoft_demo: {
    image: "/images/wp_inovasoft_demo.png",
    stack: ["WordPress", "Elementor", "SEO", "Performance"],
    projectUrl: "https://wordpress.inovasoft.tech/",
  },
  // mobile_sales_pwa: {
  //   image: "/images/blog-1.png",
  //   stack: ["PWA", "React", "Service Worker", "Push Notifications"],
  // },
  // mobile_field_native: {
  //   image: "/images/blog-2.png",
  //   stack: ["React Native", "Android/iOS", "GPS", "Camera API"],
  // },
  // java_api_gateway: {
  //   image: "/images/portfolio-1.png",
  //   stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  // },
  // java_payments_core: {
  //   image: "/images/portfolio-2.png",
  //   stack: ["Java", "Spring Security", "Kafka", "Redis"],
  // },
};
