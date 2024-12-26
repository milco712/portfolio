import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { sections } from "../assets/ServiceData";

const Service = () => {
  return (
    <div>
      <h2 className="py-12 text-2xl sm:text-3xl font-bold text-slate-800 text-white text-center bg-[#3c7c80]">
        서비스 기획
      </h2>
      <div className="mx-auto mt-10 max-w-4xl px-6">
        {sections.map((section) => (
          <section
            className="bg-white px-6 py-8 rounded-lg shadow-md mb-10"
            key={section.title}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              <FontAwesomeIcon icon={faFeather} className="mr-3" />
              {section.title}
            </h3>
            <div className="text-lg/[2rem] mt-4 mb-8 text-[#4B5563]">
              {section.desc}
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              {section.docus.map((doc, idx) => (
                <div className="w-full" key={idx}>
                  <div className="my-4">
                    <p className="text-gray-700 text-xl font-bold">
                      <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                      {doc.title}
                    </p>
                  </div>
                  <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Service;
