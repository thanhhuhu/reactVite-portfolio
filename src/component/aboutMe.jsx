import { Icon } from "@iconify/react";
import javaScriptIcon from "@iconify/icons-logos/javaScript";
import reactIcon from "@iconify/icons-logos/react";
import html5Icon  from "@iconify/icons-logos/html-5"
import css3Icon  from "@iconify/icons-logos/css-3";
import sassIcon from "@iconify/icons-logos/sass";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import typeScriptIcon from "@iconify/icons-logos/typescript";
import mysqlIcon from "@iconify/icons-logos/mysql";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import {FrownOutlined} from "@ant-design/icons";

const About = () => {
    return (
        <div >
            <div id="about" className="flex flex-col items-center h-120 bg-gray-200 p-6 ">
                <h1 className="text-3xl mb-6 text-center">About Me</h1>
                <div className="flex justify-center items-center w-4/5  gap-x-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-150  text-center">
                        <img
                            src="/src/assets/avatar.jpg"
                            alt="Profile"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <div className="flex justify-center gap-6 mt-4">
                            {/*<Icon icon={reactIcon} className="text-blue-500" width="40" height="40" />*/}
                            {/*<Icon icon={javaScriptIcon} className="text-yellow-500" width="40" height="40" />*/}
                            <FrownOutlined
                            style={{fontSize: "2rem"}}/>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-[1200px] h-[200px] text-center flex items-center px-8 ml-8">
                        <p>
                            Hi, I'm Thanh, nice to meet you, maybe you dont know me but i know u :)
                        </p>
                    </div>
                </div>
            </div>
            <div className = "bg-cyan-950 relative ">
                <span className="text-3xl mb-6 text-center font-sans text-blue-300 mt-10 ">
                    <h1>SKILLS</h1>
                </span>
                <div className="flex gap-x-5 justify-center mt-5 rounded-sm h-[150px]">
                    <Icon icon ={html5Icon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={css3Icon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}}  />
                    <Icon icon ={sassIcon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={typeScriptIcon} width="100" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={bootstrapIcon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={reactIcon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={mysqlIcon} width="70" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                    <Icon icon ={mongodbIcon} width="100" height="70" style={{border: "1px solid black", backgroundColor:"white", borderRadius:"2px"}} />
                    <Icon icon ={javaScriptIcon} width="100" height="70" style={{border: "1px solid black", backgroundColor:"black", borderRadius:"2px"}} />
                </div>
            </div>
        </div>

    );
};

export default About;
