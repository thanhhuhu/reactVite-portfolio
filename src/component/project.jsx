import React from 'react'
import {Card} from "antd";

const Project = () => {
    const { Meta } = Card;
    return (
        <div className="h-200">
            <div>
                <span>
                    <h1>Project</h1>
                </span>
            </div>
            <div className="mt-50">
                <div>
                    <Card
                        hoverable
                        style={{ width: 100, height: 40  }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Project;