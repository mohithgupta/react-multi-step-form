import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step4 = ({
  state,
  handleChange,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={4}>
        {renderText({
          label: "Designation",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
  
      <Grid container spacing={1}>
      
      <Grid item xs={12} sm={8} >
          {renderSelect({
            state,
            name: "designation",
            label: "Designation",
            options: [
              { key: "Designation 1", value: "Designation 1" },
              { key: "Designation 2", value: "Designation 2" },
              { key: "Designation 3", value: "Designation 3" },
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
            label: "Submit",
            onClick: handleSubmit 
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step4;
