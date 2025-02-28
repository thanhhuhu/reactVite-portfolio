import {CaretUpOutlined, EditOutlined, GithubOutlined, UserOutlined} from "@ant-design/icons";
import './style.css'
// eslint-disable-next-line react/prop-types
const Sidebar = ({ scrollToSection, aboutRef, experienceRef, projectsRef }) => {
    return (
        <div
            style={{
                position: "fixed",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "skyblue",
                padding: "10px",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                zIndex: 1000
            }}
        >
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    background: "skyblue",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                <CaretUpOutlined />
            </button>
                <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="sidebar-btn"
                ><UserOutlined />
                </button>
                <button
                    onClick={() => scrollToSection(experienceRef)}
                    className="sidebar-btn"
                ><EditOutlined />
                </button>
                <button
                    onClick={() => scrollToSection(projectsRef)}
                    className="sidebar-btn"
                ><GithubOutlined />
                </button>
        </div>
    );
};

export default Sidebar;
