import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          <span className="text-orange-500">Get In</span> Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          필요하시면 연락주세요. 언제나 환영합니다.
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="mailto:lucasorjh3"
            className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors duration-200"
          >
            <Mail size={24} />
            <span>lucasorjh3412@gmail.com</span>
          </a>
        </div>

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
        </div>
      </div>
    </section>
  );
}
