import React from "react";
import Greeting from "../components/dashbaord/Greeting";
import OutfitSuggestion from "../components/dashbaord/OutfitSuggestion";

const DashBoard = () => {
  return (
    <section>
      <Greeting />
      <hr className=' border-gray-300' />
      <OutfitSuggestion />
    </section>
  );
};

export default DashBoard;
