import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
    return (
        <div className=" h-200 bg-gray-200 ">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color:'black'}}
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                    lineColor={"black"}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>

                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
export default Experience;