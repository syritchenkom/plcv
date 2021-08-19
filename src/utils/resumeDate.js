import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
	name: 'Mykhailo Syritchenko',
	title: 'Junior frontend developer',

	birthday: '28 December 1989',
	email: 'syritchenko@gmail.com',
	adress: 'Wrocław, Poland',
	phone: '+48(575)308-152',

	socials: {
		Facebook: {
			link: 'https://www.facebook.com/',
			text: 'MyFacebook',
			icon: <FacebookIcon />
		},
		Twitter: {
			link: 'https://www.twitter.com/',
			text: 'MyTwitter',
			icon: <TwitterIcon />
		},
		Linkedin: {
			link: 'https://www.linkedin.com/',
			text: 'MyLinkedIn',
			icon: <LinkedInIcon />
		},
		GitHub: {
			link: 'https://www.github.com/',
			text: 'MyGithub',
			icon: <GitHubIcon />
		}
	}
};
