import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import headshot from "../assets/headshot.jpg"

export default function Profile(){
    return(
        <div className = "flex flex-col justify-center items-center w-full gap-10 my-20">
            <section className = 'flex w-9/12 justify-center items-center gap-10'>
                <img src = {headshot} className = "rounded-2xl w-1/3 shadow"></img>
                <div className = 'flex flex-col gap-5 text-quasi-black dark:text-gray-back'>
                    <div className = 'text-4xl '>Hi, I'm Christine!</div>
                    <div>
                        I'm a third-year student at Stony Brook University studying Computer Science and Applied Mathematics & Statistics.
                        <br/>
                        <br/>
                        I've always loved creating — starting with crafts and drawings, slowly adding details until a project came to life. 
                        That passion led me to software development where I could combine creativity
                        and problem-solving to build tools that make real impacts.
                    
                        <br/>
                        <br/>
                        I've explored a variety of roles (from mobile and web development to machine learning)
                        not only to gain broader perspective and discipline knowledge, but also because <span className = "text-dark-accent font-semibold">I genuinely enjoy stepping 
                        into new challenges</span>. Each experience has taught me something new, 
                        sharpened my skills, and reinforced my drive for building impactful software.
                    
                    </div>
                </div>
            </section>
            <section className = 'flex gap-10 items-center bg-gray-back dark:bg-quasi-black px-10 py-5 shadow rounded-2xl'>
                <div className = "text-center font-semibold text-2xl text-quasi-black dark:text-gray-back" >Get in Touch!</div>
                <div id = 'contactList' className = 'flex flex-col' >
                    <ContactItem faIcon = {faEnvelope} contactInfo = "christinesong08@gmail.com" contactLink = 'mailto:christinesong08@gmail.com'/>
                    <ContactItem faIcon = {faLinkedin} contactInfo = "www.linkedin.com/in/cesong/" contactLink = 'https://www.linkedin.com/in/cesong/'/>
                </div>
            </section>
        </div>
        
        
       
    )
}

function ContactItem({faIcon, contactInfo, contactLink}){
    return(
        <div className = 'contact-box flex gap-2 py-1 items-center hover:scale-105 cursor-pointer'>
            <FontAwesomeIcon icon = {faIcon} className = 'text-accent text-2xl'/>
            <a href = {contactLink} target = '_blank' className = 'text-black-back dark:text-gray-back'>{contactInfo}</a>
        </div>
    )
}

