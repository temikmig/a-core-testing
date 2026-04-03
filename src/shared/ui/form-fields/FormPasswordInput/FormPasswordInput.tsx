import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import { PasswordInput, type InputProps } from "@/shared/ui";

interface FormPasswordInput<T extends FieldValues> extends Omit<
  InputProps,
  "name" | "value" | "onChange"
> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
}

export const FormPasswordInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormPasswordInput<T>) => {
  const { rules, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...rest}
          {...field}
          value={field.value ?? ""}
          error={fieldState.error?.message}
        />
      )}
    />
  );
};
