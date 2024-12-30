

const Projects = () => {
  const projectsData = [
    {
      title: "NexMarket",
      description: "A fully functional online store with a wide variety of products.",
      photo: "/images/projects/NexMarket.png",
      liveURL: "https://pranavbafna586.github.io/NexMarket/",
      repoURL: "https://github.com/pranavbafna586/NexMarket",
      altText: "An image of NexMarket project"
    },
    {
      title: "Gen-Art",
      description: "AI Image Generator App In React Using OpenAI",
      photo: "/images/projects/AIGEN.png",
      liveURL: "https://genart2024.netlify.app/",
      repoURL: "https://github.com/pranavbafna586/Gen-Art",
      altText: "An image of AI Image Generator project"
    },

    {
      title: "Sizzle Slice",
      description: "A place to enjoy delicious pizzas with easy pickup or delivery.",
      photo: "/images/projects/SizzleSlice.png",
      liveURL: "https://pranavbafna586.github.io/SizzleSlice/",
      repoURL: "https://github.com/pranavbafna586/SizzleSlice",
      altText: "An image of Sizzle Slice project"
    },
    {
      title: "TasteBites",
      description: "A food ordering app to browse, order, and enjoy seamless delivery.",
      photo: "/images/projects/TasteBites.png",
      liveURL: "https://tastebites.netlify.app/",
      repoURL: "https://github.com/pranavbafna586/TasteBites",
      altText: "An image of TasteBites project"
    },
    {
      title: "Employee Management System",
      description: "A task management system for admins and employees to create, monitor, and update tasks, with a simple login process.",
      photo: "/images/projects/EMS.png",
      liveURL: "https://employee-management-system24.netlify.app/",
      repoURL: "https://github.com/pranavbafna586/Employee-Management-System.git",
      altText: "An image of Employee Management System project"
    },
  ]


  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I have worked on a number of projects ... checkout some of my featured projects</p>
      {/* project items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projectsData.map((project) =>
            <div key={crypto.randomUUID()} className='project-card flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'>
              <a href={project.photo} className='mb-4'>
                <img src={project.photo} alt={project.altText} />
              </a>
              <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
              <p className='text-white mt-1'>{project.description}</p>
              {/* btns */}
              <div className="mt-5">
                <a href={project.liveURL}> <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>Live Preview</button></a>
                <a href={project.repoURL}> <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Git Repo</button></a>
              </div>
            </div>
          )
        }
      </div>


    </div>
  );
};

export default Projects;

// {
//   title: "ChatSphere",
//   description: "A chatting app that lets you talk to your friends",
//   photo: "/images/projects/chatsphere.png",
//   liveURL: "https://chatsphere-chatapp.web.app/",
//   repoURL: "https://github.com/preston176/ChatSphere-react"
// },