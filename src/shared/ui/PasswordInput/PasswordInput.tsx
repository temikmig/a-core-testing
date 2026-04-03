import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./PasswordInput.module.css";
import { Stack, Text } from "@alphacore/ui-kit";
import { EyeIcon, EyeOffIcon } from "../icons";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const PasswordInput = ({
  label,
  error,
  ...props
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <Stack className={styles.inputContainer}>
      <Stack className={styles.textField}>
        {label && (
          <label className={styles.label} htmlFor={props.name}>
            {label}
          </label>
        )}

        <Stack className={styles.inputWrapper}>
          <input
            id={props.name}
            {...props}
            type={show ? "text" : "password"}
            className={styles.input}
          />

          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className={styles.toggle}
          >
            {show ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </Stack>

        {error && (
          <Stack className={styles.errorContainer}>
            <Text variant="Font2" style={{ color: "var(--color-2)" }}>
              {error}
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
