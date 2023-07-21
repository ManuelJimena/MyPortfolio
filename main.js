import "./style.css";

import { linkPage } from "./utils/linkPage";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
const header = document.querySelector("header");
header.innerHTML = Header();
linkPage("#homelink", Home);
linkPage("#aboutlink", About);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
Home();
