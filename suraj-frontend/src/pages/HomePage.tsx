import { Box } from "@mui/material";
import ProductItem from "../components/ProductItem";

function HomePage() {
  return (
    <Box display={"flex"} gap={4}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Box>
  );
}

export default HomePage;
