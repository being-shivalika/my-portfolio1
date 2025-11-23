import './About.css'

function About() {
    return (
        <div className="about-section" id='About'>
            <div className="about-container">
                <h1 className='section-heading'>About Me</h1>
                <div className="about-content">
                    <div className='text'>
                        <p>I'm Shivalika, a frontend developer building a solid foundation in HTML, CSS, JavaScript, and React.Over time, I've learned to focus on understanding concepts deeply — how the browser works, how components interact, and how to structure interfaces that are both responsive and maintainable. I don't just follow patterns; I make sure I know why they work.
                        </p>
                        <p>I chose web development because I enjoy creating interfaces that feel clear, smooth, and purposeful. Most of my progress has come from building real projects — reusable components, interactive elements, responsive layouts, and complete small websites. Each project has helped me improve something concrete, whether it's layout structure, state handling, or design consistency.</p>
                        <p>Right now, my goal is to become a dependable frontend developer who can turn ideas into clean, functional web experiences. I'm sharpening my React workflow, improving UI/UX judgment, and learning how to translate client needs into practical solutions. My direction is simple: keep building, keep refining, and grow into someone whose work reflects clarity, reliability, and steady improvement.</p>
                    </div>
                </div>
            </div>
            <div className="about-overlay"></div>
            
        </div>

    );
}
export default About;