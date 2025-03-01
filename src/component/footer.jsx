import {FacebookOutlined, GithubOutlined, InstagramOutlined} from "@ant-design/icons";

const Footer = () => {
    return (
        <div className="bg-black flex flex-col items-center justify-center h-20">
            <div className="flex gap-4">
                <a
                    href="https://github.com/thanhhuhu"
                    target="_blank"
                >
                    <GithubOutlined
                        style={{
                            backgroundColor: "white",
                            fontSize: "30px",
                            borderRadius: "10px",
                            padding: "5px",
                        }}
                    />
                </a>
                <a
                    href="https://www.instagram.com/hnaht_nguyen/"
                    target="_blank"
                >
                    <InstagramOutlined
                        style={{
                            backgroundColor: "white",
                            fontSize: "30px",
                            borderRadius: "10px",
                            padding: "5px",
                        }}
                    />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100024809070267"
                    target="_blank"
                >
                    <FacebookOutlined
                        style={{
                            backgroundColor: "white",
                            fontSize: "30px",
                            borderRadius: "10px",
                            padding: "5px",
                        }}
                    />
                </a>
            </div>
            <div className="text-center text-white">
                <h1>Copyright © Nguyen Thanh</h1>
            </div>
        </div>
    );
};

export default Footer;
