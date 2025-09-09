import "./style.css";
export default function ImpactSection() {
  return (
    <section className="impactSection w-full flex items-center justify-center py-20">
      <div className="impactSectionContainer width90 maxWidth">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12 relative ">
          Impact &{" "}
          <span className="fontCaveat text-[#7c122e]">Achievements</span>
          <span className="block w-16 h-1 bg-[#7c122e] mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="impactTabs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">500+</p>
            <h3 className="text-gray-600 text-xl  font-semibold">
              Volunteers Joined
            </h3>
          </div>
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">
              1,200+
            </p>
            <h3 className="text-gray-600 text-xl  font-semibold">
              Women Trained
            </h3>
          </div>
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">
              3,500+
            </p>
            <h3 className="text-gray-600 text-xl  font-semibold">
              Children Supported
            </h3>
          </div>
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">250+</p>
            <h3 className="text-gray-600 text-xl  font-semibold">
              Legal Awareness Sessions
              <br />
              Conducted
            </h3>
          </div>
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">
              4,800+
            </p>
            <h3 className="text-gray-600 text-xl font-semibold">
              People Reached
            </h3>
          </div>
          <div className="impactTab text-center">
            <p className="fontCaveat text-3xl font-bold text-[#7c122e]">300+</p>
            <h3 className="text-gray-600 text-xl  font-semibold">
              Small Businesses
              <br />
              Supported
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
