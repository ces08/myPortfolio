import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Profile(){
    return(
        <section id = 'profile' className = 'main-container relative'>
                <div id = 'business-card' className = 'bg-white rounded-lg w-100 h-60 flex flex-row justify-center items-center p-10 gap-10 border-4 z-10'>
                    <img src = './src/assets/pfp.png' className = 'w-30 h-30'></img>
                    <div id = 'card-right'>
                        <h4 className = 'text-main font-bold text-xl'>  Christine Song </h4>
                        <p>  B.S in CS and AMS </p>
                        <hr className = 'border-1 text-main my-3'/>
                        <div id = 'contactList' className = 'flex flex-col' >
                            <ContactItem faIcon = {faEnvelope} contactInfo = "christinesong08@gmail.com" contactLink = 'mailto:christinesong08@gmail.com'/>
                            <ContactItem faIcon = {faLinkedin} contactInfo = "www.linkedin.com/in/cesong/" contactLink = 'https://www.linkedin.com/in/cesong/'/>
                            <ContactItem faIcon = {faGithub} contactInfo = "ces08" contactLink = 'https://github.com/ces08'/>
                        </div>
                    </div>
                </div>
                <img src = './src/assets/mouse.png' className = 'w-100 absolute right-0'/>
                <img src = './src/assets/paperclips.png' className = 'w-20 absolute left-100 bottom-20'/>
                <img src = './src/assets/eraser.png' className = 'w-30 absolute left-10 top-30'/>

        </section>
    )
}

function ContactItem({faIcon, contactInfo, contactLink}){
    return(
        <div className = 'contact-box flex gap-2 py-1 items-center hover:scale-105 cursor-pointer'>
            <FontAwesomeIcon icon = {faIcon} className = 'text-main text-2xl'/>
            <a href = {contactLink} target = '_blank' className = '!text-black text-xs '>{contactInfo}</a>
        </div>
    )
}

