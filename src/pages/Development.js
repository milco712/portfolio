import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Development = () => {
  return (
    <div>
      <h2 className="py-12 text-2xl sm:text-3xl font-bold text-slate-800 text-white text-center bg-[#3c7c80]">
        웹 개발 프로젝트
      </h2>
      <div className="mx-auto mt-10 max-w-4xl p-6">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-lg/[2rem]">여행 플랫폼</p>
          <h2 className="text-5xl font-bold text-gray-800">TiTi</h2>
        </div>
        <div className="mb-10">
          <h3 className="text-xl py-4 font-semibold text-gray-700">
            프로젝트 목표
          </h3>
          <p className="text-gray-600 leading-relaxed">
            함께한 여행을 더 잘 공유하고, 혼자 여행하는 사람들에게 동반자 매칭의
            기회를 제공하며, 복잡한 여행 계획 과정을 단순화하여 여행 전반의
            경험을 개선하는 것을 목표로 합니다.
          </p>
        </div>
        <div className="mb-10">
          <h3 className="text-xl py-4 font-semibold text-gray-700">
            왜 필요했는가?
          </h3>
          <ul className="space-y-4">
            <li className="leading-relaxed">
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                여행의 다양한 시각과 추억의 공유 부족
              </p>
              <div className="ml-6 text-gray-600">
                친구와 여행을 같이 갔어도 각자 느낀 바와 찍은 사진의 분위기는
                서로 다릅니다. <br />
                이를 보완하고자, ‘클립’이라는 그룹을 만들어 서로 초대하고,
                후기를 공유하는 기능을 제공합니다.
              </div>
            </li>
            <li className="leading-relaxed">
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                혼자 여행하는 사람들을 위한 소셜 매칭
              </p>
              <div className="ml-6 text-gray-600">
                혼자 여행할 때 가끔 다른 사람들과 밥 한 끼를 먹거나 함께 여행을
                하고 싶을 때가 있습니다. <br />
                ‘트친 매칭’ 기능으로 매칭된 사람들의 후기와 관심사를 보고, AI로
                궁합을 확인할 수 있습니다. <br />
                서로 매칭된다면 이메일로 연락할 수 있는 기능 제공합니다.
              </div>
            </li>
            <li className="leading-relaxed">
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                복잡한 여행 계획 도우미
              </p>
              <div className="ml-6 text-gray-600">
                여행 계획을 짤 때, 많은 시간을 들여 검색하고 정보를 수집하는
                것에 많은 시간을 투자하게 됩니다. <br />
                지역과 관심사만 입력하면 AI가 맞춤형 여행 일정과 먹거리, 월별
                날씨를 제공하여 여행 계획에 도움을 줍니다.
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-xl py-4 font-semibold text-gray-700">
            사용 기술 스택
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              React
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Meteor
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Node.js
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Azure AI
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Azure Cloud(서버Linux)
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              Atlas(개발DB)
            </span>
            <span className="bg-[#DBEAFE] text-[#1E40AF] px-3 py-1 rounded-full">
              AWS(운영DB)
            </span>
          </div>
          <img
            src="https://milco-bucket.s3.ap-northeast-2.amazonaws.com/dsys.png"
            alt="시스템구성도"
            className="rounded-lg shadow-md my-6"
          />
        </div>
        <div className="mb-10">
          <h3 className="text-xl py-6 font-semibold text-gray-700">
            주요 기능
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-2">
            <div>
              <img
                src="https://milco-bucket.s3.ap-northeast-2.amazonaws.com/dclip.gif"
                alt="클립 공유"
                className="rounded-lg shadow-md"
              />
              <h4 className="text-lg font-medium text-gray-700 mt-3">
                클립 기능
              </h4>
              <p className="text-gray-600">
                클립안에서 같이 여행했던 친구들과 후기를 공유할 수 있습니다.
              </p>
            </div>
            <div>
              <img
                src="https://milco-bucket.s3.ap-northeast-2.amazonaws.com/dkeyword.gif"
                alt="ai키워드"
                className="rounded-lg shadow-md"
              />
              <h4 className="text-lg font-medium text-gray-700 mt-3">
                AI 키워드
              </h4>
              <p className="text-gray-600">
                AI가 후기를 분석해 키워드를 추출하고, 여행 정보를 제공합니다.
              </p>
            </div>
            <div>
              <img
                src="https://milco-bucket.s3.ap-northeast-2.amazonaws.com/dplan.gif"
                alt="ai여행일정"
                className="rounded-lg shadow-md"
              />
              <h4 className="text-lg font-medium text-gray-700 mt-3">
                AI 여행 추천
              </h4>
              <p className="text-gray-600">
                지역과 관심사를 기반으로 여행 일정과 먹거리를 추천받을 수 있고,
                해당 지역의 월별 날씨를 보여줍니다.
              </p>
            </div>
            <div>
              <img
                src="https://milco-bucket.s3.ap-northeast-2.amazonaws.com/dmatch.gif"
                alt="ai키워드"
                className="rounded-lg shadow-md"
              />
              <h4 className="text-lg font-medium text-gray-700 mt-3">
                여행 친구 매칭
              </h4>
              <p className="text-gray-600">
                관심사를 기반해 매칭하고, 매칭된 유저와의 AI궁합이나 여행 후기를
                보고 '좋아요'나 '넘기기'를 할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl py-6 font-semibold text-gray-700">
            개인 기여도
          </h3>
          <p className="mb-2">기간 | 2024.11.11 ~ 12.13</p>
          <p className="mb-2">팀원 | 3명</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              여행후기(목록,검색,상세,등록,수정), 트친찾기, AI 여행 추천
              프론트/백엔드 담당
            </li>
            <li>팀장으로서 일감, 일정, Git 관리</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl py-6 font-semibold text-gray-700">
            결과 및 성과
          </h3>
          <ul className="space-y-4 leading-relaxed">
            <li>
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                React의 렌더링과 비동기 처리의 중요성
              </p>
              <div className="ml-6 text-gray-600">
                초반에 리액트 렌더링 구조와 상태 관리, 비동기 데이터 처리 방식에
                익숙하지 않아 어려움이 많았습니다. 데이터 호출이 UI에 제대로
                반영되지 않거나, 상태 변화에 따라 예상치 못한 렌더링을 겪은 후
                리액트의 동작 방식과 자바스크립트에 대해 더 공부하게 되는 계기가
                되었습니다.
              </div>
            </li>
            <li>
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                개발 과정에서의 문제 해결 능력 향상
              </p>
              <div className="ml-6 text-gray-600">
                비동기 통신에서 발생한 데이터 동기화 문제와, 데이터베이스 스키마
                설계의 오류를 디버깅하며 문제의 원인을 추적하고 해결하는 경험을
                쌓을 수 있었습니다.
              </div>
            </li>
            <li>
              <p className="font-semibold mb-2">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                클라이언트와 서버 간 데이터 흐름의 이해
              </p>
              <div className="ml-6 text-gray-600">
                React, Node.js, MongoDB 각 기술이 어떻게 상호작용하는지를 직접
                경험할 수 있었습니다. 프론트와 백엔드가 데이터를 주고받는 과정을
                이해하고, 이를 통해 서비스의 전체적인 설계와 성능 최적화를
                고민할 수 있었습니다. 이러한 과정은 단순히 기능 구현을 넘어
                시스템 전체를 바라보는 시각을 기르는 데 큰 도움이 되었습니다.
              </div>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed my-6">
            개발에 대한 전반적인 이해를 높일 수 있었을뿐만 아니라, 기술적인
            역량과 협업 역량을 키울 수 있는 기회였습니다. 앞으로 기술적 경험과
            사용자 중심 사고를 겸비한 기획자로 성장하며, 다양한 프로젝트에서
            핵심적인 역할을 수행하고 싶습니다.
          </p>
        </div>
        <div className="text-center">
          <a
            href="https://titiproject.site"
            target="_blank"
            rel="noreferrer"
            className="bg-[#345ba0]/90 text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#345ba0]"
          >
            프로젝트 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Development;
