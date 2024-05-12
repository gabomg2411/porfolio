import TAGS from "./tags";

const PROJECTS = [
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

export default PROJECTS;