"use client";
import EditPortfolioEditor from "@/components/DashboardComponent/EditPortfolioEditor/EditPortfolioEditor";
import React, { useEffect, useState } from "react";

export default function EditPortfolio() {
  const [portfolioID, setPortfolioID] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const portfolioID = urlParams.get("portfolioID");
    setPortfolioID(portfolioID || "");
    console.log("caseID from window.location:", portfolioID);
  }, []);
  return <EditPortfolioEditor portfolioID={portfolioID} />;
}
