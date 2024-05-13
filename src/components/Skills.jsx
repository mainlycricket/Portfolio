import { skills } from '../data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8"
      style={{
        background:
          'linear-gradient(to bottom, #5bd5778c 5%, #68bb81bc 80%, rgba(209,250,229,1) 100%)',
      }}
    >
      <h3 className="text-center text-3xl text-black font-medium">Skills</h3>
      <div className="my-12 flex flex-row flex-wrap gap-8 items-center justify-center">
        {skills.map((skill) => {
          const { id, icon, title, info } = skill;
          return (
            <div
              key={id}
              className="card w-64 h-64 bg-base-100 shadow-xl cursor-pointer hover:scale-110 transition-transform"
            >
              <figure className="mt-8">{icon}</figure>
              <div className="card-body p-6 gap-y-2">
                <h3 className="font-bold text-center">{title}</h3>
                <p className="text-justify font-normal text-sm">{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
