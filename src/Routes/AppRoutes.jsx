import React from "react";
import Photos from "../pages/Photos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Photos />}></Route>
    </Routes>
  );
};

export default AppRoutesq;
