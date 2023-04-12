import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import domain_laptop from "../../Assets/domain_laptop.png";
import laptop from "../../Assets/laptop.png";
import image1 from "../../Assets/image1.png";
import moment from "moment";
// https://sms24.me

const Results = ({ apiData, setApiData, apiDataCompleted }) => {
  console.log("apiData", apiDataCompleted);
  return (
    <>
      <Box sx={{ mt: 12, mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Domain :{" "}
          <span style={{ color: "#585858" }}>
            {Array.isArray(
              apiData?.domain_information?.whois_information.domain_name.length
            )
              ? apiData?.domain_information?.whois_information?.domain_name[0]
              : apiData?.domain_information?.whois_information
                  ?.domain_name}{" "}
          </span>
        </Typography>
      </Box>
      <Grid
        sx={{ mb: 8 }}
        container
        rowSpacing={{ xs: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item sm={5} xs={12}>
          <Paper variant="outlined" sx={{ height: 300 }}>
            <Box sx={{ boxSizing: "border-box", p: 3 }}>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 2.5 }}>
                Website Exists: &nbsp;
                <span style={{ color: "#282828" }}>
                  {apiData?.domain_information?.website_exists}
                </span>
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 2.5 }}>
                Base URL: &nbsp;
                <span style={{ color: "#282828" }}>
                  {apiData?.domain_information?.base_url}
                </span>
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 2.5 }}>
                Domain ID: &nbsp;
                <span style={{ color: "#282828" }}>
                  {!apiData?.domain_information?.whois_information.domain_id
                    ? "Not Found"
                    : apiData?.domain_information?.whois_information.domain_id}
                </span>
              </Typography>
              {/* <Typography variant="body1" color="textSecondary" sx={{ mb: 2.5 }}>
                Domain Name:{" "} &nbsp;
                <span style={{ color: "#282828" }}>
                  {apiData?.domain_information?.website_exists}
                </span>
              </Typography> */}
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 2.5 }}>
                Creation Date: &nbsp;
                <span style={{ color: "#282828" }}>
                  {moment(
                    apiData?.domain_information?.whois_information.creation_date
                  ).format("ll")}
                </span>
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ mb: 2.5 }}>
                Expiry Date: &nbsp;
                <span style={{ color: "#282828" }}>
                  {moment(
                    apiData?.domain_information?.whois_information
                      .expiration_date
                  ).format("ll")}
                </span>
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

      {/* ********************************** Registrant information ****************************************** */}
      <Paper elevation={3} sx={{ p: 3, mt: 8, boxSizing: "border-box", pb: 6 }}>
        <Typography
          align="center"
          sx={{ pt: 1, pb: 1, backgroundColor: "#d3d4f0", mt: 2 }}>
          <b>Registrant Information</b>
        </Typography>
        <Grid container spacing={6} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Name:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {}
              {apiData?.domain_information?.whois_information.registrar === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.registrar}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrant ID:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {!apiData?.domain_information?.whois_information.registrant_id
                ? "Not Found"
                : apiData?.domain_information?.whois_information.registrant_id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrant Name:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_name === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_name}{" "}
              {apiData?.domain_information?.whois_information.name === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Org:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information.registrant_org ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.registrant_org}
              {apiData?.domain_information?.whois_information.org === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.org}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Address</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_address === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_address}
              {apiData?.domain_information?.whois_information.address === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar City:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_city === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_city}
              {apiData?.domain_information?.whois_information.city === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar State:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_state_province === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_state_province}
              {apiData?.domain_information?.whois_information.state === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.state}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Country:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_country === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_country}
              {apiData?.domain_information?.whois_information.country === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information.country}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Postal Code:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_postal_code === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_postal_code}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Phone:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                .registrant_phone === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    .registrant_phone}
              {!apiData?.domain_information?.whois_information.phone
                ? "Not Found"
                : apiData?.domain_information?.whois_information.phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Registrar Email:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information
                ?.registrant_email === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    ?.registrant_email}
              {apiData?.domain_information?.whois_information?.emails === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.emails}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* ********************************** Registrant information ****************************************** */}

      {/* ********************************** Admin information ****************************************** */}
      {/* <Paper elevation={3} sx={{ p: 3, mt: 8, boxSizing: "border-box", pb: 6 }}>
        <Typography
          align="center"
          sx={{ pt: 1, pb: 1, backgroundColor: "#d3d4f0", mt: 2 }}>
          <b>Admin Information</b>
        </Typography>
        <Grid container spacing={6} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin ID:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {apiData?.domain_information?.whois_information?.admin_id === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Name:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_name ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Org:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_org ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_org}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Address:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_address ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin City:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_city ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin State:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information
                ?.admin_state_province === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    ?.admin_state_province}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Country:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_country ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_country}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Postal Code:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information
                ?.admin_postal_code === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    ?.admin_postal_code}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Phone:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_phone ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Admin Email:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.admin_email ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.admin_email}
            </Typography>
          </Grid>
        </Grid>
      </Paper> */}
      {/* ********************************** Admin information ****************************************** */}

      {/* ********************************** Technical information ****************************************** */}
      {/* <Paper elevation={3} sx={{ p: 3, mt: 8, boxSizing: "border-box", pb: 6 }}>
        <Typography
          align="center"
          sx={{ pt: 1, pb: 1, backgroundColor: "#d3d4f0", mt: 2 }}>
          <b>Tech Information</b>
        </Typography>
        <Grid container spacing={6} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech ID:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_id === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Name:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_name ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Org:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_org === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_org}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Address:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_address ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech City:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_city ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_city}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech State:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information
                ?.tech_state_province === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    ?.tech_state_province}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Country:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_country ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_country}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Postal Code:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information
                ?.tech_postal_code === null
                ? "Not Found"
                : apiData?.domain_information?.whois_information
                    ?.tech_postal_code}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Phone:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_phone ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_phone}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Typography variant="body2">Tech Email:</Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{ backgroundColor: "#e6e7f8", padding: "5px" }}>
              {" "}
              {apiData?.domain_information?.whois_information?.tech_email ===
              null
                ? "Not Found"
                : apiData?.domain_information?.whois_information?.tech_email}
            </Typography>
          </Grid>
        </Grid>
      </Paper> */}
      {/* ********************************** Technical information ****************************************** */}

      <Paper
        variant="outlined"
        sx={{ height: 200, boxSizing: "border-box", p: 2, mb: 5, mt: 5 }}>
        <Typography variant="h6">Social Media</Typography>
        {apiData?.domain_information?.social_media?.length === 0 ||
        apiData?.domain_information?.social_media === null ? (
          <Typography variant="h6" color="error" align="center">
            No Data Found
          </Typography>
        ) : (
          <>
            {apiData?.domain_information?.social_media?.map((elem) => (
              <Typography variant="body1">{elem}</Typography>
            ))}
          </>
        )}
      </Paper>
      <Paper
        variant="outlined"
        sx={{ height: 200, boxSizing: "border-box", p: 2, mb: 5, mt: 5 }}>
        <Typography variant="h6">Fraud URLs</Typography>
        {apiData?.fraud_urls_found?.length === 0 ? (
          <Typography variant="h6" color="error" align="center">
            No Data Found
          </Typography>
        ) : (
          <>
            {(apiData?.fraud_urls_found).map((elem) => (
              <Typography variant="body1">{elem}</Typography>
            ))}
          </>
        )}
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