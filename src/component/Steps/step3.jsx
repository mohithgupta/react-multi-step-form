import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={4}>
        {renderText({
          label: "Department Setting",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={8}>
          {renderSelect({
            state,
            name: "departmentname",
            label: "Department Name",
            options: [
              { key: "Department 1", value: "Department 1" },
              { key: "Department 2", value: "Department 2" },
              { key: "Department 3", value: "Department 3" },
            ],
            onChange: handleChange,
            })}
        </Grid>

        <Grid item xs={12} sm={8}>
          {renderSelect({
            state,
            name: "departmenthead",
            label: "Department Head",
            options: [
              { key: "Employee 1", value: "Employee 1" },
              { key: "Employee 2", value: "Employee 2" },
              { key: "Employee 3", value: "Employee 3" },
            ],
            onChange: handleChange,
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

export default Step3;
