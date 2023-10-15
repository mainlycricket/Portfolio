import { VscTerminal } from 'react-icons/vsc';
import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="p-8">
      <h3 className='text-center text-3xl font-medium'>Work Experience</h3>

      <div className="my-12 flex flex-row flex-wrap gap-8 items-center justify-center">
        {experiences.map((experience) => {
          const { id, title, company, duration, info } = experience;
          return (
            <div key={id} className="card w-96 px-4 py-8 bg-base-100 shadow">
              <h3 className="text-center text-xl font-medium tracking-wider">
                {title}
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
