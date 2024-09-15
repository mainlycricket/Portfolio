import { VscTerminal } from 'react-icons/vsc';
import { experiences } from '../data';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, #09203f 0%, #4d6e87 100%)`,
      }}
    >
      <h3 className="text-center text-white text-3xl tracking-wider font-medium">
        WORK EXPERIENCE
      </h3>

      <div className="my-12 flex flex-row flex-wrap gap-12 items-center justify-center md:gap-x-24">
        {experiences.map((experience) => {
          const { id, title, company, duration, info, link } = experience;
          return (
            <div
              key={id}
              className="card w-96 px-4 py-8 bg-slate-800 border text-white border-slate-500 shadow cursor-pointer hover:scale-105 transition-transform"
            >
              <h3 className="text-center text-xl font-medium tracking-wider">
                {title}{' '}
                {link && (
                  <a href={link} target="_black">
                    <FiExternalLink className="inline-block h-4 w-4" />
                  </a>
                )}
              </h3>
              <div className="card-body mt-4 py-0 px-4">
                <p className="text-lg text-center">{company}</p>
                <p className="font-light text-center">{duration}</p>
                {info.map((point, index) => (
                  <p key={index}>
                    <VscTerminal className="inline-block mr-2 text-justify" />{' '}
                    {point}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Experience;
