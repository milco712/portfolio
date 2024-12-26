import About from "../components/About";
import TeckStack from "../components/TeckStack";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="bg-[#b4d6d9]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-gray-900 text-left bg-img">
          <h1 className="sm:text-3xl/[3rem] text-2xl/[3rem] font-bold text-[#000]">
            안녕하세요.
            <br />
            기획부터 협업까지 주도하며, <br />
            개발 통찰로 서비스 완성도를 높이는
            <br />
            기획자 김은지 입니다.
          </h1>
        </div>
      </div>
      <About />
      <TeckStack />
      <Projects />
    </>
  );
};

export default Home;
