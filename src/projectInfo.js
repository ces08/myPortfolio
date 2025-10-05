import phreddit_path from "./assets/projects/phreddit_mockup.png";
import nook_path from "./assets/projects/nook_mockup.png";
import flyspy_path from "./assets/projects/flyspy_mockup.png";
import nassau_path from "./assets/projects/publib_mockup.png";


import phreddit_post from "./assets/projects/phreddit/phreddit_post.png";
import phreddit_create_post from "./assets/projects/phreddit/phreddit_create_post.png";
import phreddit_search from "./assets/projects/phreddit/phreddit_search.png";
import phreddit_profile from "./assets/projects/phreddit/phreddit_profile.png";


import flyspy_launch from "./assets/projects/flyspy/flyspy_launch_mock.png";
import flyspy_form from "./assets/projects/flyspy/flyspy_form_mock.png";
import flyspy_home from "./assets/projects/flyspy/flyspy_home_mock.png";


import pubLib_fees from "./assets/projects/videos/pubLib_fees.gif";
import pubLib_home from "./assets/projects/videos/pubLib_home.gif";
import pubLib_calendar from "./assets/projects/videos/pubLib_calendar.gif";
import pubLib_info from "./assets/projects/videos/pubLib_info.gif";
import pubLib_mock from "./assets/projects/pubLib/pubLib_mock.png";

import nook_tracker from "./assets/projects/nook/nook_tracker.png";
import nook_shows from "./assets/projects/nook/nook_shows.png";
import nook_add from "./assets/projects/nook/nook_add.png";
import nook_watchlist from "./assets/projects/nook/nook_watchlist.png";

import report_pdf from "./assets/projects/pubLib/Nassau_PubLib_Report.pdf";



import phreddit_demo from './assets/projects/videos/phreddit_demo.mov';
import flyspy_demo from './assets/projects/videos/flyspy_demo.mov';
import nook_demo from "./assets/projects/videos/nook_demo.mov";



