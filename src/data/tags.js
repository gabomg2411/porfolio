import Vue from "../components/icons/Vue.astro"
import Tailwind from "../components/icons/Tailwind.astro"
import Css from "../components/icons/Css.astro";
import Mysql from "../components/icons/Mysql.astro";
import Python from "../components/icons/Python.astro";
import Gcloud from "../components/icons/Gcloud.astro";

const TAGS = {
  VUE: {
    name: "Vue.js",
    class: "bg-black text-white",
    icon: Vue,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#264de4] text-white",
    icon: Css,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#00758f] text-white",
    icon: Mysql,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#306998] text-white",
    icon: Python,
  },
  GCLOUD: {
    name: "Google Cloud",
    class: "bg-[#4285f4] text-white",
    icon: Gcloud,
  },
}

export default TAGS;
