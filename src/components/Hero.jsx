import hero from '../assets/hero.svg';
import { PiHandWavingFill } from 'react-icons/pi';
import { VscTerminal } from 'react-icons/vsc';
import { socials } from '../data';

const Hero = () => {
  return (
    <section className="p-12 bg-emerald-100" id="home">
      <article className="flex flex-wrap justify-between">
        {/* INFO */}
        <div className="flex flex-col ml-12 mt-12 gap-y-4">
          <div className="flex">
            <h2 className="text-4xl font-bold">Hello!</h2>
            <PiHandWavingFill className="text-4xl text-amber-400 ml-4" />
          </div>
          <div className="flex flex-col gap-y-2 text-lg">
            <h3 className="mb-4 text-4xl font-bold">
              I'm <span className="text-emerald-600">Tushar</span>
            </h3>
            <p className="mt-4">
              <VscTerminal className="inline-block font-bold mr-2" />
              Computer Science Student
            </p>
            <p>
              <VscTerminal className="inline-block font-bold mr-2" />
              JavaScript Developer
            </p>
            <p>
              <VscTerminal className="inline-block font-bold mr-2" />
              Python Programmer
            </p>
            <p>
              <VscTerminal className="inline-block font-bold mr-2" />
              Cricket Enthusiast
            </p>
          </div>
          <div className='flex gap-x-4 mt-4'>
            {socials.map((social) => {
              const { id, icon, url } = social;
              return (
                <div key={id}>
                  <a href={url} target="_blank">
                    {icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* IMAGE */}
        <div className="hidden lg:flex">
          <img src={hero} height="600" width="600" />
        </div>
      </article>
    </section>
  );
};
export default Hero;
