import {projects} from "../projectInfo.js"
import { Link } from "react-router-dom";

export default function Projects(){
    return(
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
    )
}

export function ProjectPreview({id, img_path, img_name, year, desc}){
    return(
        <>
        <Link to = {`/projects/${id}`} className = "cor transform hover:scale-101 transition duration-200">
            <img src = {img_path} alt = {img_name} className = "rounded-2xl"/>
            <div className = " text-black dark:text-white text-2xl font-semibold  p-1 hover:text-accent">{img_name} <span className= " font-light">({year})</span></div>
             <div className="text-black dark:text-white">{desc}</div>
        </Link>
        </>
    )
}



