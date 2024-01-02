import React from "react";

const Newsletter = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralsilver py-16"
      id="newsletter"
    >
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug">
            Combat Readyness is Critical
          </h2>
          <div>
            <button className="btn-primary">Get A Demo &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
