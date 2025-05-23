import Navbar from './Navbar'
import Profile from './Profile'
import Keyboard from './Keyboard'

export default function Home(){
    return(
        <div className = 'bg-gray-theme'>
            <Navbar/>

            <section className = 'main-container text-left gap-20'>
                <div className = 'title-container'>
                <div className = "title">
                    Hello,<br/>
                    I'm <span className = "text-main">Christine</span>.
                </div>
                <div className = 'subtitle'>
                    Welcome to my portfolio :D
                </div>
                </div>
                <img className = 'w-100 h-100' src = './src/assets/main_chibi.gif'></img>
            </section>
            <section id = 'aboutMe' className = 'main-container flex-col'>
                <div id = 'file-tab' className = 'self-start bg-file-tan px-5 py-3 mx-10 rounded-t-2xl border-4 -mb-1 text-xl font-bold'>About Me</div>
                <div id = 'abt-me-file' className = 'flex items-center justify-center bg-file-tan w-full h-8/10 border-4 rounded-3xl'>
                    <img src = './src/assets/id_card.png' className = ' h-full'/>
                    <div id = 'abtMeNote' className = 'flex flex-col bg-white border-4 w-1/2 h-100 p-10 rounded-lg justify-center'>
                        <h3> Howdy! </h3>
                        <p>I'm a third-year student at SUNY Stony Brook University studying <span className = "bg-sub"> Computer Science</span> and <span className = "bg-sub">Applied Mathematics & Statistics</span>. 
                            I love transforming rough sketches and concepts into functional products, <span className = "bg-sub">animating ideas into enjoyable experiences</span>.  This means I'm always coding away, hoping to develop something that will someday touch another user's life. 
                            <br/><br/>
                            If you catch me during my free time, you will probably find me in my second occupataion: a professional homebody. Doodling, watching anime, reading books, or journaling -- I love learning and providing a physical space for my thoughts.
                        </p>
                    </div>
                </div>
            </section>
            <section id = 'languages' className = 'main-container'>
                <Keyboard/>
            </section>
            
            <Profile/>
            
        </div>
    )
}