import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Divider, Paper, Rating, Typography } from "@mui/material";
import { IProduct, ProductsJSON } from "../db";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | undefined>(() =>
    ProductsJSON.find(
      (product) => product.id === (id ? parseInt(id, 10) : undefined)
    )
  );
  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 1,
    minutes: 12,
    seconds: 12,
  });

  useEffect(() => {
    if (id) {
      const foundProduct = ProductsJSON.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBox: React.FC<{ value: number; label: string }> = ({
    value,
    label,
  }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        {value.toString().padStart(2, "0")}
      </Typography>
      <Typography variant="caption">{label}</Typography>
    </Box>
  );

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Box>
      <Typography fontWeight="bold" fontSize={18}>
        {product.description}
      </Typography>
      <Box sx={{ display: "flex", my: 1 }}>
        <Paper sx={{ p: "5px" }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              borderRadius: "5px",
              height: 300,
              width: 300,
              objectFit: "cover",
            }}
          />
        </Paper>
        <Box sx={{ flexGrow: 1, ml: 2 }}>
          <Typography fontWeight="bold" px={2}>
            Ends in
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <TimerBox value={timeLeft.days} label="Days" />
            <TimerBox value={timeLeft.hours} label="Hours" />
            <TimerBox value={timeLeft.minutes} label="Minutes" />
            <TimerBox value={timeLeft.seconds} label="Seconds" />
          </Box>
          <Divider />
          <Box padding={2}>
            <Typography fontWeight="bold">Hosted by</Typography>
            <Box display="flex" gap={1} alignItems="center">
              <img
                src={product.imageUrl || "https://via.placeholder.com/50"}
                alt={product.seller || "Seller"}
                height={50}
                width={50}
                style={{ borderRadius: "50%" }}
              />
              <Box>
                <Typography color="GrayText">@{product.seller}</Typography>
                <Typography color="GrayText">{product.seller}</Typography>
                <Typography color="GrayText">
                  1 raffle - 0 previous winners
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box p={2}>
            <Typography>Price: ${product.price.toFixed(2)}</Typography>
            <Button variant="contained" color="success" sx={{ mt: 1 }}>
              Enter Now
            </Button>
          </Box>
          <Box px={2} display="flex" alignItems="center" gap={1}>
            <Typography fontWeight="bold" fontSize={18}>
              Rating {product.rating.toFixed(1)}
            </Typography>
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.1}
            />
            <Typography color="GrayText">
              ({product.reviews} reviews)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
