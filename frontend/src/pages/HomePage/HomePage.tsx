import React from "react";
import placifyApi from "../../services/placifyApi";

import MainLayout from "../../layouts/MainLayout";

function HomePage(): React.ReactElement {
  return (
    <MainLayout>
      <button
        type="button"
        onClick={() => placifyApi.get("/playlists/featured")}
      >
        Request
      </button>
    </MainLayout>
  );
}

export default HomePage;
