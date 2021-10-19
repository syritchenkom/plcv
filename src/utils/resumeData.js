import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const resumeData = {
	name: 'Mykhailo Syritchenko',
	title: 'Junior frontend developer',

	birthday: '28 December 1989',
	email: 'syritchenko@gmail.com',
	adress: 'Wrocław, Poland',
	phone: '+48(575)308-152',

	socials: [
		{
			link: 'https://www.facebook.com/michael.syritchenko',
			text: 'My FacebookLink',
			title: 'Facebook',
			icon: <FacebookIcon />
		},
		{
			link: 'https://t.me/syritchenkom',
			text: 'My TelegramLink',
			title: 'Telegram',
			icon: <TelegramIcon />
		},
		{
			link: 'https://www.linkedin.com/in/syritchenko/',
			text: 'My LinkedInLink',
			title: 'LinkeDin',
			icon: <LinkedInIcon />
		},
		{
			link: 'https://github.com/syritchenkom',
			text: 'My GithubLink',
			title: 'GitHub',
			icon: <GitHubIcon />
		}
	],

	about:
		'Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n \n Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.',

	experiences: [
		{
			title: 'Work 1',
			date: '2018 - Present',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		},
		{
			title: 'Work 2',
			date: 'Aug 2014 - Sept 2018',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		},
		{
			title: 'Work 3',
			date: '2014 - 2015',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		}
	],

	educations: [
		{
			title: 'Education 1',
			date: '2018 - Present',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		},
		{
			title: 'Education 2',
			date: 'Aug 2014 - Sept 2018',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		},
		{
			title: 'Education 3',
			date: '2014 - 2015',
			description:
				'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
		}
	],

	services: [
		{
			icon: <WebIcon />,
			title: 'Web Development',
			description: 'I have been working on web design for 10 years.'
		},
		{
			icon: <AssignmentOutlinedIcon />,
			title: 'Branding Identity',
			description: 'We will make you a brand that is catchy and leaves a trace.'
		},
		{
			icon: <WebIcon />,
			title: 'Illustrator',
			description: 'I have been working on illustration design for 6 years.'
		}
	],

	skills: [
		{
			title: 'FRONT-END',
			description: [
				'ReactJS',
				'JavaScript',
				'TypeScript',
				'Bootstrap',
				'Material UI'
			]
		},
		{
			title: 'BACK-END',
			description: ['NodeJS', 'Java', 'Python', 'Solidity']
		},
		{
			title: 'DATABASES',
			description: ['Firebase', 'Ms SQl Server', 'MySQL', 'MongoDB']
		},
		{
			title: 'SOURCE CONTROL',
			description: ['Git', 'GitHub', 'SCRUM/Agile']
		}
	],

	projects: [
		{
			tag: 'React',
			image: [
				'https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg',
				'https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg'
			],
			title: 'React Project 1',
			caption: 'A short description',
			description: 'This is my project description. Please fill it in.',
			links: [
				{ link: 'https://www.google.com/', icon: <YouTubeIcon /> },
				{ link: 'https://www.google.com/', icon: <GitHubIcon /> },
				{ link: 'https://www.google.com/', icon: <LanguageIcon /> }
			]
		},
		{
			tag: 'React',
			image: [
				'https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg'
			],
			title: 'React Project 2',
			caption: 'A short description',
			description: 'This is my project description. Please fill it in.',
			links: [
				{ link: 'https://www.google.com/', icon: <YouTubeIcon /> },
				{ link: 'https://www.google.com/', icon: <GitHubIcon /> },
				{ link: 'https://www.google.com/', icon: <LanguageIcon /> }
			]
		},
		{
			tag: 'Python',
			image: [
				'https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg'
			],
			title: 'Python Project 1',
			caption: 'A short description',
			description: 'This is my project description. Please fill it in.',
			links: [
				{ link: 'https://www.google.com/', icon: <YouTubeIcon /> },
				{ link: 'https://www.google.com/', icon: <GitHubIcon /> },
				{ link: 'https://www.google.com/', icon: <LanguageIcon /> }
			]
		},
		{
			tag: 'Java',
			image: [
				'https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg'
			],
			title: 'Java Project 1',
			caption: 'A short description',
			description: 'This is my project description. Please fill it in.',
			links: [
				{ link: 'https://www.google.com/', icon: <YouTubeIcon /> },
				{ link: 'https://www.google.com/', icon: <GitHubIcon /> },
				{ link: 'https://www.google.com/', icon: <LanguageIcon /> }
			]
		}
	]
};
export default resumeData;
