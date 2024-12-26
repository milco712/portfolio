const Projects = () => {
  const projects = [
    {
      title: "프로젝트 관리",
      description: "효율적인 프로젝트 진행을 위한 산출물과 일정 관리",
      tags: ["요구사항정의", "WBS", "테스트"],
      image: "https://milco-bucket.s3.ap-northeast-2.amazonaws.com/ma2.png",
      link: "/management",
    },
    {
      title: "서비스 기획",
      description:
        "사용자 중심의 서비스 분석과 관계자 모두가 이해할 수 있는 직관적인 설계",
      tags: ["서비스분석", "화면설계", "웹/앱"],
      image: "https://milco-bucket.s3.ap-northeast-2.amazonaws.com/sp6.png",
      link: "/service",
    },
    {
      title: "개발 프로젝트",
      description:
        "React와 Node.js를 활용한 풀스택 개발 및 MongoDB 기반의 데이터 관리",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://milco-bucket.s3.ap-northeast-2.amazonaws.com/d-main.png",
      link: "/development",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-gray-800">
      <h2 className="mb-10 text-3xl font-bold text-slate-400 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
              >
                자세히 보기 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
