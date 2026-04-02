import { Input as InputKit, Stack, Text } from "@alphacore/ui-kit";
import styles from "./Input.module.css";

export type InputProps = React.ComponentProps<typeof InputKit>;

export const Input = (props: InputProps) => {
  return (
    <Stack className={styles.inputContainer}>
      <InputKit {...props} errorHidden />
      {props.error && (
        <Stack className={styles.errorContainer}>
          <Text variant="Font2" style={{ color: "var(--color-2)" }}>
            {props.error}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};
