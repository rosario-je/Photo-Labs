import React from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

function HomeRoute() {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
}

export default HomeRoute;
