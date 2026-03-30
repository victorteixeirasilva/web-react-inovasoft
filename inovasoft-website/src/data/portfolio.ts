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
  { key: "react", projectIds: ["react_inovasoft_web"] },
  { key: "mobile", projectIds: [] },
  { key: "backendJava", projectIds: ["java_gateway_service", "java_auth_for_mservice", "java_books_service", "java_email_service", "java_finance_service", "java_objectives_service", "java_categories_service", "java_motivation_service", "java_tasks_service", "java_dashboard_service", "java_spring_cloud_microservices", "java_clean_arch_email_challenge"] },
];

/** Subset of projects highlighted on the home page (#portfolio). */
export const homePortfolioProjectIds: readonly string[] = [
  "react_inovasoft_web",
  "java_gateway_service",
  "java_spring_cloud_microservices",
  "java_dashboard_service",
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
  react_inovasoft_web: {
    image: "/images/react_inovasoft_web.png",
    stack: ["TypeScript", "React 19", "Next.js", "Tailwind CSS", "Framer Motion", "next-intl"],
    projectUrl: "https://github.com/victorteixeirasilva/web-react-inovasoft/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/web-react-inovasoft",
  },
  // mobile_sales_pwa: {
  //   image: "/images/blog-1.png",
  //   stack: ["PWA", "React", "Service Worker", "Push Notifications"],
  // },
  // mobile_field_native: {
  //   image: "/images/blog-2.png",
  //   stack: ["React Native", "Android/iOS", "GPS", "Camera API"],
  // },
  java_gateway_service: {
    image: "/images/java_gateway_service.png",
    stack: ["Java 21", "Spring Boot", "WebFlux", "OpenFeign", "JWT", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Gateway-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Gateway-Service",
  },
  java_auth_for_mservice: {
    image: "/images/java_auth_for_mservice.png",
    stack: ["Java 21", "Spring Boot", "JWT RS256", "BCrypt", "MySQL", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Auth-For-MService/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Auth-For-MService",
  },
  java_books_service: {
    image: "/images/java_books_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RS256", "JPA", "MySQL", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Books-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Books-Service",
  },
  java_email_service: {
    image: "/images/java_email_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "SMTP", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/email-service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/email-service",
  },
  java_finance_service: {
    image: "/images/java_finance_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "JPA", "MySQL", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Finance-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Finance-Service",
  },
  java_objectives_service: {
    image: "/images/java_objectives_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "JPA", "MySQL", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Objectives-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Objectives-Service",
  },
  java_categories_service: {
    image: "/images/java_categories_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "JPA", "MySQL", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Categories-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Categories-Service",
  },
  java_motivation_service: {
    image: "/images/java_motivation_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "JPA", "MySQL", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Motivation-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Motivation-Service",
  },
  java_tasks_service: {
    image: "/images/java_tasks_service.png",
    stack: ["Java 21", "Spring Boot", "JWT RSA", "JPA", "MySQL", "OpenFeign", "Swagger", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Tasks-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Tasks-Service",
  },
  java_dashboard_service: {
    image: "/images/java_dashboard_service.png",
    stack: ["Java 21", "Spring Boot", "JWT", "OpenFeign", "Swagger", "OpenRouter", "Docker"],
    projectUrl: "https://github.com/victorteixeirasilva/Dashboard-Service/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Dashboard-Service",
  },
  java_spring_cloud_microservices: {
    image: "/images/java_spring_cloud_microservices.png",
    stack: ["Java 23", "Spring Boot", "Spring Cloud", "Eureka", "Config Server", "Gateway", "OpenFeign", "H2", "Swagger"],
    projectUrl: "https://github.com/victorteixeirasilva/Construindo-um-Projeto-com-Arquitetura-Baseada-em-Microservicos-Usando-Spring-Cloud---DIO/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Construindo-um-Projeto-com-Arquitetura-Baseada-em-Microservicos-Usando-Spring-Cloud---DIO",
  },
  java_clean_arch_email_challenge: {
    image: "/images/java_clean_arch_email_api.png",
    stack: ["Java 23", "Spring Boot", "Clean Architecture", "JWT", "AWS SES", "Maven", "Swagger", "JUnit"],
    projectUrl: "https://github.com/victorteixeirasilva/Resolvendo-DESAFIO-de-VAGA-BACKEND-com-Java-Spring-Arquitetura-Limpa/blob/main/README.md",
    repositoryUrl: "https://github.com/victorteixeirasilva/Resolvendo-DESAFIO-de-VAGA-BACKEND-com-Java-Spring-Arquitetura-Limpa",
  },
  // java_api_gateway: {
  //   image: "/images/portfolio-1.png",
  //   stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  // },
  // java_payments_core: {
  //   image: "/images/portfolio-2.png",
  //   stack: ["Java", "Spring Security", "Kafka", "Redis"],
  // },
};
