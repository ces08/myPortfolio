import { useParams } from "react-router-dom";
import {projects} from "../projectInfo.js";
import {renderBold} from "../utils.jsx";

export default function ProjectPage() {
  const params = useParams(); 
  const { id } = params;

  console.log(`here: ${id}`);
  const project = projects[id];
  const tags = project.tags;
  const present = project.presentation;
  const demo_vid = project.demo;
  const longer_desc = project.longer_desc;


  return (
    <div className = 'p-10'>
      <div className = 'projectIntro flex items-center justify-between'>
        <div className = "text-5xl font-bold">{project.img_name}</div>
        <div className = 'tagContainer flex gap-5 flex-wrap'>
          {
            tags.map(tag_name => <Tag name={tag_name} key={tag_name} />)
          }
        </div>
      </div>
      <div className = 'my-5 text-4xs'>{project.desc}</div>
      
      <div className = "projects flex flex-col ">
        <div className="projects flex flex-col">
        {project.demo != null ? (
          <>
            <Header text="DEMO" />
            <div className="flex justify-center">
              <video className="w-10/12 object-contain" controls >
                <source src={demo_vid} type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <img src={project.cover} alt="Project cover" class = "w-10/12" />
          </div>
        )}
      </div>

        

        <Header text = "BACKGROUND"/>
        <section className = "project-sub">
          <div className = "flex-col w-10/12">
            <div >{longer_desc}</div>
            <div className = ' my-5'> Learned how to: </div>
            <WhatILearned learned_arr = {project.learned}/>
          </div>
        </section>

        <Header text = "DETAILS"/>
        <div className = "presentation flex gap-10 justify-center items-center flex-col w-full">
              {present.map(({ img, caption }, index) => (
                <section key={index} className="flex items-center gap-5 justify-center w-10/12">
                  <div className = "text-4xs">{caption}</div>
                  <img src={img} alt={caption} className="w-9/12 shadow border-1 border-gray rounded-2xl" />
                </section>
          ))}
          </div>
        </div>
        

    </div>
  );
}

export function Tag({name}){
  return(
    <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-2xl px-3 py-1">
      {name}
    </div>
  )
}

export function Header({text}){
  return(
    <div className="flex items-center gap-2 my-10">
      <span className="font-bold text-2xl text-accent">{text}</span>
      <div className="flex-1 h-px bg-gray"></div>
    </div>
  )
}

export function WhatILearned({learned_arr}){
  return(
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
      {learned_arr.map((text, index) => (
        <li key={index} className="flex items-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-accent flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div>{renderBold(text)}</div>
      </li>

      ))}
    </ul>
  )
}