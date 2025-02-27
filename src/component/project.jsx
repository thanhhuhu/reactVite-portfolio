import React from 'react';
import { Card } from 'antd';

const Project = () => {
    const { Meta } = Card;
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-cyan-950">
            <h1 className="text-3xl font-bold mb-6 text-white">
                Project
            </h1>
            <div className="grid grid-cols-3 gap-10 ">
                <Card
                    hoverable
                    style={{ width: 250, height: 200, }}
                    cover={<img alt="" src="img/1.png" />}
                >
                    <Meta title="Project 1" description="https://github.com/thanhhuhu/react-vite-hoidanit" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 250, height: 200, }}
                    cover={<img alt="" src="" />}
                >
                    <Meta title="Project 2" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 250, height: 200, }}
                    cover={<img alt="" src="https://via.placeholder.com/200x150" />}
                >
                    <Meta title="Project 3" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 250, height: 200, textAlign:"center"}}
                    cover={<img alt="" src="https://via.placeholder.com/200x150" />}
                >
                    <Meta title="Project 4" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 250, height: 200, }}
                    cover={<img alt="" src="https://via.placeholder.com/200x150" />}
                >
                    <Meta title="Project 5" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 250, height: 200, }}
                    cover={<img alt="" src="https://via.placeholder.com/200x150" />}
                >
                    <Meta title="Project 6" description="www.instagram.com" />
                </Card>
            </div>
        </div>
    );
};

export default Project;
