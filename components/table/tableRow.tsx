import { FC, useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  Collapse,
  IconButton,
  Stack,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { StyledTableCell } from "./shared";
import { PokemonData } from "../../src/types";

export const PokemonTableRow: FC<{ row: PokemonData }> = ({ row }) => {
  const { name, avatarUrl, height, weight, experience, abilities } = row;
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        hover
        role="checkbox"
        className="rows"
        tabIndex={-1}
        key={row.id}
        sx={{ cursor: 'pointer' }}
      >
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </StyledTableCell>
        <StyledTableCell align="right">{weight}</StyledTableCell>
        <StyledTableCell align="right">{height}</StyledTableCell>
        <StyledTableCell align="right">{experience}</StyledTableCell>

        <StyledTableCell>
          {abilities.map((a, index) => <Chip key={index} label={a} />)}
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Statistic
              </Typography>
              {row.stats.map(s => (
                <Typography variant="h6">
                  {s.name}: {s.value}
                </Typography>
              ))}
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </>
  );
}