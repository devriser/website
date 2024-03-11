"use client";

import EditCaseStudyEditor from "@/components/DashboardComponent/EditCaseStudyEditor/EditCaseStudyEditor";
import React, { useEffect, useState } from "react";

export default function EditCaseStudy() {
  const [caseID, setCaseID] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const caseID = urlParams.get("caseID");
    setCaseID(caseID || "");
    console.log("caseID from window.location:", caseID);
  }, []);
  return <EditCaseStudyEditor caseID={caseID} />;
}
