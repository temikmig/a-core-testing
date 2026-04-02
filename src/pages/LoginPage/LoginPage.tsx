import { LoginForm } from "@/features/auth";
import { Card, Stack } from "@alphacore/ui-kit";
import styles from "./LoginPage.module.css";
import { Logo } from "@/shared/ui";

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
