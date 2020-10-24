import React from "react";
import placifyApi from "../../services/placifyApi";

function HomePage(): React.ReactElement {
  return (
    <button type="button" onClick={() => placifyApi.get("/users/profile")}>
      Request
    </button>
  );
}

export default HomePage;
