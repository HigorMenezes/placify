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
      <div className={classes.mainContainer}>
        <main className={classes.mainContent}>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
