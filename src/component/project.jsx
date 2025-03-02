import { Button, Card, Modal } from 'antd';
import { useState } from "react";

const Project = () => {
    const { Meta } = Card;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">
                Project
            </h1>
            <div className="grid grid-cols-3 gap-10 item-center">
                <div >
                    <Card
                        className=" rounded-lg shadow-xl "
                        hoverable
                        style={{ width: 300, height: 200,  backgroundColor: "" }}
                    >
                        <Meta title="Project React" description="" />
                        <Button type="primary" onClick={showModal}>
                            Open demo
                        </Button>
                        <br/>
                    </Card>
                </div>
                <Modal
                    title="Project"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <img
                        src="/img/1.png"
                        alt="Project preview"
                        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
                    />
                    <a
                        href="https://github.com/your-repo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        View on GitHub
                    </a>
                </Modal>
                <div >
                    <Card
                        className=" rounded-lg shadow-xl "
                        hoverable
                        style={{ width: 300, height: 200,  backgroundColor: "" }}
                    >
                        <Meta title="Project React" description="" />
                        <Button type="primary" onClick={showModal}>
                            Open demo
                        </Button>
                        <br/>
                    </Card>
                </div>
                <Modal
                    title="Project"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <img
                        src="/img/1.png"
                        alt="Project preview"
                        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
                    />
                    <a
                        href="https://github.com/your-repo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        View on GitHub
                    </a>
                </Modal>
                <div >
                    <Card
                        className=" rounded-lg shadow-xl "
                        hoverable
                        style={{ width: 300, height: 200,  backgroundColor: "" }}
                    >
                        <Meta title="Project React" description="" />
                        <Button type="primary" onClick={showModal}>
                            Open demo
                        </Button>
                        <br/>
                    </Card>
                </div>
                <Modal
                    title="Project"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <img
                        src="/img/1.png"
                        alt="Project preview"
                        style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
                    />
                    <a
                        href="https://github.com/your-repo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        View on GitHub
                    </a>
                </Modal>
            </div>
        </div>

    );
};

export default Project;
