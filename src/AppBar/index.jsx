import React from 'react';

const AppBar = () => (
  <header className="bg-white font-sans">
    <div className="flex max-w-3xl mx-auto h-10 items-center">
      <div className="flex-1 text-grey-darker text-xl">
        Team Status Summary
      </div>
      <div className="">
        <button className="bg-red hover:bg-red-dark text-white font-bold py-2 px-2">
          <i className="fa fa-power-off"></i>
        </button>
      </div>
    </div>
  </header>
);

export default AppBar;
