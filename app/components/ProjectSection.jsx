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
      'Pytorch를 사용하여 모델을 전반적으로 설계 및 구현하였고, React를 사용해 UI를 적용시켜 예측 결과를 시각화가 가능하게 했습니다.',
  },
  {
    id: 2,
    title: '미정',
    description: '프젝',
    github: 'https://github.com/',
    details: '추후 제작',
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
              <p className="mb-4">{selectedProject.details}</p>
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
