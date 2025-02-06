import React from "react";
import SubsidyTable from "./SubsidyTable";

const AgricultureSubsidy = () => {
  const subsidyData = [
    { project: "Open Field Cultivation (Falbag)", subsidy: "40% to 50%", incentives: "NA", loanRequired: "Yes" },
    { project: "Poly House (Fruits, Vegetables, Flowers)", subsidy: "40% to 50%", incentives: "NA", loanRequired: "Yes" },
    { project: "Green House and Nursery", subsidy: "40% to 50%", incentives: "NA", loanRequired: "Yes" },
    { project: "Tissue Culture and Mushroom Production", subsidy: "40% to 50%", incentives: "NA", loanRequired: "Yes" },
    { project: "Dairy Farming", subsidy: "25% to 33%", incentives: "NA", loanRequired: "Yes" },
    { project: "Milk Chilling Unit", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Milk Packaging", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Grains/Pulses Grading", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Fish Chilling and Freezing", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Oilseed and Coconut Pack", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
  ];

  return <SubsidyTable title="Agriculture & Allied Subsidies" subsidyData={subsidyData} />;
};

export default AgricultureSubsidy;
