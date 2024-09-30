import { Box, Button, Divider, Paper, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function ProductDetailsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 22,
    hours: 1,
    minutes: 12,
    seconds: 12,
  });

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
  const TimerBox = ({ value, label }: { value: number; label: string }) => (
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
  return (
    <Box>
      <Typography fontWeight={"bold"} fontSize={18}>
        Enter Raffle to win your wedding dressed framed by the beautiful frame
      </Typography>
      <Box sx={{ display: "flex", my: 1 }}>
        <Paper sx={{ p: "5px" }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="dress"
            style={{ borderRadius: "5px", height: 300 }}
          />
        </Paper>
        <Box>
          <Typography fontWeight={"bold"} px={2}>
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
            <Typography fontWeight={"bold"}>Hosted by</Typography>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <img
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="dress-pic"
                height={50}
                width={50}
                style={{ borderRadius: "100%" }}
              />
              <Typography color={"GrayText"}>
                <Typography>@beautyfulco</Typography>
                <Typography>The Beautiful frame company</Typography>
                <Typography>1 raffle - 0 previous winners</Typography>
              </Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Typography>Price: $1.00</Typography>
            <Button variant="contained" color={"success"}>
              Enter Now
            </Button>
          </Box>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            px={2}
          >
            <Typography fontWeight={"bold"} fontSize={18}>
              Rating 0{" "}
            </Typography>
            <Rating
              name="simple-controlled"
              value={3}
              sx={{ paddingBottom: "2px" }}
              //   onChange={(event, newValue) => {
              //     setValue(newValue);
              //   }}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
