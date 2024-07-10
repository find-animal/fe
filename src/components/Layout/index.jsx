import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import styles from './index.styles.module.css'

export default function Layout() {
  return (
    <div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
