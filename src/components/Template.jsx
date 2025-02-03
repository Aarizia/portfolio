import { useLocation } from "react-router";
import Header from "./Header";
import Menu from "./Menu";
import IndexMain from './IndexMain'
import ProjectsMain from "./ProjectsMain";
import AboutMain from "./AboutMain";
import ContactMain from "./ContactMain";

export default function Template() {

    const pageLocation = useLocation();
    const pagePath = pageLocation.pathname

    return (
        <div className="wrapper">
            <Header />
            <Menu />
            { pagePath === '/' &&
                <IndexMain />
            }
            { pagePath === '/projects' &&
                <ProjectsMain />
            }
            { pagePath === '/about' &&
                <AboutMain />
            }
            { pagePath === '/contact' &&
                <ContactMain />
            }
        </div>
    )
}