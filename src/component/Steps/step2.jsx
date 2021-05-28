import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={4}>
        {renderText({
          label: "Branch Settings",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "16px" }}>
      
      <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "branchname",
            label: "Branch Name",
            options: [
              { key: "Branch 1", value: "Branch 1" },
              { key: "Branch 2", value: "Branch 2" },
              { key: "Branch 3", value: "Branch 3" },
            ],
            onChange: handleChange,
            required:true
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "branchhead",
            label: "Branch Head",
            options: [
              { key: "Employee 1", value: "Employee 1" },
              { key: "Employee 2", value: "Employee 2" },
              { key: "Employee 3", value: "Employee 3" },
            ],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "branchaddress",
            label: "Branch Address",
            onChange: handleChange,
            required:true
          })}
        </Grid>

        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "reportingmanager",
            label: "Reporting Manger",
            options: [
              { key: "Employee 1", value: "Employee 1" },
              { key: "Employee 2", value: "Employee 2" },
              { key: "Employee 3", value: "Employee 3" },
            ],
            onChange: handleChange,
            required:true
          })}
        </Grid>

      </Grid>


      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2} mb={1}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>

        <Box ml={2}>
          {renderButton({ 
            label: "Save & Continue",
            onClick: handleNext
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
