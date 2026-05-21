import {projects} from "../projectInfo.js"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects(){
    return(
        <div className = "flex flex-col">
        <section className = 'flex'>
            <div className = 'title-container px-10 pt-20 gap-5 '>
                <div className = "text-7xl font-medium text-[#7FD0E7] font-sans">
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
                    category = {project.category}
                />
            )) }
            
        </div>
    </div>
    )
}

export function ProjectPreview({id, img_path, img_name, year, desc, category}){
    return(

        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <Link to = {`${id}`} className = "group transform transition duration-200 relative">
                <img src = {img_path} alt = {img_name} className = "rounded-2xl"/>
                <div className = " text-quasi-black dark:text-white text-2xl font-semibold  p-1 group-hover:text-accent">{img_name} <span className= " font-light">({year})</span></div>
                <div className="text-quasi-black dark:text-white">{desc}</div>
                <div className = 'absolute top-2 right-2 rounded-lg px-2 text-sm bg-accent text-white font-medium font-sans'>{category}</div>
            </Link>
        </motion.div>
    )
}



