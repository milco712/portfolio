const About = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-gray-800">
      <h2 className="mb-10 text-3xl font-bold text-slate-400 text-center">
        About Me
      </h2>
      <div className="grid sm:grid-cols-2 gap-8 leading-7">
        <div className="space-y-8">
          <h3 className="font-bold text-xl pt-5">전문성 & 목표</h3>
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">서비스 기획</h4>
              <div>
                사용자 중심의 서비스 기획 및 UX 설계 경험을 보유하고 있으며,
                이를 개발 과정에 효과적으로 접목시킬 수 있습니다.
              </div>
            </div>
            <div className="border-t pt-6">
              <h4 className="font-semibold text-lg mb-2">개발 역량</h4>
              <div>
                풀스택 개발 과정을 통해 프론트엔드와 백엔드 개발 능력을
                갖추었으며, 프로젝트 경험을 보유하고 있습니다.
              </div>
            </div>
            <div className="border-t pt-6">
              <h4 className="font-semibold text-lg mb-2">현재 목표</h4>
              <div>
                기획자의 관점과 개발 지식을 기반으로 팀과 협업하여 효율적인 제품
                개발을 이끌어가는 것을 목표로 하고 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="font-bold text-xl pt-5">경력 사항</h3>
          <div className="flex flex-col space-y-6 h-[380px] overflow-y-auto">
            <div>
              <p className="text-lg font-semibold">
                [개발] 풀스택 개발 과정 수료
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2024.08 - 2024.12 | 동부여성발전센터
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>프론트엔드 실무(React, Javascript, Node.js)</li>
                <li>백엔드 실무(MongoDB, RDBMS)</li>
                <li>클라우드 활용(Azure)</li>
                <li>AI 서비스 활용(Azure Machine Learning - AI Studio)</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">
                [개발] 자바 입문 과정 수료
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2024.07 - 2024.08 | 서초여성인력개발센터
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>자바: 기초문법, 객체지향프로그래밍, 데이터입출력</li>
                <li>소프트웨어공학: 소프트웨어이론, 애플리케이션설계/테스트</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">
                [기획] 헬스케어 앱/웹 서비스 기획 및 운영
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2022.09 - 2024.05 | 이지위드
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>사용자 니즈를 반영한 기능 기획 및 서비스 운영 관리</li>
                <li>스프린트 단위 프로젝트 리딩</li>
                <li>외주 개발팀과 원활한 협업을 위해 업무 조율 및 계약 관리</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">
                [기획] 공공기관 아카이브 관리 시스템 기획
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2020.09 - 2022.09 | 핀노드
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>공공기관의 기록물 관리 요구사항을 정의 및 시스템 기획</li>
                <li>고객사 의견 조율하며 프로젝트 산출물 작성 및 일정 관리</li>
                <li>
                  한국문학번역원, 국립국어원, 대한민국역사박물관, 한국은행
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">
                [기획] 코딩학원 및 돌봄교실 웹/앱 교육 플랫폼 기획
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2018.10 - 2020.04 | 티쓰리엔터테인먼트
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>수학/코딩학습을 위한 교육 플랫폼 기획 및 설계</li>
                <li>학원 선생님을 위한 학생 교육 관리 시스템 기획</li>
                <li>유튜브 사업 확장 및 영상 제작</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold">
                [기획] 매장 직원 웹/앱 교육 플랫폼 기획
              </p>
              <p className="text-sm/[2rem] text-gray-600">
                2017.03 - 2018.08 | 이엠캐스트
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>매장 관리 및 직원 교육을 위한 웹/앱 서비스 기획 및 설계</li>
                <li>
                  서비스 개선을 위해 고객사의 요구사항을 반영하고, 실사용자 문의
                  관리 및 피드백 대응
                </li>
                <li>죠스떡볶이, 아모스, 바닐라코, 할리스</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
