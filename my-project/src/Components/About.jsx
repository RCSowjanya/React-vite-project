import React from "react";
import aboutimg from "../assets/army.avif";
import logo1 from "../assets/indian-army.webp";
const About = () => {
  return (
    <div id="about">
      {/*about text*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutimg} alt="aboutimg" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Combat Readyness Is
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Combat ready soldiers save lives and increase the chance of
              mission success.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/*company sites*/}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Combat ready soldiers save lives and
              <span className="text-brandPrimary"> increase</span>
            </h2>
            <p className="">
              Combat ready soldiers save lives and increase the chance of
              mission success.
            </p>
          </div>
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={logo1} className="w-7" alt="logo1" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,234,6777
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={logo1} className="w-7" alt="logo1" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,65,9
                  </h4>
                  <p>Events</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={logo1} className="w-7" alt="logo1" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,234,6777
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={logo1} className="w-7" alt="logo1" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,65,9
                  </h4>
                  <p>Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
