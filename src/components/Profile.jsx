import headshot from "../assets/headshot.jpg"
import { infoCards } from '../helpers/profileInfo'

export default function Profile(){
    return(
        <div className = "flex flex-col justify-center items-center w-full h-10/12 gap-10 my-20">
            <section className = 'flex w-10/12 justify-center items-center gap-10'>
                <img src = {headshot} className = "rounded-2xl w-1/4 object-contain shadow"></img>
                <div className = 'flex flex-col gap-5 text-quasi-black dark:text-gray-back'>
                    <div className = 'text-4xl '>Hi, I'm Christine!</div>
                    <InfoCards />
                    <div className = 'flex flex-col justify-center items-center'>
                        My journey in computer science started with nothing but the goal of recreating Wordle, armed with Python turtle graphics.
                        When it finally worked, I remember thinking: 
                        
                        <span className = 'italic text-dark-accent dark:text-accent text-lg tracking-wider font-semibold'>"Wait, I can build anything!"</span>

                        That euphoria never really subsided. Years later, I am drawn to the people behind the problems we solve, and I love developing things that 
                        have the potential to touch people's lives, whether that's a polished application 
                        or an experimental UI prototype.
                        <br/>
                        <br/>
                        Away from the keyboard, you'll find me drawing, reading, or hunting down good desserts ;) 
                    </div>
                </div>
            </section>

            
        
        </div>
        
        
       
    )
}
function InfoCards(){

    return(
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            {infoCards.map((card) => {
                const Icon = card.icon;
                return(
                    <div
                        key={card.label}
                        className={`bg-white dark:bg-black-back rounded-lg p-3 flex items-start gap-2 border border-gray-200 dark:border-white/80`}
                    >
                        <div className={`bg-accent rounded-lg w-10 h-10 flex items-center justify-center text-xl flex-shrink-0`}>
                            <Icon className = 'w-6 h-6 dark:text-black-back'/>
                        </div>
                        <div>
                        <p className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-400 mb-0.5">
                            {card.label}
                        </p>
                        <p className="text-sm font-semibold text-quasi-black dark:text-gray-back">
                            {card.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{card.sub}</p>
                        </div>
                    </div>
                )}
            )}
            
        </section>
    )
}
