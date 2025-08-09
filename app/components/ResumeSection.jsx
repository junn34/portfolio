import { ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">Resume</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-500">
              Experience
            </h3>
            <div className="space-y-8">
              {/* <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-white">Developer</h4>
                <p className="text-orange-500 mb-2">회사이름• 2026 - Present</p>
                <p className="text-gray-300"></p>
              </div> */}

              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-white">
                  우리FISA 아카데미
                </h4>
                <p className="text-orange-500 mb-2">• 2025.07 - Present</p>
                <p className="text-gray-300">
                  우리은행에서 진행하는 금융 it 아카데미에서 기술 소양과 금융
                  도메인 지식을 쌓고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-500">
              Education
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-white">
                  Bachelor of Computer Science
                </h4>
                <p className="text-orange-500 mb-2">
                  상명대 컴퓨터과학과 • 2020 - 2026.02
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-500">
              Certification
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-white">정보처리기사</h4>
                <p className="text-orange-500 mb-2">25.06 취득</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Download Resume
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
