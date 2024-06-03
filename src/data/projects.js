import TAGS from "./tags";

const PROJECTS_ES = [
  {
    id: 1,
    name: 'Traspasos entre bancas',
    description: 'Sistema para traspasar clientes a una banca diferente. Se solicita Vo.Bo de varias figuras y se utiliza un tracking para revisar el estatus del traspaso',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },
  {
    id: 2,
    name: 'Tubería',
    description: 'Proyecto para la gestión de los créditos hipotecarios. El crédito se actualiza de estatus y otros campos cada que se haga un avance con mismo.',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },
  {
    id: 3,
    name: 'Tablero de Eficacia',
    description: 'Herramienta para gestionar y monitorear los puntos y logro de los banqueros, oficinas y divisiones de la banca. ',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },

];

const PROJECTS_EN = [
  {
    id: 1,
    name: 'Transfers between banks',
    description: 'System to transfer clients to a different bank. Vo.Bo is requested from several figures and a tracking is used to review the status of the transfer',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },
  {
    id: 2,
    name: 'Pipeline',
    description: 'Project for the management of mortgage loans. The credit is updated with status and other fields each time an advance is made with it.',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },
  {
    id: 3,
    name: 'Efficiency Dashboard',
    description: 'Tool to manage and monitor the points and achievement of bankers, offices and divisions of the bank.',
    tags: [TAGS.VUE, TAGS.PYTHON, TAGS.GCLOUD]
  },
];

export const getProjects = (currentLocale) => {
  if (currentLocale === "en") return PROJECTS_EN;
  if (currentLocale === "es") return PROJECTS_ES;
  return PROJECTS_EN
}
