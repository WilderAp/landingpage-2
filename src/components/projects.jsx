import texts from "../utils/texts.json";

function Projects() {
  return (
    <main className="">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-14">
        <h1 className="text-5xl font-bold mb-7" style={{ color: "#3030FF" }}>
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <div className="flex flex-col lg:card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-200">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715285861/EaseTech/tdzyuf4eqhv7umxhubnn.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            DEVELOPED TECHNOLOGY PLATFORM FOR DRAG-AND-DROP CREATION OF MOBILE
            APPLICATIONS
          </h2>
          <p>
            Our technology platform revolutionizes mobile application
            development by offering a user-friendly drag-and-drop interface.
            With our intuitive system, users can effortlessly create custom
            mobile applications without needing extensive coding knowledge. This
            innovative platform streamlines the development process, empowering
            individuals and businesses to bring their app ideas to life quickly
            and efficiently. Whether you´re a seasoned developer or a newcomer
            to app development, our platform simplifies the process, allowing
            you to focus on creativity and functionality.
          </p>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-primary">
              Go
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
