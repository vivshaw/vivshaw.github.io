import clsx from "clsx";
import React, { type PropsWithChildren } from "react";

import { Navbar } from "./Navbar";

import styles from "./LayoutWrapper.module.css";

type LayoutWrapperProps = PropsWithChildren<{
  showImageBackground?: boolean;
  navbarVariant?: "full" | "abbreviated";
}>;

export function LayoutWrapper({
  children,
  showImageBackground = false,
  navbarVariant = "abbreviated",
}: LayoutWrapperProps) {
  return (
    <div className={clsx(styles.root, showImageBackground && styles.imageBackground)}>
      <Navbar variant={navbarVariant} />
      {children}
    </div>
  );
}
