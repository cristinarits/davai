import React from "react";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mission */}
          <div>
            <img
              src="https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures//ueban.png"
              alt="Mission Illustration"
              className="w-90 h-auto rounded-xl mb-6 ml-20"
            />
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-fuchsia-800">
                Mission
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Our mission is to build a gamified platform for Russian-speaking school students to break language barriers and unite the Estonian society.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div>
            <img
              src="https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures//ueban2.png"
              alt="Vision Illustration"
              className="w-73 h-auto rounded-xl mb-6 ml-30"
            />
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-fuchsia-800">
                Vision
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Vision is to be the leader in private education, offering services in all languages to educational institutes worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
