import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import domain_laptop from "../../Assets/domain_laptop.png";
import laptop from "../../Assets/laptop.png";
import image1 from "../../Assets/image1.png";

const Results = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
        <Box sx={{ mt: 10, mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            Domain :
          </Typography>
        </Box>
        <Grid
          sx={{mb: 8}}
          container
          rowSpacing={{ xs: 2 }}
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item sm={5} xs={12}>
            <Paper variant="outlined" sx={{ height: 300 }}>
              <Box sx={{ boxSizing: "border-box", p: 3 }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Base URL:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Domain ID:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Domain Name:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Creation Date:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Expiry Date:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Website Exists:{" "}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={7} xs={12}>
            <Paper
              // variant="outlined"
              elevation={0}
              sx={{
                height: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <img
                src={image1}
                alt="demoimage"
                height="100%"
                // width="100%"
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          sx={{mb: 7}}
          container
          rowSpacing={{ xs: 2 }}
          columnSpacing={{ xs: 1, sm: 1, md: 1.5 }}>
          <Grid item sm={4} xs={12}>
            <Paper
              // elevation={3}
              variant="outlined"
              sx={{ height: 510, boxSizing: "border-box", p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Registrant Information
              </Typography>
              <Box sx={{ boxSizing: "border-box", p: 2 }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Name:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrant ID:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrant Name:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Org:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Address:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar City:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar State:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Country:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Postal Code:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Phone:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Registrar Email:{" "}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper
              // elevation={3}
              variant="outlined"
              sx={{ height: 510, boxSizing: "border-box", p: 2 }}>
              <Typography variant="h6">Admin Information</Typography>
              <Box sx={{ boxSizing: "border-box", p: 2 }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin ID:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Name:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Org:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Address:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin City:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin State:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Country:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Postal Code:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Phone:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Admin Email:{" "}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper
              // elevation={3}
              variant="outlined"
              sx={{ height: 510, boxSizing: "border-box", p: 2 }}>
              <Typography variant="h6">Technical Information</Typography>
              <Box sx={{ boxSizing: "border-box", p: 2 }}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech ID:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Name:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Org:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Address:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech City:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech State:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Country:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Postal Code:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Phone:{" "}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 2 }}>
                  Tech Email:{" "}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Paper
          variant="outlined"
          sx={{ height: 200, boxSizing: "border-box", p: 2, mb: 5 }}>
          <Typography variant="h6">
            Social Media
            {/* <span style={{ fontSize: "14px" }}>(if any)</span> */}
          </Typography>
        </Paper>
        <Paper
          variant="outlined"
          sx={{ height: 200, boxSizing: "border-box", p: 2, mb: 5 }}>
          <Typography variant="h6">
            Fraud URLs
            {/* <span style={{ fontSize: "14px" }}>(if any)</span> */}
          </Typography>
        </Paper>
        <br />
    </>
  );
};

export default Results;

// {loading ? (
//             <Paper
//               variant="outlined"
//               sx={{ p: { sm: 3, xs: "0.4 0.7" }, height: 300 }}>
//               <CircularProgress size={25} thickness={6} />
//             </Paper>
//           ) : null}