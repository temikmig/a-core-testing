import { LoginForm } from "@/features/auth";
import { Card, Stack } from "@alphacore/ui-kit";
import { Logo } from "@/shared/ui";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <Stack className={styles.loginContainer}>
      <Stack className={styles.logoContainer}>
        <Logo />
      </Stack>
      <Card className={styles.loginCard}>
        <LoginForm />
      </Card>
    </Stack>
  );
};
