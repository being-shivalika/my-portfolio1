import './Section.css'

function Contacts() {
    return (
        <div className="contacts-section" id='Contact'>
            <div className="contacts-container">
                <h1 className='section-heading'>Let's Get in Touch</h1>
                <div className="contacts-content">
                    <div className='text'>
                        <div className='socials'>
                            <div className='social' id='linkedin'>Linkedin</div>
                            <div className='social' id='github'>GitHub</div>
                            <div className='social' id='twitter'>Twitter</div>
                            <div className='social' id='email'>Email at-- mehrashivalika8@gmail.com</div>
                            
                        </div>
                        <div className='form'>
                             <form>
                                
                             </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-overlay"></div>
            
        </div>

    );
}
export default Contacts;