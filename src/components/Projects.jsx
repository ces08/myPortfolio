import {projects} from "../projectInfo.js"
import { Link } from "react-router-dom";

export default function Projects(){
    return(
        <div className = "flex flex-col">
        <section className = 'flex'>
            <div className = 'title-container p-10 gap-5 '>
                <div className = "text-7xl font-semibold text-[#7FD0E7] font-sans">
                    Christine Song
                </div>
                <div className = 'text-3xl text-[#D0D0D1]'>
                    STUDENT DEVELOPER
                </div>
            </div>
        </section>
        <div className = "grid grid-cols-2 gap-10 m-10">

            {Object.entries(projects).map(([id, project])=>(
                <ProjectPreview 
                    key = {id}
                    id = {id}
                    img_path = {project.img_path}
                    img_name = {project.img_name}
                    year = {project.year}
                    desc = {project.desc}
                />
            )) }
            
        </div>
    </div>
    )
}

export function ProjectPreview({id, img_path, img_name, year, desc}){
    return(
        <Link to = {`${id}`} className = "cor transform hover:scale-101 transition duration-200">
            <img src = {img_path} alt = {img_name} className = "rounded-2xl"/>
            <div className = " text-quasi-black dark:text-white text-2xl font-semibold  p-1 hover:text-accent">{img_name} <span className= " font-light">({year})</span></div>
            <div className="text-quasi-black dark:text-white">{desc}</div>
        </Link>
    )
}



