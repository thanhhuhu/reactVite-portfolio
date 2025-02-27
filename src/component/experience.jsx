import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineSchool } from "react-icons/md";


const Experience = () => {
    return (
        <div className=" h-120 bg-gray-200 flex  px-8">
            <VerticalTimeline >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021-2026"
                    iconStyle={{ background: 'pink', color: 'black' }}
                    icon={<MdOutlineSchool />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                            Graduated of maritime and shipping university
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - 2024"
                    iconStyle={{ background: 'pink', color: 'black' }}
                    icon={<MdOutlineSchool />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                            Learned front-end
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024-2026"
                    iconStyle={{ background: 'pink', color: 'black' }}
                    icon={<MdOutlineSchool />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                            Learned back-end
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Experience;