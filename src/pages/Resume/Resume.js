import React from 'react';

import { Grid, Icon, Paper, Typography, TextField } from '@mui/material';

import { TimelineItem, TimelineContent, TimelineDot } from '@mui/lab';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import CustomTimeline, {
	CustomTimelineSeparator
} from '../../components/Timeline/Timeline';

//import CustomTimeline from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import './Resume.css';
import CustomButton from '../../components/Button/Button';

const Resume = () => {
	return (
		<>
			{/* About me */}
			<Grid container className="section pb_45 pt_45">
				<Grid item className="section_title mb_20">
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
			<Grid container className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">Resume</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container className="resume_timeline">
						{/* Experiences */}
						<Grid item xs={12} md={6}>
							<CustomTimeline title="Work Experience" icon={<WorkIcon />}>
								{resumeData.experiences.map((experience) => (
									<TimelineItem key={experience.title}>
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
									<TimelineItem key={education.title}>
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
			<Grid container className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">My Services</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid
						container
						spacing={3}
						justifyContent="space-around"
						className="service-item">
						{resumeData.services.map((service) => (
							<Grid item xs={12} sm={6} md={3} key={service.title}>
								<div className="service">
									<Icon className="service_icon">{service.icon}</Icon>
									<Typography className="service_title" variant="h6">
										{service.title}
									</Typography>
									<Typography className="service_description" variant="body2">
										{service.description}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			{/* Skills */}
			<Grid container className="section graybg pb_45 pt_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">My Skills</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container justify="space-between" spacing={3}>
						{resumeData.skills.map((skill) => (
							<Grid item xs={12} sm={6} md={3} key={skill.title}>
								<Paper elevation={0} className="skill">
									<Typography variant="h6" className="skill_title">
										{skill.title}
									</Typography>
									{skill.description.map((element) => (
										<Typography
											variant="body2"
											className="skill_description"
											key={element}>
											<TimelineDot
												variant={'outlined'}
												className="timeline_dot"
											/>
											{element}
										</Typography>
									))}
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			{/* Contact */}
			<Grid container spacing={6} className="section pt_45 pb_45">
				{/* Contact form */}
				<Grid item xs={12} lg={7}>
					<Grid container>
						<Grid item className="section_title mb_30">
							<span></span>
							<h6 className="section_title_text">Contact Form</h6>
						</Grid>

						<Grid item xs={12}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										name="name"
										label="Name"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										name="email"
										label="E-mail"
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										name="message"
										label="Message"
										multiline
										rows={4}
										variant="standard"
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomButton text="Submit" />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				{/* Contact information */}
				<Grid item xs={12} lg={5}>
					<Grid container>
						<Grid item className="section_title mb_30">
							<span></span>
							<h6 className="section_title_text">Contact Informatoin</h6>
						</Grid>

						<Grid item xs={12}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Typography className="contactInfo_item">
										<span>Adress: </span> {resumeData.adress}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography className="contactInfo_item">
										<span>Phone: </span> {resumeData.phone}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography className="contactInfo_item">
										<span>E-mail: </span> {resumeData.email}
									</Typography>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={12}>
							<Grid container className="ccontactInfo_socialsContainer">
								{Object.keys(resumeData.socials).map((key) => (
									<Grid item className="contactInfo_social" key={key}>
										<a href={resumeData.socials[key].link}>
											{resumeData.socials[key].icon}
										</a>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Resume;
