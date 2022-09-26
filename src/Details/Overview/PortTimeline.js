import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function PortTimeline() {
  return (
    <React.Fragment>
      <Timeline sx={{m:0, maxHeight: '100%', overflow: 'auto'}}>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Dec 10 11:20 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Weather Alert: Fog</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Dec 10 11:40 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ship left the bay</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Dec 10 12:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator sx={{height:200}}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>DELAY</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Dec 10 2:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator sx={{height:150}}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>At fueling point</TimelineContent>
        </TimelineItem>
{/* 
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Dec 10 5:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ship reached fueling point</TimelineContent>
        </TimelineItem> */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Dec 10 9:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            
          </TimelineSeparator>
          <TimelineContent>Ship reached destination</TimelineContent>
        </TimelineItem>
      </Timeline>

      
    </React.Fragment>
  );
}