import { Box, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { errorHeader, errorSubHeader } from "../../values/values";

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  // console.log(error);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h1" component="h1">
          {errorHeader}
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">{errorSubHeader}</Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;
