'use client';

import { useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '감성 분석을 사용한 CPI 예측 모델 개발',
    description: '향후 1년의 CPI 예측을 하는 CNN-LSTM 모델을 구현하였습니다.',
    github: 'https://github.com/junn34/Project_with_CNN_LSTM-',
    details:
      '2005~2025년의 소비자물가지수 관련 뉴스를 크롤링해 감성 분석을 진행했습니다.\n' +
      '품목별 지수 데이터를 모델에 학습시키고, 성능 검증을 거쳐 CNN-LSTM 모델을 설계·구현했습니다.\n' +
      '마지막으로 UI를 적용해 CPI 및 품목별 지수 예측 결과와 감성 분석 결과를 시각적으로 확인할 수 있도록 했습니다.',
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="text-orange-500">My</span> Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-500 transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 inline-flex items-center"
                onClick={(e) => e.stopPropagation()} // 모달 안 열리게
              >
                <Github size={20} className="mr-1" /> GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white text-black p-8 rounded-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="mb-4 whitespace-pre-line">
                {selectedProject.details}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
