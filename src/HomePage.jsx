import React from "react";
import Intro from "./Component/Intro";
import Table from "./Component/Table";

function HomePage() {
  return (
    <div className="w-[90vw] mt-10 mb-10 flex flex-col gap-10 ">
      <Intro />
      <Table />
    </div>
  );
}

export default HomePage;
