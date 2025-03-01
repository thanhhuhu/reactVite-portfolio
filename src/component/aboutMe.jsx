import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";
import {FaBootstrap, FaReact, FaSass} from "react-icons/fa";
import {TiHtml5} from "react-icons/ti";
import {SiMysql} from "react-icons/si";
import {RiTailwindCssFill} from "react-icons/ri";
import {IoLogoCss3, IoLogoJavascript} from "react-icons/io";
import {DiMongodb} from "react-icons/di";
import {TbBrandTypescript} from "react-icons/tb";

const About = () => {
    return (
        <div id="about">
            <div  id="about" className="flex flex-col items-center h-120 bg-gray-200 p-6 ">
                <h1 className="text-3xl mb-6 text-center">About Me</h1>
                <div className="flex justify-center items-center w-4/5  gap-x-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-150  text-center">
                        <img
                            src="/src/assets/avatar.jpg"
                            alt="Profile"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <div className="flex justify-center gap-6 mt-4">
                            <FrownOutlined
                                style={{fontSize: "2rem"}}/>
                            <MehOutlined
                                style={{fontSize: "2rem"}}
                            />
                            <SmileOutlined
                                style={{fontSize: "2rem"}}
                            />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-[1200px] h-[200px] text-center flex items-center px-8 ml-8">
                        <p>
                            Hi, i&#39;m Thanh, i&#39;m a student of universtiy, i dont have much experience, i have a few small projects about web
                            and you can check it below. Thank you very much for being here 💝
                        </p>
                    </div>
                </div>
            </div>
            <div className = "bg-cyan-950 relative ">
                <span className="text-3xl mb-6 text-center font-sans text-blue-300 mt-10 ">
                    <h1>SKILLS</h1>
                </span>
                <div className="flex gap-x-5 justify-center mt-5 rounded-sm h-[150px]">
                    <TiHtml5   style={{ backgroundColor:"white",  width:"70" , height:"70"}} />
                    <IoLogoCss3  style={{ backgroundColor:"white",width:"70" , height:"70"}}  />
                    <FaSass  style={{ backgroundColor:"white",  width:"70" , height:"70"}} />
                    <RiTailwindCssFill  style={{ backgroundColor:"white",  width:"70" , height:"70"}} />
                    <FaBootstrap style={{border: "1px solid black", backgroundColor:"white", width:"70" , height:"70"}}  />
                    <FaReact style={{border: "1px solid black", backgroundColor:"white",  width:"70" , height:"70"}}  />
                    <TbBrandTypescript  style={{border: "1px solid black", backgroundColor:"white",  width:"70" , height:"70"}} />
                    <SiMysql style={{border: "1px solid black", backgroundColor:"white",  width:"70" , height:"70"}} />
                    <DiMongodb style={{border: "1px solid black", backgroundColor:"white",  width:"70" , height:"70"}} />
                    <IoLogoJavascript style={{border: "1px solid black", backgroundColor:"white",  width:"70" , height:"70"}} />
                </div>
            </div>
        </div>

    );
};

export default About;
