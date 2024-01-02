import React from "react";
import logo1 from "../assets/armed-force-logo.webp";
import logo2 from "../assets/begrade-of-the-guards.webp";
import logo3 from "../assets/indian-coast-guard.webp";
import logo4 from "../assets/indian_navy_logo.webp";
import logo5 from "../assets/special-force.webp";
import logo6 from "../assets/indian-army.webp";
const Services = () => {
  const service = [
    {
      id: 1,
      title: "ZenTechnologies",
      description:
        "Combat ready soldiers save lives and increase the chance of mission success",
      image: { logo1 },
    },
    {
      id: 2,
      title: "ZenTechnologies",
      description:
        "Combat ready soldiers save lives and increase the chance of mission success",
      image: { logo1 },
    },
    {
      id: 3,
      title: "ZenTechnologies",
      description:
        "Combat ready soldiers save lives and increase the chance of mission success",
      image: { logo1 },
    },
    {
      id: 4,
      title: "ZenTechnologies",
      description:
        "Combat ready soldiers save lives and increase the chance of mission success",
      image: { logo1 },
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="services">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          Combat ready soldiers save lives and increase the chance of mission
          success. Zen Technologies builds training solutions that develop
          combat ready soldiers and counter-drone solutions for safer skies
        </p>
        <div className="my-12 flex flex-wrap justify-center items-center gap-11">
          <img className="w-24" src={logo1} alt="client-logo1" />
          <img className="w-24" src={logo2} alt="client-logo2" />
          <img className="w-24" src={logo3} alt="client-logo3" />
          <img className="w-24" src={logo4} alt="client-logo4" />
          <img className="w-24" src={logo5} alt="client-logo5" />
          <img className="w-24" src={logo6} alt="client-logo6" />
        </div>
      </div>
      {/*services card*/}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Combat ready soldiers
        </h2>
        <p className="text-neutralDgrey">
          Zen Technologies builds training solutions that develop combat ready
          soldiers and counter-drone solutions for safer skies
        </p>
      </div>
      {/*cards*/}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {service.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full "
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={logo1} alt="logo1" className="-ml-5" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
