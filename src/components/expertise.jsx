import texts from "../utils/texts.json";

function Expertise() {
  return (
    <section className="mb-40">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="text-3xl font-bold">{texts["section-three"].title}</h1>
      </div>

      <body id="cards" className="">
        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border h-full">
            <div className="flex items-center gap-4 justify-start w-full ">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF", color: "#4544EF" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <title>svg</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item1.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item1.body}
            </p>
          </div>
          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border h-full">
            <div className="flex items-center gap-4 justify-start w-full">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF", color: "#4544EF" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <title>svg</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item2.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item2.body}
            </p>
          </div>
          {/* 3th item */}
          <div className="relative flex flex-col items-center p-6 py-10 bg-white rounded border h-full">
            <div className="flex items-center gap-4 justify-start w-full">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2  rounded"
                style={{ backgroundColor: "#EAEAFF", color: "#4544EF" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <title>svg</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {texts["section-three"].item3.title}
              </h4>
            </div>
            <p className="text-gray-600 text-start">
              {texts["section-three"].item3.body}
            </p>
          </div>
        </div>
      </body>
    </section>
  );
}
export default Expertise;
