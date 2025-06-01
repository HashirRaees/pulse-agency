"use client";
import { useState, useEffect,useRef } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Tooltip,
  Paper,
  Container,
  Grid,
  Box,
} from "@mui/material";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtns/PrimaryBtn";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { Reveal } from "@/utils/Reveal";

export default function ConversionCalculator() {
  // const [metrics, setMetrics] = useState({
  //   monthlyVisitors: "",
  //   monthlyOrders: "",
  //   averageOrderValue: "",
  //   desiredIncrease: "",
  //   monthsOfInvestment: "",
  // });

  // const [results, setResults] = useState({
  //   currentConversionRate: 0,
  //   currentAnnualRevenue: 0,
  //   orderConversionRate: 0,
  //   monthlyOrders: 0,
  //   futureAnnualRevenue: 0,
  //   monthlyInvestment: 0,
  //   roi: 0,
  // });

  // useEffect(() => {
  //   const monthlyVisitors = Number(metrics.monthlyVisitors) || 0;
  //   const monthlyOrders = Number(metrics.monthlyOrders) || 0;
  //   const averageOrderValue = Number(metrics.averageOrderValue) || 0;
  //   const desiredIncrease = Number(metrics.desiredIncrease) || 0;
  //   const monthsOfInvestment = Number(metrics.monthsOfInvestment) || 0;

  //   if (!monthlyVisitors || !monthlyOrders || !averageOrderValue) return;

  //   const currentConversionRate = (monthlyOrders / monthlyVisitors) * 100;
  //   const currentAnnualRevenue = monthlyOrders * averageOrderValue * 12;
  //   const orderConversionRate =
  //     currentConversionRate * (1 + desiredIncrease / 100);
  //   const newMonthlyOrders = Math.round(
  //     (orderConversionRate / 100) * monthlyVisitors,
  //   );
  //   const futureAnnualRevenue = newMonthlyOrders * averageOrderValue * 12;
  //   const revenueIncrease = futureAnnualRevenue - currentAnnualRevenue;
  //   const totalInvestment = monthsOfInvestment * 6250;
  //   const roi =
  //     totalInvestment > 0 ? Math.round(revenueIncrease / totalInvestment) : 0;

  //   setResults({
  //     currentConversionRate: Number(currentConversionRate.toFixed(1)),
  //     currentAnnualRevenue,
  //     orderConversionRate: Number(orderConversionRate.toFixed(1)),
  //     monthlyOrders: newMonthlyOrders,
  //     futureAnnualRevenue,
  //     monthlyInvestment: 6250,
  //     roi,
  //   });
  // }, [metrics]);

  // const handleInputChange = (field) => (e) => {
  //   const value = e.target.value;
  //   setMetrics((prev) => ({ ...prev, [field]: value }));
  // };

  // const formatCurrency = (value) => {
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     maximumFractionDigits: 0,
  //   }).format(value);
  // };

  // const InputField = ({ label, id, value, onChange, tooltip }) => (
  //   <Box sx={{ mb: 2 }}>
  //     <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
  //       <Typography variant="subtitle1" sx={{ color: "white" }}>
  //         {label}
  //       </Typography>
  //       <Tooltip title={tooltip}>
  //         <Box component="span" sx={{ display: "inline-flex", cursor: "help" }}>
  //           <AiOutlineInfoCircle />
  //         </Box>
  //       </Tooltip>
  //     </Box>
  //     <TextField
  //       fullWidth
  //       id={id}
  //       value={value}
  //       onChange={onChange}
  //       variant="outlined"
  //       size="small"
  //       type="text"
  //       inputProps={{
  //         inputMode: "numeric",
  //         autoComplete: "off",
  //         spellCheck: "false",
  //       }}
  //       sx={{
  //         py: 0.6,
  //         input: { color: "white" },
  //         "& .MuiOutlinedInput-root": {
  //           "& fieldset": { borderColor: "white" },
  //           "&:hover fieldset": { borderColor: "white" },
  //           "&.Mui-focused fieldset": { borderColor: "white" },
  //         },
  //       }}
  //     />
  //   </Box>
  // );

  // const ResultCard = ({ value, label, sx = {} }) => (
  //   <Paper
  //     elevation={1}
  //     sx={{
  //       p: 2,
  //       bgcolor: "#040117",
  //       color: "white",
  //       minHeight: { xs: 150, md: "auto" },
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       ...sx,
  //     }}
  //   >
  //     <Typography variant="h5" sx={{ fontWeight: "bold" }}>
  //       {value}
  //     </Typography>
  //     <Typography variant="body2" color="gray">
  //       {label}
  //     </Typography>
  //   </Paper>
  // );
//  const [showForm, setShowForm] = useState(false);
//   const calendlyContainerRef = useRef(null);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   useEffect(() => {
//     if (showForm) {
//       const container = calendlyContainerRef.current;

//       if (container) {
//         container.innerHTML = "";

//         const div = document.createElement("div");
//         div.className = "calendly-inline-widget";
//         // div.dataset.url = "https://calendly.com/ianpslater/20min";
//         div.style.minWidth = "500px";
//         div.style.height = "1200px";
//         container.appendChild(div);

//         const script = document.createElement("script");
//         script.type = "text/javascript";
//         // script.src = "https://assets.calendly.com/assets/external/widget.js";
//         script.async = true;
//         container.appendChild(script);
//       }
//     }
//   }, [showForm]);
  return (
    <>
     <div
        style={{
          backgroundImage: "url('/images/services_page_images/circle.png/')",
          backgroundSize: "cover",
        }}
        className="h-[43vh] z-99 -translate-y-[54%] transform md:h-[700px] md:translate-y-[-65%]"
      />
    <Container id="cal" className="relative md:-mt-[300px] md:h-[660px] h-[1200px] bottom-[380px] mt-10" maxWidth="lg" sx={{ bgcolor: "transparent", py: 6 }}>
      <div className="md:mb-8 mb-3 flex flex-col items-center justify-center text-center">
        <h2 className="mb-2 text-center poppins-medium text-2xl font-bold tracking-wide md:text-5xl">
          Calculate The Value of CRO
        </h2>
        {/* <p>Reach your revenue goals with CRO.</p> */}
        <p className="mb-8">
          Find out the ROI from conversion rate optimization with this
          calculator
        </p>
      </div>
      <div
       className="md:h-[950px] overflow-hidden h-[1281px] md:w-[1300px] w-[100%]">
       <iframe
        src="https://pulsemarketing.cloud/calculator/index.html"
        width="100%"
        height="100%"
        style={{ border: "none",  borderRadius: "10px" }}
    />
      </div>

      {/* button below calculator */}
      <div className="h-24 md:w-[93%] flex justify-center items-center w-[98%] md:-translate-y-[270%] md:mt-0 mt-5">
         <Link href={"https://calendly.com/ianpslater/20min"} target="_blank">
          <button
              className="poppins-regular hvr-ripple-out md:text-xl flex items-center justify-center rounded-full border-none text-white bg-my-blue-gradient md:px-8 px-4 md:py-4 py-3 outline-none ease-in-out"
           >
             Book your free 20 min consultation
          </button>
          </Link>
         </div>

        {/* fixed button */}
      <div className="md:inline hidden fixed bottom-36 md:bottom-5 right-3 md:left-6 z-[9999]">
        <Link href={"https://calendly.com/ianpslater/20min"} target="_blank">
        <PrimaryBtn text={"Get My Free CRO Blueprint"} />
        </Link>
      </div>
       {/* {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-50">
                  <div className="relative h-[70vh] flex items-center w-full max-w-2xl rounded-lg bg-white p-6 md:w-[85%] lg:w-[65%]">
                    <div
                      onClick={toggleForm}
                      className="absolute right-3 top-2 cursor-pointer px-2 text-2xl font-bold text-blue-500"
                    > */}
                      {/* <IoCloseSharp /> */}
                    {/* </div> */}
                    {/* <h2 className="mb-4 text-xl">Schedule Your Meeting</h2> */}
                    {/* <div
                      className="h-[60vh] overflow-x-auto overflow-y-auto sm:overflow-x-hidden"
                      ref={calendlyContainerRef}
                    ></div> */}
                     {/* <form action="" className="flex flex-col">
                      <label className="text-black-2 text-xl" htmlFor="name">Name:</label><br />
                      <input className="md:w-[600px]" type="name" />

                       <label className="text-black-2 text-xl" htmlFor="email">Email:</label><br />
                      <input className="md:w-[600px]" type="email" />
                    </form>
                  </div>
                </div>
        )} */}
      {/* <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "transparent", color: "white" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Current Site Metrics
              </Typography>
              <InputField
                label="Number of Monthly Visitors"
                id="monthlyVisitors"
                value={metrics.monthlyVisitors}
                onChange={handleInputChange("monthlyVisitors")}
                tooltip="Total number of visitors to your site per month"
              />
              <InputField
                label="Number of Monthly Orders"
                id="monthlyOrders"
                value={metrics.monthlyOrders}
                onChange={handleInputChange("monthlyOrders")}
                tooltip="Total number of orders received per month"
              />
              <InputField
                label="Average Order Value"
                id="averageOrderValue"
                value={metrics.averageOrderValue}
                onChange={handleInputChange("averageOrderValue")}
                tooltip="Average value of each order"
              />
              <InputField
                label="Desired Increase to Conversion (%)"
                id="desiredIncrease"
                value={metrics.desiredIncrease}
                onChange={handleInputChange("desiredIncrease")}
                tooltip="Target percentage increase in conversion rate"
              />
              <InputField
                label="Number of Months of Investment"
                id="monthsOfInvestment"
                value={metrics.monthsOfInvestment}
                onChange={handleInputChange("monthsOfInvestment")}
                tooltip="Duration of investment in months"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "#1c192c" }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                Results
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" color="#087bb9" sx={{ mb: 2 }}>
                  Current Metrics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <ResultCard
                      value={`${results.currentConversionRate}%`}
                      label="Current Conversion Rate"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultCard
                      value={formatCurrency(results.currentAnnualRevenue)}
                      label="Current Annual Revenue"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" color="#087bb9" sx={{ mb: 2 }}>
                  Growth Metrics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <ResultCard
                      value={`${results.orderConversionRate}%`}
                      label="Order Conversion Rate"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultCard
                      value={results.monthlyOrders}
                      label="Monthly Orders"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultCard
                      value={formatCurrency(results.futureAnnualRevenue)}
                      label="Future Annual Revenue"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultCard
                      value={formatCurrency(results.monthlyInvestment)}
                      label="Monthly Investment"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  background:
                    "linear-gradient(90deg, #50A2D4 0%, #0077B6 100%)",
                  color: "warning.contrastText",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {results.roi}X
                </Typography>
                <Typography>Return on Investment</Typography>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </Container>
    </>
  );
}
