import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <main className={styles.content}>
      <Outlet />
    </main>
  );
};
