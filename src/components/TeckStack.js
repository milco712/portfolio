import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faGoogle,
  faSquareJs,
  faNodeJs,
  faReact,
  faSlack,
  faJira,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFilePowerpoint,
  faFileExcel,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDatabase,
  faCloud,
  faCube,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const TeckStack = () => {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-24 text-gray-800">
        <h2 className="mb-10 text-3xl font-bold text-slate-400 text-center">
          Teck Stack
        </h2>
        <div className="grid sm:grid-cols-3 gap-14 leading-6">
          <div>
            <h3 className="font-bold text-xl pb-5">기획 도구</h3>
            <div className="grid grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faFigma} className="w-[16px]" />
                  <span>Figma</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGoogle} className="w-[16px]" />
                  <span>Google문서</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faFilePowerpoint}
                    className="w-[16px]"
                  />
                  <span>PowerPoint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faFileExcel} className="w-[16px]" />
                  <span>Excel</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl pb-5">개발 스택</h3>
            <div className="grid grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faSquareJs} className="w-[16px]" />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faNodeJs} className="w-[16px]" />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faReact} className="w-[16px]" />
                  <span>React</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faFilePowerpoint}
                    className="w-[16px]"
                  />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faDatabase} className="w-[16px]" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCloud} className="w-[16px]" />
                  <span>Azure</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl pb-5">협업 도구</h3>
            <div className="grid grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faSlack} className="w-[16px]" />
                  <span>Slack</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCube} className="w-[16px]" />
                  <span>Notion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faJira} className="w-[16px]" />
                  <span>Jira</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faTableList} className="w-[16px]" />
                  <span>Redmine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGithub} className="w-[16px]" />
                  <span>Github</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
