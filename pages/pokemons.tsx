import { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { TableComponent } from "../components/table/table";

const PokemonsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Pokemons</title>
      </Helmet>

      <Container
        sx={{ px: 1 }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h5">Pokemons</Typography>
        </Stack>

        <TableComponent />
      </Container>
    </>
  );
}

export default PokemonsPage;