import { VscTerminal } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../data';

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, #09203f 0%, #537895 100%)`,
      }}
    >
      <h3 className="text-center text-white text-3xl tracking-wider font-medium">
        PROJECTS
      </h3>

      <div className="my-12 flex flex-row flex-wrap gap-12 items-center justify-center md:gap-x-24">
        {projects.map((project) => {
          const { id, title, info, techStack, link } = project;
          return (
            <div
              key={id}
              className="card w-96 px-4 py-8 bg-slate-800 text-white border border-slate-500 shadow cursor-pointer hover:scale-105 transition-transform"
            >
              <h3 className="text-center text-xl font-medium tracking-wider">
                {title}{' '}
                {link && (
                  <a href={link} target="_black">
                    <FiExternalLink className="inline-block h-4 w-4" />
                  </a>
                )}
              </h3>
              <div className="card-body mt-4 gap-y-6 py-0 px-4">
                {info.map((point, index) => (
                  <p key={index} className="text-justify">
                    <VscTerminal className="inline-block mr-2 text-justify" />{' '}
                    {point}
                  </p>
                ))}
                <div className="flex flex-wrap align-center justify-center gap-4">
                  {techStack.map((stack, index) => (
                    <span
                      key={index}
                      className="inline-block p-2 text-sm rounded-lg bg-slate-600 text-zinc-100  tracking-widest"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
