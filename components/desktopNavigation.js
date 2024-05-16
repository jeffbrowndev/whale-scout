import React from 'react';
import styles from "@/styles/desktopNavigation.module.scss";
import logo from "@/public/ws_logo.png";
import Image from "next/image";

const DesktopNavigation = () => {
  return (
    <div className={styles.desktop_navigation}>
      <Image src={logo} alt='Logo' />
    </div>
  );
}

export default DesktopNavigation;