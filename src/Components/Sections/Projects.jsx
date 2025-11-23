import './Section.css'

function Projects() {
    return (
        <div className="projects-section" id='Projects'>
            <div className="projects-container">
                <h1 className='section-heading'>My Projects</h1>
                <div className="projects-content">
                    <div className='text'>
                        <div className="project-container2">
                    <div className="project-box">
                        <h2>Resume builder</h2>
                    </div>
                    <div className="project-box">
                        <h2>Ecommerce</h2>
                    </div>
                    <div className="project-box">
                        <h2>Website agency</h2>
                    </div>
                    <div className="project-box">
                        <h2>SourSOS</h2>
                    </div>
                </div>
                    </div>
                </div>
            </div>
            <div className="projects-overlay"></div>
            
        </div>

    );
}
export default Projects;