import React from "react";
import { Carousel } from "flowbite-react";
import army from "../assets/army.avif";
const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-[20%] md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={army} alt="army-bg" />
            </div>
            {/*hero content */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey leading-[70px]">
                Combat Readyness Is
                <span className="text-brandPrimary">Critical</span>
              </h1>
              <p>
                Combat ready soldiers save lives and increase the chance of
                mission success.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-[20%] md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={army} alt="army-bg" />
            </div>
            {/*hero content */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey leading-[70px]">
                Combat Readyness Is
                <span className="text-brandPrimary">Critical</span>
              </h1>
              <p>
                Combat ready soldiers save lives and increase the chance of
                mission success.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-[20%] md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={army} alt="army-bg" />
            </div>
            {/*hero content */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey leading-[70px]">
                Are You Combat
                <span className="text-brandPrimary">Ready</span>
              </h1>
              <p>
                Combat ready soldiers save lives and increase the chance of
                mission success.
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
