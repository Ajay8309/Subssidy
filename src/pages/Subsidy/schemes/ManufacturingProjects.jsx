import React from "react";
import SubsidyTable from "./SubsidyTable";

const ManufacturingProjects = () => {
  const subsidyData = [
    { project: "Corrugated Boxes", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Plastic Moulded", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Rubber Processing", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Cloth Mask and Hand gloves", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Wire & Cable Industry", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Auto/Bicycle Parts", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Gold Plating and Jewellery", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Electronic equipment", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Cosmetics", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Wooden Furniture", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Readymade Garments", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Other manufacturing", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Printing Machines", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Leather and Footwear", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Cement, Ash Blocks", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Fuel briquetting", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Gulal, Glass, Gold, paints", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
    { project: "Others Manufacturing Etc", subsidy: "15% to 33%", incentives: "Yes", loanRequired: "Yes" },
  ];

  return <SubsidyTable title="Manufacturing and Processing Unit Subsidies" subsidyData={subsidyData} />;
};

export default ManufacturingProjects;
