const EXPERIENCES_ES = [
  {
    title: "Financial Data Asociate I",
    work_name: "BBVA",
    description:
      "FullStack Developer con experiencia en bases de datos, migración CLI, API REST y gestión de herramientas bancarias y transversales para más de 8,000 usuarios únicos.",
    date: "Now",
    img_path: "/taza.png",
  },
  {
    title: "Financial Data Associate Business Execution",
    work_name: "BBVA",
    description:
      "Desarrollo módulos en el sitio interno (IGBC) de Google Cloud para múltiples bancas, utilizando Vue.js, Flask y MySQL. También proporciono soluciones web para problemas de administración transversales en bancas.",
    date: "Now",
    img_path: "/label.png",
  },
  {
    title: "Trainee",
    work_name: "BBVA",
    description:
      "Me convertí en full-stack y administrador de una app en Google Cloud con Vue.js, Flask y MySQL. Creé scripts .sh para automatizar carga/descarga de datos en Oracle y MySQL, y aplicaciones web en Google Apps para temas internos.",
    date: "Now",
    img_path: "/bulb.png",
  },
  {
    title: "Becario",
    work_name: "BBVA",
    description:
      "Como becario, apoyé en la creación de una aplicación web, trabajando en el back-end con Python (Flask, SqlAlchemy, Alembic). También contribuí al mantenimiento de aplicaciones web en Google Apps utilizadas por más de 2,900 usuarios únicos.",
    date: "Now",
    img_path: "/Icons.png",
  },
];

const EXPERIENCES_EN = [
  {
    title: "Financial Data Asociate I",
    work_name: "BBVA",
    description:
      "FullStack Developer with experience in databases, CLI migration, REST API and management of banking and transversal tools for more than 8,000 unique users.",
    date: "Now",
    img_path: "/taza.png",
  },
  {
    title: "Financial Data Associate Business Execution",
    work_name: "BBVA",
    description:
      "Develop modules on the internal site (IGBC) of Google Cloud for multiple banks, using Vue.js, Flask and MySQL. I also provide web solutions for cross-administration issues in banks.",
    date: "Now",
    img_path: "/label.png",
  },
  {
    title: "Trainee",
    work_name: "BBVA",
    description:
      "I became full-stack and administrator of an app on Google Cloud with Vue.js, Flask and MySQL. I created .sh scripts to automate data upload/download in Oracle and MySQL, and web applications in Google Apps for internal issues.",
    date: "Now",
    img_path: "/bulb.png",
  },
  {
    title: "Becario",
    work_name: "BBVA",
    description:
      "As an intern, I supported the creation of a web application, working on the back-end with Python (Flask, SqlAlchemy, Alembic). I also contributed to the maintenance of web applications in Google Apps used by more than 2,900 unique users.",
    date: "Now",
    img_path: "/Icons.png",
  },
];

export const getExperiences = (currentLocale) => {
  if (currentLocale === "en") return EXPERIENCES_EN;
  if (currentLocale === "es") return EXPERIENCES_ES;

  return EXPERIENCES_EN;
}