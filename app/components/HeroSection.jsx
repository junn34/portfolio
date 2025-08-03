import { Cpu, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-300">반갑습니다 </span>
            <span className="inline-block animate-bounce text-orange-500">
              <Cpu size={36} />
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">개발자 </span>
            <span className="text-orange-500">배준혁</span>
            <span className="text-white">입니다.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            Good morning, Good evening and Good night
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/junn34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <GithubIcon size={32} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <LinkedinIcon size={32} />
            </a>
            <a
              href="mailto:lucasorjh3412@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
