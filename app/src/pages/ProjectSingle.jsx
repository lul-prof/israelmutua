/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';
import {
	FiCalendar,
	FiTag,
	FiLink,
	FiLink2
} from 'react-icons/fi';
import '../css/App.css'

const ProjectSingle = () => {
	const {id} = useParams()
	const [projects,setProjects]=useState(projectsData);
	const project=projects?.find(proj=>proj.id===Number(id))

	useState(()=>{
		console.log(projects);
		
	})
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			
			<div className="single-project ">
				<div className="single-project-header">
					<div className="single-project-header-top font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						<h1>{project?.title}</h1>
					</div>	
					<div className="single-project-header-mid">
						<div className="single-project-header-mid-left font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							<FiCalendar/>
							<p>{project?.ProjectHeader.publishDate}</p>
						</div>
						<div className="single-project-header-mid-right font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							<FiTag/>
							<p>{project?.ProjectHeader.tags}</p>
						</div>
					</div>
				</div>
				<div className="single-project-links text-ternary-dark dark:text-ternary-light mb-2">
					<a href={project?.github} target='_blank' rel='noreferrer'>
					<div className="single-project-links-git">
						<FiLink2/>
						<h3>Github</h3>
					</div>
					</a>
					<a href={project?.url} target='_blank' rel='noreferrer'>
					<div className="single-project-links-live">
						<FiLink/>
						<h3>Live Preview</h3>
					</div>
					</a>
				</div>
				<div className="single-project-img">
					<img src={project?.img} alt="projImage" />
				</div>
				<div className="single-project-tech text-ternary-dark dark:text-ternary-light">
					<p><span>TechStack: </span>{project?.techstacK}</p>
				</div>
				<div className="single-project-descr text-ternary-dark dark:text-ternary-light">
					<p>{project?.description}</p>
				</div>
			</div>
			
		</motion.div>
	);
};

export default ProjectSingle;
