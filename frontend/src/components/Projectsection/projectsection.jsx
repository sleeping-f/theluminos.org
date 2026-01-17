import './projectsection.css';

const projects = [
	{
		id: 1,
		name: 'Tonoya',
		description: 'The team behind the Tonoya website demonstrates strong potential and professionalism. Though relatively new, they are energetic, highly motivated, and bring fresh, creative ideas to their work. Their enthusiasm is matched by a high level of commitment, and they have shown clear capability in delivering quality outcomes. With continued dedication, Tonoya has well-positioned for continued growth and success.',
		image: 'tonoya-placeholder.jpg',
		imagePosition: 'left',
		ceo: 'CEO, Tonoya'
	},
	{
		id: 2,
		name: 'Abita Agro',
		description: 'The team behind the Abita Agro website shows considerable promise and a professional approach. While still developing, they are dynamic, driven, and contribute innovative and original ideas to their projects. Their passion is supported by strong dedication, and they have proven their ability to produce high-quality work. Abita Agro is well-positioned for sustained forward momentum and well suited for long-term growth and achievement.',
		image: 'abita-placeholder.jpg',
		imagePosition: 'right',
		ceo: 'CEO, Abita Agro'
	},
	{
		id: 3,
		name: 'Moment',
		description: 'The team behind the Moment website demonstrates exceptional creativity and dedication. They bring innovative solutions and maintain a high standard of quality in their work. Their collaborative approach and attention to detail ensure successful project delivery and sustainable growth in the digital landscape.',
		image: 'moment-placeholder.jpg',
		imagePosition: 'left',
		ceo: 'CEO, Moment'
	}
];

export default function ProjectSection() {
	return (
		<section className="project-section" id="projects">
			<div className="project-container">
				<div className="project-header">
					<h2 className="project-main-title">Projects</h2>
					<p className="project-tagline">
						Everything your business needs to exist,<br />
						operate, and grow in the digital world
					</p>
				</div>

				<div className="projects-list">
					{projects.map((project) => (
						<div 
							key={project.id} 
							className={`project-card project-card--${project.imagePosition}`}
						>
							<div className="project-image">
								<div className="project-image-placeholder">
									{/* Image placeholder */}
								</div>
							</div>
							<div className="project-content">
								<h3 className="project-title">{project.name}</h3>
								<div className="project-description-wrapper">
									<p className="project-description">{project.description}</p>
									<p className="project-ceo">{project.ceo}</p>
								</div>
								<button className="project-explore-btn">
									Explore
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="9 18 15 12 9 6"></polyline>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}