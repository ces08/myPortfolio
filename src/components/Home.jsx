import Profile from './Profile'
import Navbar from "./Navbar"
export default function Home(){
    return(
        
        <section className = 'flex'>
            <div className = 'title-container absolute bottom-10 p-10 gap-5 '>
                <div className = "text-8xl font-semibold text-[#7FD0E7] font-sans">
                    Christine Song
                </div>
                <div className = 'text-4xl text-[#D0D0D1]'>
                    STUDENT DEVELOPER
                </div>
            </div>
        </section>
            
        
    )
}