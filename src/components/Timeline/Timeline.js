import React from 'react';

import { Typography } from '@mui/material';

import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot
} from '@mui/lab';

import './Timeline.css';

const CustomTimeline = ({ title, icon, children }) => {
	return (
		<Timeline className={'timeline'}>
			{/* Item Header */}
			<TimelineItem className={'timeline_firstItem'}>
				<TimelineSeparator>
					<TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Typography variant="h6" className={'timeline_headerTitle'}>
						{title}
					</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator />
				<TimelineContent>
					<Typography variant="h6" className={'timeline_header'}>
						{children}
					</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export const CustomTimelineSeparator = () => (
	<TimelineSeparator className={'separator_padding'}>
		<TimelineDot variant={'outlined'} className={'timeline_dot'} />
		<TimelineConnector
		// className={<TimelineConnector /> ? <TimelineConnector /> : null}
		/>
		{/* {index < items.length - 1 && <TimelineConnector />} */}
	</TimelineSeparator>
);
export default CustomTimeline;
