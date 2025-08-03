import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">About</span> Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500">
              <Image
                src="/민증면허증.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">
                Who I Am
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                정년 퇴직까지 기술을 경험하고 싶은 개발자입니다. 매일 새로운
                기술들을 알아가는데 어렵지만 재밌어 하고 있습니다.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                다양한 오픈 소스 기여와 실용성 있는 프로젝트를 진행하는 것이
                목표입니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['React', 'Java', 'Git', 'Linux'].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-center text-gray-300 hover:bg-orange-500 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
