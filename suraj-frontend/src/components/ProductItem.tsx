import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IProduct } from "../db";

function ProductItem({ product }: { product: IProduct }) {
  return (
    <Paper elevation={3} sx={{ width: 300, height: "auto", padding: "10px" }}>
      <Link to={`/details/${product.id}`}>
        <Typography
          variant={"subtitle1"}
          color="green"
          paddingBottom={1}
          fontWeight={"bold"}
        >
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            src={product.imageUrl}
            alt={product.seller}
          />
          <Typography sx={{ fontWeight: "bold", color: "GrayText" }}>
            {product.name}
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
            src={product.imageUrl}
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
              ${product.price}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Paper>
  );
}

export default ProductItem;
