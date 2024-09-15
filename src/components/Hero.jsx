import hero from '../assets/hero.svg';
import { PiHandWavingFill } from 'react-icons/pi';
import { VscTerminal } from 'react-icons/vsc';
import { socials } from '../data';

const Hero = () => {
  return (
    <section className="p-4 text-black lg:p-12" id="home"
    style={{
      background:
        'linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)',
    }}>
      <article className="flex overflow-hidden justify-between">
        {/* INFO */}
        <div className="flex flex-col ml-12 mt-12 gap-y-4">
          <div className="flex">
            <h2 className="text-4xl font-bold">Hello!</h2>
            <PiHandWavingFill className="text-4xl text-amber-400 ml-4" />
          </div>
          <div className="flex flex-col gap-y-2 text-lg">
            <h3 className="mb-4 text-4xl font-bold">
              I'm <span className="italic">Tushar</span>
            </h3>
            <p className="mt-12 sm:mt-4">
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
          {/* SOCIALS */}
          <div className="flex justify-center gap-x-8 sm:justify-start mt-12 sm:mt-4">
            {socials.map((social) => {
              const { id, icon, url, text } = social;
              return (
                <div key={id}>
                  <div className="tooltip tooltip-top md:tooltip-bottom" data-tip={text}>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </div>
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
