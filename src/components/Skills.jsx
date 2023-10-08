import { skills } from '../data';

const Skills = () => {
  return (
    <section
      className="flex flex-row flex-wrap gap-8 items-center justify-center"
      id="skills"
    >
      {skills.map((skill) => {
        const { id, icon, title, info } = skill;
        return (
          <div key={id} className="card w-64 h-72 bg-base-100 shadow-xl">
            <figure className='mt-8'>{icon}</figure>
            <div className="card-body gap-y-4">
              <h3 className="font-bold text-center">{title}</h3>
              <p className="text-justify font-normal text-sm">{info}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
