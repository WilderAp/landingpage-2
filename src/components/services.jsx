import devImg from "../../public/dev.png";
import texts from "../utils/texts.json";

function Services() {
  return (
    <main className="flex flex-col w-auto justify-center relative max-w-6xl mx-auto px-4 sm:px-40">
      {/* 1st Section */}
      <section className="flex flex-col lg:flex-row ">
        <div>
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715285625/EaseTech/hvc7z8uo4osjmjwefr1z.png"
            alt="devImg"
            width={220}
          />
        </div>

        <div
          className="max-w-3xl mx-auto text-center pb-12 md:pb-20 flex flex-col text-start lg:pl-20"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-3xl font-bold mb-7 mt-7 lg:mt-0">
            {texts["section-four"].title}
          </h1>
          <p className="text-xl text-gray-600">{texts["section-four"].body}</p>
        </div>
      </section>
      {/* 2nd Section */}
      <section className="flex flex-col lg:flex-row">
        <div
          className="max-w-3xl mx-auto text-center pb-12 md:pb-20 flex flex-col text-start lg:pr-20"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-3xl font-bold mb-7">
            {texts["section-four"].title2}
          </h1>
          <p className="text-xl text-gray-600">{texts["section-four"].body2}</p>
        </div>

        <div className="mb-10 lg:mb-0">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715285686/EaseTech/tw33hg9ih6rkmup9gbdq.png"
            alt="devImg"
            width={220}
          />
        </div>
      </section>
    </main>
  );
}
export default Services;
