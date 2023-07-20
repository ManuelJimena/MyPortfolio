import "./style.css";

import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { Divider } from "./components/Divider/Divider";
const header = document.querySelector("header");
header.innerHTML = Navbar();
linkPage("#homelink", Home);
linkPage("#aboutlink", About);
linkPage("#projectslink", Projects);
linkPage("#contactlink", Contact);
Home();
changeTheme();
footer.insertAdjacentHTML("beforebegin", Divider());