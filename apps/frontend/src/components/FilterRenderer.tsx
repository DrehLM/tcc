import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useFormik } from "formik";

type FilterRendererProps = {
  title: string;
  options: TCheckbox[];
};

export type TCheckbox = {
  value: any;
  label: string;
};

const FilterRenderer = ({ title, options }: FilterRendererProps) => {
  const formik = useFormik({
    initialValues: {
      checkeds: [2010],
    },
    onSubmit: (values) => {},
  });

  const { checkeds } = formik.values;

  const handleOnChange = (option: TCheckbox) => {
    checkeds.includes(option.value)
      ? checkeds.splice(checkeds.indexOf(option.value), 1)
      : checkeds.push(option.value);
    formik.handleSubmit();
  };

  return (
    <>
      <Typography
        variant="h5"
        color={pink[500]}
        onClick={() =>
          formik.setFieldValue(
            "checkeds",
            checkeds.length === options.length
              ? []
              : options.map((option) => option.value)
          )
        }
      >
        {title}
      </Typography>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            label={option.label}
            control={
              <Checkbox
                name="checkeds"
                value={option.value}
                checked={checkeds.includes(option.value)}
                onChange={() => handleOnChange(option)}
              />
            }
          />
        ))}
      </FormGroup>
      <Typography>{JSON.stringify(checkeds)}</Typography>
    </>
  );
};

export default FilterRenderer;
