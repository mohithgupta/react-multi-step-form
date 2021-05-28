import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import ImageUploader from "../common/imageUploader";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={4}>
        {renderText({
          label: "General Settings",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "16px" }}>

        <Grid item xs={12} sm={6} >
          {renderInputField({
            state,
            name: "organizationname",
            label: "Organization Name",
            onChange: handleChange,
            required: true
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email Id",
            onChange: handleChange,
            required: true
          })}
        </Grid>
      
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "location",
            label: "Location",
            options: [
              { key: "Delhi", value: "Delhi" },
              { key: "Washington D.C.", value: "Washington D.C." },
              { key: "Canberra", value: "Canberra" },
              { key: "Ottawa", value: "Ottawa" },
              { key: "Moscow", value: "Moscow" },
            ],
            onChange: handleChange,
            required:true
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "country",
            label: "Country",
            options: [
              { key: "India", value: "India" },
              { key: "USA", value: "USA" },
              { key: "Australia", value: "Australia" },
              { key: "Canada", value: "Canada" },
              { key: "Russia", value: "Russia" },
            ],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address",
            label: "Address",
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
            required: true
          })}
        </Grid>

        <ImageUploader></ImageUploader>

      </Grid>
    
      <Box mt={2} mb={4}>
        {renderText({
          label: "Locale Settings",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "16px" }}>
        
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "currentlocale",
            label: "Current Locale",
            options: [
              { key: "India", value: "India"},
              { key: "USA", value: "USA" },
              { key: "Australia", value: "Australia" },
              { key: "Canada", value: "Canada" },
              { key: "Russia", value: "Russia" },
            ],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "dateformat",
            label: "Date Format",
            options: [
              { key: "dd/mm/yyyy", value: "dd/mm/yyyy" },
              { key: "dd/mon/yyyy", value: "dd/mon/yyyy" },
              { key: "mm/dd/yyyy", value: "mm/dd/yyyy" },
              { key: "mon/dd/yyy", value: "mon/dd/yyyy" },
            ],
            onChange: handleChange,
            required:true
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "timeformat",
            label: "Time Format",
            options: [
              { key: "12-hr format", value: "12-hr format" },
              { key: "24-hr format", value: "24-hr format" },
            ],
            onChange: handleChange,
            required:true
          })}
        </Grid>

      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ 
          label: "Save & Continue",
          onClick: handleNext
        })}
      </Grid>
    </Paper>
  );
};

export default Step1;
