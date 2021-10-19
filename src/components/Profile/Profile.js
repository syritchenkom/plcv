import React from 'react';

import Typography from '@mui/material/Typography';

import GetAppIcon from '@mui/icons-material/GetApp';
import PersonIcon from '@mui/icons-material/Person';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

import CustomButton from '../Button/Button';
import resumeData from '../../utils/resumeData';
import profileImage from '../../assets/images/profileImage.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import CV from '../../assets/cv/Mykhailo_SYRITCHENKO_CV_2021.pdf';

import './Profile.css';
import { Nav } from 'react-bootstrap';

const Profile = () => {
	const CustomTimelineItem = ({ title, text, link }) => (
		<TimelineItem>
			<CustomTimelineSeparator />
			{/* <TimelineSeparator className={'separator_padding'}>
				<TimelineDot variant={'outlined'} className={'timeline_dot'} />
				<TimelineConnector />
			</TimelineSeparator> */}
			<TimelineContent className="timeline_content">
				{link ? (
					<Typography className="timelineItem_text">
						<span>{title} : </span>
						<Nav.Link href={link} target="_blank" rel="noreferrer">
							{text}
						</Nav.Link>
					</Typography>
				) : (
					<Typography className="timelineItem_text">
						<span>{title} : </span> {text}
					</Typography>
				)}
			</TimelineContent>
		</TimelineItem>
	);

	return (
		<div className="profile container_shadow">
			<div className="profile_name">
				<Typography className="name">{resumeData.name}</Typography>
				<Typography className="title">{resumeData.title}</Typography>
			</div>

			<figure className="profile_image">
				<img src={profileImage} alt="Display Images" />
			</figure>

			<div className="profile_information">
				<CustomTimeline icon={<PersonIcon />}>
					<CustomTimelineItem title="Name" text={resumeData.name} />
					<CustomTimelineItem title="Title" text={resumeData.title} />
					<CustomTimelineItem title="E-mail" text={resumeData.email} />

					{Object.keys(resumeData.socials).map((key) => (
						<CustomTimelineItem
							title={resumeData.socials[key].title}
							key={key}
							text={resumeData.socials[key].text}
							link={resumeData.socials[key].link}
						/>
					))}
				</CustomTimeline>
				<div className="button_container" style={{ display: 'flex' }}>
					<Nav.Link href={CV} target="_blank" rel="noopener noreferrer">
						<CustomButton text={'Download CV'} icon={<GetAppIcon />} />
					</Nav.Link>
				</div>
			</div>
		</div>
	);
};
export default Profile;
