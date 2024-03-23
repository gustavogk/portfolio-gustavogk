import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Gustavo",
                1000,
                "Software Developer",
                1000,
                "Web Developer",
                1000,
                "Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            👋 Olá! Sou Gustavo Carvalho, um desenvolvedor de software
            apaixonado por criar soluções que se destacam pela sua precisão e
            desempenho, com um forte interesse e experiência no desenvolvimento
            front-end. Embora minha trajetória tenha sido mais focada nessa
            área, também contribuí significativamente para projetos de back-end.
            Sou graduado em Ciência da Computação pela UFPI (Universidade
            Federal do Piauí), tendo concluído minha graduação em março de 2024.
            Valorizo muito o aprendizado contínuo e pretendo seguir investindo
            em minha carreira, inclusive com a realização de uma pós-graduação
            em breve.
          </p>
          <div>
            <button className="px-6 py-3 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full rounded-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[320px] h-[320px] lg:w-[320px] lg:h-[320px] relative">
            <Image
              src="/images/profile2.png"
              alt="profile"
              className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