export const projects = {
  phreddit:
    {
      img_name: "Phreddit",
      img_path: phreddit_path,
      year: 2025,
      tags: ["HTML/CSS", "JavaScript", "ReactJS", "Express", "MongoDB", "NodeJS"],
      desc: "A replica of the popular online community platform Reddit.",
      demo: phreddit_demo,

      longer_desc: 
        `
        Phreddit is a clone of the Reddit web app that allows users to
        create, browse, and interact with posts within tight-knit communities.

        This project highlights full-stack development skills, including basic frontend UI/UX design, 
        backend API development, database modeling, and unit testing, while demonstrating the ability 
        to recreate a complex social platform from scratch.
        `,

      learned:
        [
          "Design and implement a full-stack web application from scratch",
          "Build **RESTful APIs** with Node.js and Express",
          "**Structure MongoDB collections** for scalable data storage",
          "Implement secure **user authentication** and session management",
          "Write unit tests for frontend and backend components",
          "Collaborate effectively using **Git for version control** and merging changes",

        ],
        
      presentation: [
        { img: phreddit_post, caption: "Post page: view and interact with posts" },
        { img: phreddit_create_post, caption: "Create Post page: submit new content, add your own flairs" },
        { img: phreddit_search, caption: "Search functionality: find posts and comments easily" },
        { img: phreddit_profile, caption: "User Profile: view and edit your past activity, monitor your reputation"}
      ]
    },
  flyspy: 
    {
      img_name: "FlySpy",
      img_path: flyspy_path,
      year: 2025,
      tags: ["React Native", "TypeScript", "Google Firebase"],
      desc: "A citizen-science app for collecting and sharing field data on D. elegans.",
      longer_desc: `FlySpy empowers users to contribute to scientific research by recording sightings of
                    Drosophila elegans in their local environment. 

                    The app is a translation from the old Google Forms interface, providing an intuitive/familiar experience for submitting and tracking observations.
                    Currently focused in Taiwan, FlySpy is currently collecting real-world data from over 40 users.`,

      learned:[
          "Implement a backend using **Google Firebase**",
          "Translate/parse database entries into Google Sheets using **Apps Script**",
          "Deploy, test, and iteratively update on both **iOS** and **Android** App Stores",
          "Manage secure and persistent **authentication** and verification flows",
          "Build **modular**, scalable architecture",
          "Collaborate **Git version control** and feature branches",
          "Configure and manage **Google API keys** and environment variables",
      ],


      demo: flyspy_demo,
      presentation: [
      { img: flyspy_launch, caption: "Sign in or continue as a guest, available in English and Chinese" },
      { img: flyspy_home, caption: "Keep track of your submissions, learn about the flies' characteristics and read about the mission" },
      { img: flyspy_form, caption: "Record your location via Apple/Google Maps, enable notifications to subscribe to the research progress" },
       
      ]

    },

   publib:
    {
      img_name: "Nassau Public Library",
      img_path: nassau_path,
      year: 2025,
      tags: ["Figma"],
      desc: "A redesigned UI for Nassau County's public library app.",
      
      longer_desc: `The Nassau public libraries serve as a hub for student study sessions, 
                    community gatherings, and lessons for new hobbies. Many patrons rely on the library's 
                    mobile app to access its services, yet the existing user experience limits flexibility and 
                    overwhelms users, demonstrating a need for an improved interface.

                    To approach this redesign, I analyzed other library apps and popular mobile interfaces such as 
                    Instagram, Barnes & Noble, Google Calendar, and Reddit to understand standard navigation layouts, icons, widget placement, and color distribution. 
                    Using these insights, I aimed to reduce unnecessary redirects and simplify information flow.`, 


      learned: [
        "Conduct **heuristic evaluations** to identify usability and accessibility challenges",
        "Redesign mobile interfaces using product design principles for intuitive UX",
        "**Analyze target audiences** to inform design improvements and enhance user experience",
        "Create interactive prototypes in **Figma** to showcase design solutions",
         "Synthesize findings from UX redesigns and heuristic evaluations into a clear, structured **professional report**",
      ],

      
      demo: null,
      cover: pubLib_mock,
      presentation: [
        { img: pubLib_home, caption: "Home page with easy access to library card and decluttered options" },
        { img: pubLib_calendar, caption: "Calendar view showing upcoming library programs with color-coordination and visual grouping" },
        { img: pubLib_fees, caption: "Fee management page highlighting outstanding fines and a visual spread of borrowed books" },
        { img: pubLib_info, caption: "Information page provides hours, contact, and services all in one place" },
      ],
      pdf: report_pdf,
    },
  nook:
    {
      img_name: "Nook",
      img_path: nook_path,
      year: 2024,
      tags: ["HTML/CSS", "Javascript"],
      desc: "A website to organize your shows, soundtracks, and ratings in one place.",
      demo: nook_demo,

      longer_desc: `Nook is a web application designed to consolidate the various aspects of 
          the show experience —-from visuals to audio —- into one place. Users can list their shows, 
          record ratings, and save screenshots and comments of favorite moments, making it easy 
          to organize and revisit media in a visually appealing format.

          Through building Nook, I learned the basics of frontend development, including 
          implementing dynamic functionality with JavaScript and styling with CSS. 
          I also gain experience translating a fun idea into a polished, user-friendly web project that is both functional and engaging.`,


      learned: [
        "Design and implement a **responsive web interface** using **HTML** and **CSS**",
        "Organize and display user data efficiently using **arrays** and **objects**",
        "Build reponsive layouts for different screen sizes via **media queries**",
        "Develop interactive functionality and learn **JavaScript** basics for dynamic content",
      ],

      presentation: [
        { img: nook_tracker, caption: "Record your completed shows and reviews" },
        { img: nook_watchlist, caption: "Enjoy a comprehensive tracker of all your current shows and OSTs" },
        { img: nook_shows, caption: "Keep track of all your documented moments"},
        { img: nook_add, caption: "Create a new post for a specific scene" },
      ]
    },
  
};