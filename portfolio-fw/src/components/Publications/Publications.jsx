import React, { useState } from "react";

const publications = [
  // JOURNAL PAPERS
  {
    id: 1,
    type: "journal",
    title:
      "Insights from computational analysis on novel Lead–Free FrGeCl3 perovskite solar cell using DFT and SCAPS-1D",
    authors:
      "M.S. Rahman, A.K. Datta, S. Islam, M. M. Hasan, U. Das, M. A. Sayed, M.F. Wahid, A. Ghosh, D. D. Ria",
    venue: "Inorganic Chemistry Communications, 2024",
    doi: "https://doi.org/10.1016/j.inoche.2024.113578",
    imageUrl: "/images/Journal-1Solar.jpg",
    abstract:
      "This study investigates lead-free cubic perovskite FrGeCl₃ for photovoltaic applications using DFT and SCAPS-1D simulations. The material showed thermodynamic stability and promising opto-electronic properties. Optimized device configuration with CuSCN/FrGeCl₃/ZnSe achieved a high PCE of 29.88%. The impact of layer thickness, defect densities, doping, and parasitic resistance was analyzed. Results suggest FrGeCl₃ is a strong candidate for future perovskite solar cells.",
  },
  {
    id: 2,
    type: "journal",
    title:
      "Performance Enhancement of Lead-Free CsSnI₃ Perovskite Solar Cell: Design and Simulation With Different Electron Transport Layers",
    authors:
      "M.F. Wahid, M. S. Rahman, N. Ahmed, A. A. Mamun, M. N. Howlader, T. Paul, M. M. R. Tareq, M. S. Rahman, M. M. Rahman",
    venue: "IEEE Access, 2024",
    doi: "https://doi.org/10.1109/ACCESS.2024.3352444",
    imageUrl: "/images/Journal-2SolarCell.jpg",
    abstract:
      "This study explores CsSnI₃-based lead-free perovskite solar cells using SCAPS-1D simulations to optimize device performance. Different ETLs (WS₂, ZnSe, C₆₀, PCBM) and P3HT as the HTL were analyzed for their impact on photovoltaic metrics. The highest PCE achieved was 31.63% with WS₂. Effects of layer thickness, doping, defects, and interface properties were also investigated. The findings provide valuable insights for enhancing CsSnI₃ PSC efficiency and commercial potential.",
  },
  {
    id: 3,
    type: "journal",
    title:
      "Cesarean Section Classification Using Machine Learning With Feature Selection, Data Balancing, and Explainability",
    authors: "N. Sultan, M. Hasan, M.F. Wahid, H. Saha, A. Habib",
    venue: "IEEE Access, 2023",
    doi: "https://doi.org/10.1109/ACCESS.2023.3303342",
    imageUrl: "/images/Journal-3cesarean.jpg",
    abstract:
      "This study addresses class imbalance and noise in a C-section dataset with 692 cesarean and 5465 non-cesarean samples across four hospitals. A robust preprocessing pipeline was developed to handle missing values, outliers, and feature scaling. A novel ensemble model was proposed, achieving 96–99% accuracy across different data volumes. Key features influencing C-section decisions include Episiotomy, maternal age, and fetal intrapartum pH.",
  },

  // CONFERENCE PAPERS
  {
    id: 4,
    type: "conference",
    title:
      "A Theoretical Study on Non-Leaded Sr₃NCl₃ Perovskite through SCAPS-1D Using DFT-Derived Properties",
    authors: "M. S. Rahman, A. K. Datta, M. F. Wahid",
    venue: "ICCCNT 2024, Kamand, India",
    doi: "https://doi.org/10.1109/ICCCNT61001.2024.10725338",
    imageUrl:
      "/images/Conference-1Scaps-1D.jpg",
    abstract:
      "This study explores the potential of Sr₃NCl₃ as a next-generation solar cell absorber using DFT and SCAPS-1D simulation. A device structure with SnS₂ (ETL) and Spiro-OMeTAD (HTL) was proposed and optimized by tuning absorber thickness, defect density, and other parameters. The simulation yielded a VOC of 0.84 V, JSC of 38.39 mA/cm², FF of 74.09%, and PCE of 23.96%. These findings highlight Sr₃NCl₃’s promise in efficient photovoltaic applications..",
  },
  {
    id: 5,
    type: "conference",
    title:
      "Design of Transformer Theft Prevention System Utilizing an Integrated Sensor Network and Real-Time Alerting",
    authors: "M. R. Hoshen, A. Mimi Choity, M. F. Wahid",
    venue: "I-SMAC 2024, Kirtipur, Nepal",
    doi: "https://doi.org/10.1109/I-SMAC61858.2024.10714787",
    imageUrl:
      "/images/Conference-2Theft.png",
    abstract:
      "This paper proposes an intelligent monitoring system to prevent transformer theft, especially in remote areas where manual inspection is difficult. It integrates sensors (wire-cut, accelerometer, pressure, proximity) and a cellular module within the control box. On detecting anomalies, it alerts authorities via SMS and calls. The system runs on mains power with battery backup and offers maintenance mode through SMS commands.",
  },
  {
    id: 6,
    type: "conference",
    title:
      "Computational Evaluation of Lead Free MoSe₂-Based Thin Film Solar Cell for Enhanced Photovoltaic Performance",
    authors: "M. S. Rahman, U. Das, M. A. K. Mia, M. F. Wahid",
    venue: "iCACCECSS 2024, Dhaka, Bangladesh",
    doi: "https://doi.org/10.1109/iCACCESS61735.2024.10499537",
    imageUrl:
      "/images/Conference-3Solar.jpg",
    abstract:
      "This study investigates Molybdenum Diselenide (MoSe₂) as a lead-free absorber material for eco-friendly solar cells. DFT analysis shows a bandgap of 1.22 eV, supporting its photovoltaic suitability. A new device design using MoSe₂ with V₂O₅ (HTL), WS₂ (ETL), and FTO was simulated in SCAPS-1D. The optimized structure achieved a PCE of 32.01%, with Voc of 0.88 V, Jsc of 42.80 mA/cm², and FF of 85.53%, highlighting MoSe₂'s potential in efficient solar cell applications.",
  },
  {
    id: 7,
    type: "conference",
    title:
      "Numerical Investigation of Lead-Free CH₃NH₃SnI₃ Perovskite Solar Cell for Photovoltaic Performance Improvement using SCAPS-1D",
    authors: "U. Das, M. S. Rahman, S. Paul, B. K. Paul, M. F. Wahid",
    venue: "ACCECSS 2024, Dhaka, Bangladesh",
    doi: "https://doi.org/10.1109/iCACCESS61735.2024.10499601",
    imageUrl:
      "/images/Conference-4Solar.jpg",
    abstract:
      "This study simulates and optimizes a lead-free CH₃NH₃SnI₃-based perovskite solar cell using SCAPS-1D. The proposed Al/ITO/ZnO/CH₃NH₃SnI₃/Cu₂O/Ni structure demonstrates eco-friendly properties and strong photovoltaic performance. Effects of layer thickness, doping, temperature, and defect concentrations were analyzed. The optimized cell achieved a PCE of 29.00%, Voc of 1.06 V, Jsc of 34.00 mA/cm², and FF of 80.49%, highlighting its potential in efficient solar technologies..",
  },
];

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [activeType, setActiveType] = useState("journal");

  function truncateWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  }

  const filteredPublications = publications.filter(
    (pub) => pub.type === activeType
  );

  return (
    <section className=" max-w-5xl mx-auto mt-16">
      <div className="flex gap-2 mb-8">
        <img src="/sublogo1.svg" alt="sublogo" />
        <h1 className="text-2xl lg:font-medium text-gray-900 dark:text-white">
          Publications
        </h1>
      </div>
      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveType("journal")}
          className={`px-4 py-2 rounded ${
            activeType === "journal"
              ? "bg-yellow-500 text-black"
              : "bg-base-200 dark:bg-[#26393a] text-gray-600 dark:text-gray-300 border"
          }`}
        >
          Journal Papers
        </button>
        <button
          onClick={() => setActiveType("conference")}
          className={`px-4 py-2 rounded ${
            activeType === "conference"
              ? "bg-yellow-500 text-black"
              : "bg-base-200 dark:bg-[#26393a] text-gray-600 dark:text-gray-300 border"
          }`}
        >
          Conference Papers
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredPublications.map((pub) => (
          <div
            key={pub.id}
            className="overflow-hidden bg-base-200 dark:bg-[#26393a] hover:scale-105 transition-transform rounded-xl dark:border dark:border-[#234748] shadow-lg border border-gray-300"
          >
            <div className="h-2/5">
            <img
              src={pub.imageUrl}
              alt="publication"
              className="w-full p-2 h-40 rounded-t-2xl"
            />
            </div>
            <div className="p-4 h-3/5 mt-4">
              <h3 className="text-lg text-gray-800 dark:text-gray-200 uppercase">
                {truncateWords(pub.title, 8)}
              </h3>
              <button
                className="text-sm mt-2 cursor-pointer  text-yellow-500"
                onClick={() => setSelectedPublication(pub)}
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-4">
          {/* <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4 px-8 relative dark:border dark:border-[#234748] shadow-lg border border-gray-300 overflow-y-auto"> */}
          <div className="bg-base-200 dark:bg-[#26393a] rounded-xl w-3/4 h-3/4  p-8  overflow-y-auto relative dark:border dark:border-[#234748] shadow-lg border border-gray-300">
            <button
              className="absolute top-0 right-2 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-yellow-500"
              onClick={() => setSelectedPublication(null)}
            >
              &times;
            </button>
            {/* <div className="flex justify-center items-center md:flex-row gap-8 h-full"> */}
            <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
              {/* <img
                src={selectedPublication.imageUrl}
                alt={selectedPublication.title}
                // className="md:w-1/2 object-cover rounded mb-4"
                className="h-95 md:w-1/2 object-contain rounded mb-4"
              /> */}
              
               <img
                  src={selectedPublication.imageUrl}
                  alt={selectedPublication.title}
                  // className=" rounded mb-4 h-70"
                  className="w-full md:w-1/3 object-contain rounded mb-4"
                />
              {/* <div className="flex flex-col overflow-y-auto h-95 w-3/5"> */}
              <div className="flex flex-col  space-y-2  max-h-80">

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {selectedPublication.title}
                </h3>
                <p className="mb-3 font-medium text-gray-600 dark:text-gray-300">
                  Authors: {selectedPublication.authors}
                </p>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  Venue: {selectedPublication.venue}
                </p>
                <p className="mb-3 text-gray-600 dark:text-gray-300">
                  DOI:{" "}
                  <a
                    href={selectedPublication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {selectedPublication.doi}
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6">
                  {selectedPublication.abstract}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;
