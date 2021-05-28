import { Button, MenuItem, TextField, Typography } from "@material-ui/core";

export const renderText = ({ type, label, color, align }) => (
  <Typography variant={type} color={color} align={align} >
    {label}
  </Typography>
);

export const renderInputField = ({ name, label, type, required, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      required={required?required :false}
      variant='outlined'
      color='primary'
      size='medium'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
    />
  );
};

export const renderSelect = ({ name, label, options,required,display, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      select
      label={label}
      variant='outlined'
      color='primary'
      size='medium'
      required={required?required : false}
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
      >

      {options.map((item) => (
        <MenuItem value={item.value}>
          {item.key}
        </MenuItem>
      ))}

    </TextField>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick }) => (
  <Button
    variant={variant ? variant : "contained" }
    color={color ? color : "primary"}
    fullWidth={fullWidth ? fullWidth : false}
    onClick={onClick}
    >
    {label}
  </Button>
);
