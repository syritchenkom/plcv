import React from 'react';
import { Typography } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import GetAppIcon from '@material-ui/icons/GetApp';

import CustomButton from '../Button/Button';
import resumeDate from '../../utils/resumeDate';
import CustomTimeline from '../Timeline/Timeline';
import profileImage from '../../assets/images/profileImage.jpg';
import './Profile.css';

const Profile = () => {
	const CustomTimelineItem = ({ title, text, link }) => (
		<TimelineItem>
			<TimelineSeparator className={'separator_padding'}>
				<TimelineDot variant={'outlined'} className={'timeline_dot'} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent className="timeline_content">
				{link ? (
					<Typography className="timelineItem_text">
						<span>{title}:</span>{' '}
						<a href={link} target="_blank">
							{text}
						</a>
					</Typography>
				) : (
					<Typography className="timelineItem_text">
						<span>{title}:</span> {text}
					</Typography>
				)}
			</TimelineContent>
		</TimelineItem>
	);

	return (
		<div className="profile container_shadow">
			<div className="profile_name">
				<Typography className="name">{resumeDate.name}</Typography>
				<Typography className="title">{resumeDate.title}</Typography>

				<figure className="profile_image">
					<img src={profileImage} alt="Display Images" />
				</figure>

				<div className="profile_information">
					<CustomTimeline icon={<PersonOutlineIcon />}>
						<CustomTimelineItem title="Name" text={resumeDate.name} />
						<CustomTimelineItem title="Title" text={resumeDate.title} />
						<CustomTimelineItem title="E-mail" text={resumeDate.email} />

						{Object.keys(resumeDate.socials).map((key) => (
							<CustomTimelineItem
								title={key}
								text={resumeDate.socials[key].text}
								link={resumeDate.socials[key].link}
							/>
						))}
					</CustomTimeline>
					<div className="button_container">
						<CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
