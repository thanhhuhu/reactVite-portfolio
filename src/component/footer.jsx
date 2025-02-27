import {FacebookOutlined, GithubOutlined, InstagramOutlined} from "@ant-design/icons";
import {Link} from "react-router";

const Footer = () => {
    return (
        <div className="bg-black flex flex-col items-center justify-center h-20">
            <div className="flex gap-4">
                <GithubOutlined
                    style={{
                        backgroundColor: "white",
                        fontSize: "30px",
                        borderRadius: "10px",
                        padding: "5px",
                    }}
                />
                <InstagramOutlined
                    style={{
                        backgroundColor: "white",
                        fontSize: "30px",
                        borderRadius: "10px",
                        padding: "5px",
                    }}
                />
                <FacebookOutlined
                        style={{
                            backgroundColor: "white",
                            fontSize: "30px",
                            borderRadius: "10px",
                            padding: "5px",
                        }}
                />
            </div>
            <div className="text-center text-white">
                <h1>Copyright © Nguyen Thanh</h1>
            </div>
        </div>
    );
};

export default Footer;
