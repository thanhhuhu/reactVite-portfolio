import { TypeAnimation } from "react-type-animation";
import { RU } from "country-flag-icons/react/3x2";
import { VN } from "country-flag-icons/react/1x1";
import { GB } from "country-flag-icons/react/3x2";
import {Menu} from "antd";
import {MdOutlineComputer} from "react-icons/md";
// import {Toggle} from "./Toggle.jsx";
// import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ scrollToSection, aboutRef, experienceRef, projectsRef}) => {
    // const [isDark, setIsDark] = useState(true);

   const items = [
       {
           key: "aboutMe",
           label: 'About me',
           type:'link',
           onClick: () => scrollToSection(aboutRef)
       },
       {
           key: "experience",
           label: 'Experience',
           type:'link',
           onClick: () => scrollToSection(experienceRef)
       },
       {
           key: "projects",
           label: 'Projects',
           type:'link',
           onClick: () => scrollToSection(projectsRef)
       },
   ]
    return (
        <div style={{backgroundColor: "skyblue"}} className="App" >
            {/*<Toggle*/}
            {/*    isChecked={isDark}*/}
            {/*    handleChange={() => setIsDark(!isDark)}*/}
            {/*/>*/}
            <Menu
                style={{
                    width: 350,
                    height: "5vh",
                    backgroundColor: "skyblue",
                    color:'black',
                    fontSize: "15px",
                    fontFmaily:"monospace",
                }}
                    defaultSelectedKeys={['aboutMe']}
                    defaultOpenKeys={['aboutMe']}
                    mode="horizontal"
                    items={items}
            />
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "95vh",
                    textAlign: "center",
                    backgroundColor: "skyblue",
                    position: "relative",
                }}
            >
                <MdOutlineComputer style={{ fontSize: "100px", margin: "20px 0" }} />
                <span style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Nguyen Dinh Thanh</span>

                <h1>
                    <TypeAnimation
                        sequence={[
                            "I am a son of communism", 1000,
                            "I am a front-end developer", 1000,
                            "I am a student", 1000,
                            "I am a amateur", 1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "30px", display: "inline-block", fontFamily: "sans-serif" }}
                        repeat={Infinity}
                    />
                </h1>
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                    }}
                >
                    <VN title="Vietnam" className="flag-icon" style={{ width: "70px", height: "35px",  }} />
                    <RU title="Russia" className="flag-icon" style={{ width: "50px", height: "auto",  }} />
                    <GB title="Great Britain" className="flag-icon" style={{ width: "50px", height: "auto",  }} />
                </div>
            </header>

        </div>
    );
};

export default Header;