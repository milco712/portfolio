import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "../assets/ProjectData";

const Management = () => {
  const [currentIndices, setCurrentIndices] = useState({}); // 각 프로젝트별 상태

  const handleNext = (projectId, docLength) => {
    setCurrentIndices((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === undefined || prev[projectId] >= docLength - 1
          ? 0
          : prev[projectId] + 1,
    }));
  };

  const handlePrev = (projectId, docLength) => {
    setCurrentIndices((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === undefined || prev[projectId] === 0
          ? docLength - 1
          : prev[projectId] - 1,
    }));
  };

  return (
    <div>
      <h2 className="py-12 text-2xl sm:text-3xl font-bold text-slate-800 text-white text-center bg-[#3c7c80]">
        프로젝트/프로덕트 관리
      </h2>
      <div className="mx-auto mt-10 max-w-4xl px-6">
        {projects.map((project) => {
          const currentIdx = currentIndices[project.id] || 0;
          const docLength = project.docus.length;

          return (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md mb-10"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap">
                {/* 텍스트 섹션 */}
                <div className="w-full md:w-1/2 pr-6 text-sm/[2rem] mb-6 md:mb-0">
                  <p className="text-gray-500 mb-4">{project.desc}</p>
                  <p className="text-base/[2rem] font-bold text-gray-700">
                    주요 성과
                  </p>
                  <ul>
                    {project.works.map((work, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="mr-2"
                        />
                        {work}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 이미지 섹션 */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative w-full h-80">
                    <img
                      src={project.docus[currentIdx].image}
                      alt={project.docus[currentIdx].title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-2xl sm:text-4xl font-bold drop-shadow-md">
                        {project.docus[currentIdx].title}
                      </p>
                    </div>
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full px-2.5 py-1 hover:bg-gray-700"
                      onClick={() => handlePrev(project.id, docLength)}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full px-2.5 py-1 hover:bg-gray-700"
                      onClick={() => handleNext(project.id, docLength)}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>

                {/* 태그 섹션 */}
                <div className="text-gray-500 w-full mt-6">
                  <p className="text-base/[2rem] font-bold text-gray-700">
                    주요 기술
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Management;
