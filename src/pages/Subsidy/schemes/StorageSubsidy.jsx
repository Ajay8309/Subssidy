import React from "react";
import SubsidyTable from "./SubsidyTable";

const StorageSubsidy = () => {
  const subsidyData = [
    { project: "Warehouses/Silos (5000 MT)", subsidy: "25% to 33%", incentives: "NA", loanRequired: "Yes" },
    { project: "Storage for Feed and Fodder", subsidy: "25% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Cold Storage (Fruits/Vegetables/Flowers/Fish/Meat)", subsidy: "25% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Integrated Cold Chain", subsidy: "35% to 50%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Ripening Chambers", subsidy: "25% to 50%", incentives: "Yes", loanRequired: "Yes" },
  ];

  return <SubsidyTable title="Storage Project Subsidies" subsidyData={subsidyData} />;
};

export default StorageSubsidy;
