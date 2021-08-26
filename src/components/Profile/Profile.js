import React from 'react';

import { Typography } from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import CustomButton from '../Button/Button';
import resumeData from '../../utils/resumeData';
//import CustomTimeline from '../Timeline/Timeline';
import profileImage from '../../assets/images/profileImage.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';

import './Profile.css';

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
						<a href={link} target="_blank">
							{text}
						</a>
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
				<CustomTimeline icon={<PersonOutlineIcon />}>
					<CustomTimelineItem title="Name" text={resumeData.name} />
					<CustomTimelineItem title="Title" text={resumeData.title} />
					<CustomTimelineItem title="E-mail" text={resumeData.email} />

					{Object.keys(resumeData.socials).map((key) => (
						<CustomTimelineItem
							title={key}
							text={resumeData.socials[key].text}
							link={resumeData.socials[key].link}
						/>
					))}
				</CustomTimeline>
				<div className="button_container" style={{ display: 'flex' }}>
					<CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
