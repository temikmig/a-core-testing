import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import { Input, type InputProps } from "@/shared/ui";

interface FormInputProps<T extends FieldValues> extends Omit<
  InputProps,
  "name" | "value" | "onChange"
> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
}

export const FormInput = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormInputProps<T>) => {
  const { rules, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input
          {...rest}
          {...field}
          value={field.value ?? ""}
          error={fieldState.error?.message}
        />
      )}
    />
  );
};
