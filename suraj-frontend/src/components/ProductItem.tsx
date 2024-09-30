import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <Paper elevation={3} sx={{ width: 300, height: "auto", padding: "10px" }}>
      <Link to={"/details/fasfd"}>
        <Typography
          variant={"subtitle1"}
          color="green"
          paddingBottom={1}
          fontWeight={"bold"}
        >
          Australian Opal 30 Carat Bundle!!!
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="girl"
          />
          <Typography sx={{ fontWeight: "bold", color: "GrayText" }}>
            Opal World
          </Typography>
        </Box>
        <Box
          height={200}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          paddingTop={"10px"}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="girl"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mt={2}>
          <Box color={"GrayText"}>
            <Typography>Ends in</Typography>
            <Typography>12 Days</Typography>
          </Box>
          <Box>
            <Typography color={"GrayText"}>Ticket Price</Typography>
            <Typography color="green" fontWeight={"bold"}>
              $0.50
            </Typography>
          </Box>
        </Box>
      </Link>
    </Paper>
  );
}

export default ProductItem;
