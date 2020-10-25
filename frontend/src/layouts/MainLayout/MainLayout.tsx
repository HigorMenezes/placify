import React from "react";

import Sidebar from "../../components/Sidebar";

import useMainLayoutStyles from "./useMainLayoutStyles";

interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

function MainLayout({ children }: MainLayoutProps): React.ReactElement {
  const classes = useMainLayoutStyles();

  return (
    <div className={classes.root}>
      <aside className={classes.sidebarContainer}>
        <Sidebar />
      </aside>
      <main className={classes.mainContainer}>{children}</main>
    </div>
  );
}

export default MainLayout;
