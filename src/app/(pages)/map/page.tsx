"use client"
import React from "react";
import { NextPage } from "next";
import MapComponent from "@/components/map/MapComponent";

const MapPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold">MapPage</h1>
      <MapComponent />
    </div>
  );
};

export default MapPage;
