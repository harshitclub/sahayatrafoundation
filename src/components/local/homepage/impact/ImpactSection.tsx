import "./style.css";

export default function ImpactSection() {
  return (
    <section
      className="impactSection w-full flex items-center justify-center py-20"
      aria-labelledby="impact-heading"
    >
      <div className="impactSectionContainer width90 maxWidth">
        <h2
          id="impact-heading"
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative"
        >
          Impact &{" "}
          <span className="fontCaveat text-[#7c122e]">Achievements</span>
          <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Using definition list for stats */}
        <dl className="impactTabs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="500 plus"
            >
              500+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              Volunteers Joined
            </dt>
          </div>

          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="1200 plus"
            >
              1,200+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              Women Trained
            </dt>
          </div>

          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="3500 plus"
            >
              3,500+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              Children Supported
            </dt>
          </div>

          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="250 plus"
            >
              250+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              Legal Awareness Sessions <br /> Conducted
            </dt>
          </div>

          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="4800 plus"
            >
              4,800+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              People Reached
            </dt>
          </div>

          <div className="impactTab text-center">
            <dd
              className="fontCaveat text-3xl font-bold text-[#7c122e]"
              aria-label="300 plus"
            >
              300+
            </dd>
            <dt className="text-gray-600 text-xl font-semibold">
              Small Businesses <br /> Supported
            </dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
