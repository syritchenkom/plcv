import React, { useState } from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Grid,
	Grow,
	Tab,
	Tabs,
	Typography
} from '@mui/material';
import './Portfolio.css';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const Portfolio = () => {
	const [tabValue, setTabValue] = useState('All');
	const [projectDialog, setProjectDialog] = useState(false);

	return (
		<>
			{/* Portfolio */}
			<Grid container className="section pb_45 pt_45">
				{/* Title */}
				<Grid item className="section_title mb_20">
					<span></span>
					<h6 className="section_title_text">Portfolio</h6>
				</Grid>

				{/* Tabs */}
				<Grid item xs={12}>
					<Tabs
						value={tabValue}
						indicatorColor={'primary'}
						className="customTabs"
						onChange={(event, newValue) => setTabValue(newValue)}>
						<Tab
							label="All"
							value="All"
							className={
								tabValue === 'All'
									? 'customTabs_item active'
									: 'customTabs_item'
							}
						/>

						{[...new Set(resumeData.projects.map((item) => item.tag))].map(
							(tag) => (
								<Tab
									// here\/
									key={tag}
									label={tag}
									value={tag}
									className={
										tabValue === tag
											? 'customTabs_item active'
											: 'customTabs_item'
									}
								/>
							)
						)}
					</Tabs>
				</Grid>

				{/* Projects */}
				<Grid item xs={12}>
					<Grid container spacing={3}>
						{resumeData.projects.map((project, index) => (
							<>
								{tabValue === project.tag || tabValue === 'All' ? (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										// here \/
										key={project.index}
										//  key={project.title}
									>
										<Grow in timeout={1000}>
											<Card
												className="customCard"
												onClick={() => setProjectDialog(project)}>
												<CardActionArea>
													<CardMedia
														className="customCard_image"
														image={project.image[0]}
														title={project.title}
													/>
													<CardContent>
														<Typography
															variant={'body2'}
															className="customCard_title">
															{project.title}
														</Typography>
														<Typography
															variant="caption"
															className="customCard_caption">
															{project.caption}
														</Typography>
													</CardContent>
												</CardActionArea>
											</Card>
										</Grow>
									</Grid>
								) : null}
							</>
						))}
					</Grid>
				</Grid>

				<Dialog
					// open={projectDialog}
					open={Boolean(projectDialog)}
					onClose={() => setProjectDialog(false)}
					className="projectDialog"
					maxWidth={'lg'} // sm, md. lg, xl
					fullWidth>
					<DialogTitle onClose={() => setProjectDialog(false)}>
						{projectDialog.title}
					</DialogTitle>
					{/* <img
						src={projectDialog.images}
						alt={projectDialog.title}
						className="projectDialog_image"
					/> */}

					<DialogContent style={{ height: '80vh' }}>
						{projectDialog.image && (
							<ImageGallery images={projectDialog.image} />
						)}

						<Typography className="projectDialog_description">
							{projectDialog.description}
						</Typography>
					</DialogContent>
					<DialogActions className="projectDialog_action">
						{projectDialog?.links?.map((link) => (
							<a
								// here\/
								// key={link.link}
								href={link.link}
								target="_blank"
								rel="noopener noreferrer"
								className="projectDialog_icon">
								{link.icon}
							</a>
						))}
					</DialogActions>
				</Dialog>
			</Grid>
		</>
	);
};

export default Portfolio;
