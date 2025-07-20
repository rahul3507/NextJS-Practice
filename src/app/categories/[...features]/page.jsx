/** @format */
"use client";
import React, { useEffect, useState } from "react";

const categoriesDetailsPage = ({ params }) => {
  // Use React.use() on the entire params object, not just params.features
  const resolvedParams = React.use(params);
  const features = resolvedParams.features;

  if (features && features.length === 2) {
    return <div>Categories is: {features[1]}</div>; // Fixed: access features[1] for second element
  }
  if (features && features.length === 1) {
    return <div>Categories is: {features[0]}</div>; // Fixed: access features[0] for first element
  }

  return (
    <div className="h-44 text-center justify-center items-center mt-24">
      <h2>categoriesDetailsPage is here</h2>
      {/* Debug info to see what's in features */}
      {features && <p>Features: {JSON.stringify(features)}</p>}
    </div>
  );
};

export default categoriesDetailsPage;
