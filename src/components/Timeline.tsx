import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timeline } from '../data/portfolio';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Experience</h1>
        <VerticalTimeline>
          {timeline.map((item, i) => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              contentStyle={i === 0 ? { background: 'white', color: 'rgb(39, 40, 34)' } : undefined}
              contentArrowStyle={i === 0 ? { borderRight: '7px solid  white' } : undefined}
              date={item.date}
              iconStyle={{ background: '#2f7d5b', color: 'white' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.place}</h4>
              <p>{item.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
