import { Box } from "@mui/material";
import ProductItem from "../components/ProductItem";
import { ProductsJSON } from "../db";

function HomePage() {
  return (
    <Box display={"flex"} gap={4}>
      {ProductsJSON.map((item, index) => (
        <ProductItem key={index} product={item} />
      ))}
    </Box>
  );
}

export default HomePage;
