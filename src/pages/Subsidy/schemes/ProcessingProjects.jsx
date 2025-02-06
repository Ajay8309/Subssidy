import React from "react";
import SubsidyTable from "./SubsidyTable";

const ProcessingProjects = () => {
  const subsidyData = [
    { project: "Fruits and Vegetables", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Frozen Fruits and Vegetables (Blast and IQF)", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Dried Fruits and Vegetables", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Fruits Powder and Paste", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Milk Processing-By Products", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Dal Mill, Oil Mill", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Fruits Juices, Squash, PET", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Canning of Processed Fruits, Vegetables and Foods", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Jaggery and Jaggery Products", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Ready to Eat/Cook Products", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Bakery Products", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Spices, Pickles, Jams", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Meat and Fish Processing", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Chicken Processing Units", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Food Irradiation Units", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
  ];

  return <SubsidyTable title="Processing Project Subsidies" subsidyData={subsidyData} />;
};

export default ProcessingProjects;
