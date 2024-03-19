import { Box, Button, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" sx={{ mb: 3 }}>
            Sorry, page not found!
          </Typography>

          <Button href="/" size="large" variant="contained">
            Go to Home
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NotFoundPage;