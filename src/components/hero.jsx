import texts from "../utils/texts.json";

function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-center mb-20 md:flex-row">
      <div className="md:w-1/2 lg:pl-20 ">
        <div
          id="title"
          className="text-center md:text-left text-4xl font-bold mb-5 mt-10 lg:mt-0"
          style={{ maxWidth: "300px" }}
        >
          <h1>{texts["section-two"].title}</h1>
        </div>

        <div
          className="text-center md:text-left mb-5"
          style={{ maxWidth: "360px" }}
        >
          <h2 className="mb-5">{texts["section-two"].body}</h2>
          <button
            type="button"
            style={{
              backgroundColor: "#4544EF",
              borderRadius: "20px",
              padding: "10px 25px",
              color: "#FFFFFF",
            }}
          >
            <a
              href="mailto:appease.info@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {texts["section-two"].button}
            </a>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 md:mr-10">
        <img
          src={texts["section-two"].image}
          alt="heroImage"
          className="w-full"
        />
      </div>
    </section>
  );
}
export default Hero;
