import React from "react";
import { Box, Typography } from "@material-ui/core";
import { renderText } from "../common/DisplayComponent";

const FinalStep = ({ data }) => {
  return (
    <Box align="center">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Submitted Data for Reference",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>    

    {/* {JSON.stringify(data, null,2)} */}
    {console.log(data)}
    <Box style={{border:"1px solid black"}}>
      
      <pre>Organization : {data.organisationname?data.organisationname:"Not Provided"}</pre>
      <pre>Email : {data.email}</pre>
      <pre>Location : {data.location}</pre>
      <pre>Country : {data.country?data.country:"Not Provided"}</pre>
      <pre><Typography noWrap variant="p">Address : {data.address?data.address:"Not Provided"} </Typography></pre>
      <pre>Phone : {data.phone}</pre>
      <pre>Current Locale : {data.currentlocale?data.currentlocale:"Not Provided"}</pre>
      <pre>Date Format: {data.dateformat}</pre>
      <pre>Time Format : {data.timeformat}</pre>
      <pre>Branch Name : {data.branchname}</pre>
      <pre>Branch Head : {data.branchhead?data.branchhead:"Not Provided"}</pre>
      <Typography variant="p" noWrap><pre>Branch Address : {data.branchaddress?data.branchaddress:"Not Provided"}</pre> </Typography>
      <pre>Reporting Manager : {data.reportingmanager?data.reportingmanager:"Not Provided"}</pre>
      <pre>Department Name : {data.departmentname?data.departmentname:"Not Provided"}</pre>
      <pre>Department Head : {data.departmenthead?data.departmenthead:"Not Provided"}</pre>
      <pre>Designation : {data.designation}</pre>

    </Box>

    </Box>

  );
};

export default FinalStep;
