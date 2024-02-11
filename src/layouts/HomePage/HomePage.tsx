import ExploreTopBooks from "./components/ExploreTopBooks";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import LibraryServices from "./components/LibraryServices";
import React from "react";

export default function HomePage() {
  return (
    <>
      <ExploreTopBooks/>
      <Carousel/>
      <Hero/>
      <LibraryServices/>
    </>
  );
}