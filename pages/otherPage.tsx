import { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const OtherPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Other</title>
      </Helmet>

      <Container
        sx={{ px: 1 }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5">Other page</Typography>
        </Stack>
      </Container>
    </>
  );
}

export default OtherPage;