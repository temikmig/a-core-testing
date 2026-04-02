import { Button, Stack, Text, TextAlign } from "@alphacore/ui-kit";
import styles from "./LoginForm.module.css";
import { FormInput } from "@/shared/ui";
import { useLoginForm } from "../../model";

export const LoginForm = () => {
  const { control, handleSubmit, onSubmit, loading } = useLoginForm();
  return (
    <Stack className={styles.loginFormContainer}>
      <Text
        as="h1"
        style={{ lineHeight: "20px" }}
        variant="Font4"
        align={TextAlign.CENTER}
      >
        Войдите в свой аккаунт
      </Text>
      <Stack className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Stack className={styles.inputsContainer}>
            <FormInput
              name="email"
              control={control}
              label="Адрес электронной почты"
              placeholder="admin@ideavour.ru"
              rules={{
                required: "Введите адрес электронной почты",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Некорректный адрес электронной почты",
                },
              }}
            />
            <FormInput
              name="password"
              control={control}
              label="Пароль"
              passwordField
              required
              placeholder="********"
              rules={{
                required: "Введите пароль",
              }}
            />
          </Stack>
          <Button type="submit" loading={loading} disabled={loading}>
            Продолжить
          </Button>
        </form>
        <Button variant="clear" className={styles.forgotPasswordButton}>
          Не удается войти в систему?
        </Button>
      </Stack>
    </Stack>
  );
};
