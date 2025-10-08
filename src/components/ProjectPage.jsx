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
  const pdf = project.pdf ?? null;
  const case_study = project.case_study ?? null;

  console.log(pdf);


  return (
    <div className = 'p-10 text-quasi-black dark:text-white-back '>
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
              <video className="w-8/12 object-contain rounded-2xl" controls >
                <source src={demo_vid} type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <img src={project.cover} alt="Project cover" className = "w-8/12 rounded-2xl" />
          </div>
        )}
      </div>

      
        <Header text = "BACKGROUND"/>
        <section className = "flex justify-center items-center w-full">
          <div className = "flex-col w-8/12">
            <div >{longer_desc}</div>
            <div className = ' my-5'> Learned how to: </div>
            <WhatILearned learned_arr = {project.learned}/>
          </div>
        </section>
          {case_study ? <Header text = 'CASE STUDY'/>:<Header text = "DETAILS"/>}

          {case_study ?  (
            <div className = "flex justify-center w-full">
              <CaseStudy data = {case_study} present = {present}/>
            </div>

          ):
          
          <div className = 'flex flex-col items-center w-full'>
             <div className = "presentation flex gap-10 justify-center items-center flex-col w-8/12">
              {present.map(({ img, caption }, index) => (
                <section key={index} className="flex items-center gap-5 justify-center">
                  <div className = "text-4xs">{caption}</div>
                  <img src={img} alt={caption} className="w-9/12 shadow border-1 border-gray-back rounded-2xl" />
                </section>
              ))}
              </div>
          </div>
          }
          {pdf && (
            <>
              <Header text="REPORT" />
              <section className="flex justify-center items-center w-full">
                <div className="flex-col w-8/12">
                  <iframe src={pdf} height="600px" width = '100%' className = 'rounded-2xl'/>
                </div>
              </section>
            </>
          )}
        </div>
        

    </div>
  );
}

export function Tag({name}){
  return(
    <div className="bg-gray-200 text-quasi-black rounded-2xl px-3 py-1">
      {name}
    </div>
  )
}

export function Header({text}){
  return(
    <div className="flex items-center gap-2 my-10">
      <span className="font-bold text-2xl text-accent">{text}</span>
      <div className="flex-1 h-px bg-gray-back"></div>
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


export function CaseStudy({ data, present }) {
   return(
      <div className="flex flex-col w-8/12 items-center">
          <CaseStudySection title = 'Overview' text = {data.overview}/>
          <CaseStudySection title = 'Problem' text = {data.problem}/>
          <img src = {data.flaws} className = 'my-5 rounded-2xl'/>

          <div className = 'my-5 w-full'>
            <div className = 'caseStudy_head'>Question </div>
            <section className= "border-2 border-accent text-center p-5 rounded-xl italic">{data.question}</section>
          </div>
         
          <div className = 'my-5'>
            <div className = 'caseStudy_head'>Details</div>
            <div className = "presentation flex gap-10 justify-center items-center flex-col w-full">
                {present.map(({ img, caption }, index) => (
                  <section key={index} className="flex items-center gap-5 justify-center">
                    <div className = "text-4xs">{caption}</div>
                    <img src={img} alt={caption} className="w-9/12 rounded-2xl" />
                  </section>
            ))}
            </div>
          </div>

          <div className = 'my-5'>
            <div className = 'caseStudy_head'>Heuristic Evaluation</div>
            <div className="grid gap-5 md:grid-cols-2">
              {data.heuristics.map((row, i) => (
                <div
                  key={i}
                  className="border border-gray-back rounded-2xl p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-black-back"
                >
                  <div className="font-bold">{row.name}</div>
                  <div className="text-4xs">{row.fix}</div>
                </div>
              ))}
            </div>
          </div>

          <CaseStudySection title = "Results" text = {data.results}/>

          <div className = 'my-5'>
            <div className = 'caseStudy_head'>Takeaways</div>
            <ul>{data.takeaways.map((point, i)=>(
              <li key = {i} className = 'list-decimal'>
                <div className = 'font-bold  py-5'>
                {point.title}
                </div>
                <div>
                {point.desc}
                </div>
              </li>
              
            ))}</ul>
          </div>
        </div>
    )
      

}


export function CaseStudySection({title, text}){
  return(
    <div className = 'my-5'>
    <div className = 'caseStudy_head'>{title}</div>
    <section className="text-4xs">{text}</section>
    </div>
  )
}