import { TextField } from "@mui/material";
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import { ChipTypeMap } from "@mui/material/Chip";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

interface Option<T> {
  value: T;
  label: string;
}

interface AutocompleteProps<
  T extends TFieldValues[TName] | Option<TFieldValues[TName]>,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
      MuiAutocompleteProps<
        T,
        Multiple,
        DisableClearable,
        FreeSolo,
        ChipComponent
      >,
      "defaultValue" | "renderInput"
    >,
    UseControllerProps<TFieldValues, TName> {
  label: React.ReactNode;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export default function Autocomplete<
  T extends TFieldValues[TName] | Option<TFieldValues[TName]>,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent,
    TFieldValues,
    TName
  >
) {
  const {
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
    renderInput,
    label,
    ...rest
  } = props;
  const defaultRenderInput = (params: AutocompleteRenderInputParams) => (
    <TextField {...params} label={label} />
  );
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <MuiAutocomplete
          {...field}
          onChange={(_event, data) => field.onChange(data)}
          renderInput={renderInput ?? defaultRenderInput}
          {...rest}
        />
      )}
    />
  );
}
