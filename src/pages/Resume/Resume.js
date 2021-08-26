import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import CustomTimeline, {
	CustomTimelineSeparator
} from '../../components/Timeline/Timeline';

//import CustomTimeline from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import './Resume.css';

const Resume = () => {
	return (
		<>
			{/* About me */}
			<Grid container className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">About me</h6>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body2" className="aboutme_text">
						{resumeData.about}
					</Typography>
				</Grid>
			</Grid>

			{/* Education and experiences */}
			<Grid container className="section">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">Resume</h6>
				</Grid>

				<Grid iteem xs={12}>
					<Grid container className="resume_timeline">
						{/* Experiences */}
						<Grid item xs={12} md={6}>
							<CustomTimeline title="Work Experience" icon={<WorkIcon />}>
								{resumeData.experiences.map((experience) => (
									<TimelineItem>
										<CustomTimelineSeparator />
										<TimelineContent className="timeline_content">
											<Typography className="timeline_title">
												{experience.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{experience.date}
											</Typography>
											<Typography
												vaiant="body2"
												className="timeline_description">
												{experience.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>

						{/* Education */}
						<Grid item xs={12} md={6}>
							<CustomTimeline
								title="Education Experience"
								icon={<SchoolIcon />}>
								{resumeData.educations.map((education) => (
									<TimelineItem>
										<CustomTimelineSeparator />
										<TimelineContent className="timeline_content">
											<Typography className="timeline_title">
												{education.title}
											</Typography>
											<Typography variant="caption" className="timeline_date">
												{education.date}
											</Typography>
											<Typography
												vaiant="body2"
												className="timeline_description">
												{education.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Services */}
			<Grid container className="section"></Grid>

			{/* Skills */}
			<Grid container className="section"></Grid>

			{/* Contact */}
			<Grid container className="section"></Grid>
		</>
	);
};

export default Resume;
