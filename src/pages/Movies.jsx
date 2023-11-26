import React from "react";
import { Outlet } from "react-router-dom";

function Movies() {
  return (
    <section className="h-screen">
      <Outlet />
    </section>
  );
}

export default Movies;
