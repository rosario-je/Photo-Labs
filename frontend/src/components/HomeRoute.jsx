import React from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

function HomeRoute() {
  return (
    <>
      <TopNavigation />
      <PhotoList />
    </>
  );
}

export default HomeRoute;
