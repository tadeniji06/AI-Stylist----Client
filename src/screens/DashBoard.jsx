import React from "react";
import Greeting from "../components/dashbaord/Greeting";
import OutfitSuggestion from "../components/dashbaord/OutfitSuggestion";
import Leftbar from "../layouts/LeftBar";
const DashBoard = () => {
  return (
    <section>
      <Greeting />
      <Leftbar />
      <hr className=' border-gray-300' />
      <OutfitSuggestion />
    </section>
  );
};

export default DashBoard;
