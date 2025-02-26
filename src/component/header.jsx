import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Switch from "react-switch";
import { SpotifyOutlined } from "@ant-design/icons";
import { RU } from "country-flag-icons/react/3x2";
import { VN } from "country-flag-icons/react/1x1";
import { GB } from "country-flag-icons/react/3x2";

const Header = () => {
    const [checked, setChecked] = useState(
        document.body.getAttribute("data-theme") === "dark"
    );

    useEffect(() => {
        document.body.setAttribute("data-theme", checked ? "dark" : "light");
    }, [checked]);

    return (
        <>
            <header
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    textAlign: "center",
                    backgroundColor: "skyblue",
                    position: "relative",
                }}
            >
                {/* Biểu tượng Spotify */}
                <SpotifyOutlined style={{ fontSize: "100px", margin: "20px 0" }} />

                {/* Tên */}
                <span style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Nguyen Dinh Thanh</span>

                {/* Hiệu ứng đánh chữ */}
                <h1>
                    <TypeAnimation
                        sequence={[
                            "I am a dog", 1000,
                            "I am a cat", 1000,
                            "I am a pig", 1000,
                            "I am a cow", 1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "30px", display: "inline-block", fontFamily: "sans-serif" }}
                        repeat={Infinity}
                    />
                </h1>

                {/* Công tắc đổi chủ đề */}
                <Switch
                    checked={checked}
                    onChange={setChecked}
                    offColor="#baaa80"
                    onColor="#353535"
                    className="react-switch mx-auto"
                    width={90}
                    height={40}
                    uncheckedIcon={
                        <span
                            className="iconify"
                            data-icon="twemoji:owl"
                            style={{ display: "block", height: "100%", fontSize: 25, marginLeft: "20px", color: "#353239" }}
                        ></span>
                    }
                    checkedIcon={
                        <span
                            className="iconify"
                            data-icon="noto-v1:sun-with-face"
                            style={{ display: "block", height: "100%", fontSize: 25, marginLeft: "10px", color: "#353239" }}
                        ></span>
                    }
                />

                {/* Quốc kỳ (đặt ở cuối trang) */}
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
                    <VN title="Vietnam" className="flag-icon" style={{ width: "70px", height: "25px", borderRadius: "10px" }} />
                    {/*<RU title="Russia" className="flag-icon" style={{ width: "50px", height: "auto", borderRadius: "10px" }} />*/}
                    {/*<GB title="Great Britain" className="flag-icon" style={{ width: "50px", height: "auto", borderRadius: "10px" }} />*/}
                </div>
            </header>
        </>
    );
};

export default Header;
