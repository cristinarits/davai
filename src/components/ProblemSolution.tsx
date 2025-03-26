import React from "react";
import { Smile } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-fuchsia-700">
          Problem & Solution
        </h2>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Problem */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 left-4 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
              🟢
            </div>
            <h3 className="text-xl font-bold mb-4 mt-4 text-black">The Problem</h3>
            <p className="text-gray-700">
              Russian-speaking students in Estonia are facing a challenge: Schools are switching entirely to Estonian, and complex academic vocabulary is becoming a huge barrier to success.
            </p>
          </div>

          {/* Icon */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-amber-300 flex items-center justify-center shadow-lg">
              <Smile className="w-12 h-12 text-fuchsia-800" />
            </div>
          </div>

          {/* Solution */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 left-4 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
              🟡
            </div>
            <h3 className="text-xl font-bold mb-4 mt-4 text-black">Our Solution</h3>
            <p className="text-gray-700">
              Our solution? An app that makes learning these difficult words as fun as playing a game. Think Duolingo, but designed specifically for high school subjects like geography and biology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;