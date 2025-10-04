import {projects} from "../projectInfo.js"
import { Link } from "react-router-dom";

export default function Projects(){
    return(
        <div className = "grid grid-cols-2 gap-10 m-10">

            {projects.map((project)=>(
                <ProjectPreview 
                    key = {project.img_path}
                    img_path = {project.img_path}
                    img_name = {project.img_name}
                    year = {project.year}
                />
            )) }
            
        </div>
    )
}

export function ProjectPreview({img_path, img_name, year}){
    return(
        <>
        <Link to = {`/projects/${img_name}`} className = "cor transform hover:scale-101 transition duration-200">
            <img src = {img_path} alt = {img_name} className = "rounded-2xl"/>
            <div className = "text-2xl font-semibold text-[#494949] bg-gray p-1 hover:text-accent text-center">{img_name} ({year})</div>
        </Link>
        </>
    )
}



