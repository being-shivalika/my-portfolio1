import './Section.css'

function Projects() {
    return (
        <div className="projects-section" id='Projects'>
            <div className="projects-container">
                <h1 className='section-heading'>My Projects</h1>
                <div className="projects-content">
                    <div className='text'>
                        <div className="project-container2">
                            <div className="project-box" id='p1'>
                                <h2>Resume builder</h2>
                            </div>
                            <div className="project-box" id='p2'>
                                <h2>Ecommerce store</h2>
                            </div>
                            <div className="project-box" id='p3'>
                                <h2>Website agency</h2>
                            </div>
                            <div className="project-box" id='p4'>
                                <h2>SourSOS</h2>
                            </div>
                        </div>
                        <div className="project-container2">
                            <div className="project-box" id='p5'>
                                <h2>Portfolio</h2>
                            </div>
                            <div className="project-box" id='p6'>
                                <h2>Cafe website</h2>
                            </div>
                            <div className="project-box" id='p7'>
                                <h2>landing page</h2>
                            </div>
                            <div className="project-box" id='p8'>
                                <h2>tutorial</h2>
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