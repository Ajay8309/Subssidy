import React from "react";

const SubsidyTable = ({ title, subsidyData }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{title}</h1>

      {/* Table Section */}
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.headerCell}>Project Name</th>
            <th style={styles.headerCell}>Subsidy (%)</th>
            <th style={styles.headerCell}>Incentives</th>
            <th style={styles.headerCell}>Term Loan Required</th>
          </tr>
        </thead>
        <tbody>
          {subsidyData.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.cell}>{item.project}</td>
              <td style={styles.cell}>{item.subsidy}</td>
              <td style={styles.cell}>{item.incentives}</td>
              <td style={styles.cell}>{item.loanRequired}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Additional Information Section */}
      <div style={styles.detailsGrid}>
        <div style={styles.detailsBlock}>
          <h2 style={styles.subheading}>Subsidy Amount</h2>
          <p>Percentage of eligible cost as per respective department norms. Eligible cost for subsidy may be less than your total project cost.</p>
        </div>

        <div style={styles.detailsBlock}>
          <h2 style={styles.subheading}>Incentives</h2>
          <ul style={styles.list}>
            <li>NA with an approved layout plan is mandatory.</li>
            <li>Udyog Aadhaar registration is mandatory.</li>
            <li>Stamp duty on lease agreement, loan mortgage</li>
            <li>SGST paid (percentage depends on projects)</li>
            <li>Interest paid on term loan (5% on term loan)</li>
            <li>Power bill (Rs. 0.50/1 per unit for 3 years)</li>
            <li>Electricity duty (100%)</li>
          </ul>
        </div>

        <div style={styles.detailsBlock}>
          <h2 style={styles.subheading}>F/V/F/F/M</h2>
          <p>Fruits, Vegetables, Flowers, Fish, Meat</p>
        </div>

        <div style={styles.detailsBlock}>
          <h2 style={styles.subheading}>Term Loan</h2>
          <p>Term loan is mandatory to apply for this subsidy scheme.</p>
        </div>
      </div>
    </div>
  );
};

// ✅ CSS-in-JS Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
    maxWidth: "1200px",
    margin: "auto",
  },
  heading: {
    fontSize: "2.5rem",
    background: "linear-gradient(120deg, rgba(141, 244, 255, 0.8), rgba(0, 0, 0, 0.7))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    fontSize: "1.2rem",
  },
  headerRow: {
    background: "linear-gradient(120deg, rgba(141, 244, 255, 0.8), rgba(0, 0, 0, 0.7))",
    color: "white",
    textAlign: "left",
  },
  headerCell: {
    padding: "18px",
    fontWeight: "bold",
  },
  cell: {
    padding: "18px",
    borderBottom: "1px solid #ddd",
  },
  evenRow: {
    backgroundColor: "#f8f8f8",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    background: "linear-gradient(120deg, rgba(141, 244, 255, 0.1), rgba(0, 0, 0, 0.03))",
    padding: "2rem",
    marginTop: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  detailsBlock: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subheading: {
    fontSize: "1.8rem",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  list: {
    textAlign: "left",
    marginLeft: "1.5rem",
    lineHeight: "1.8",
  },
};

export default SubsidyTable;
