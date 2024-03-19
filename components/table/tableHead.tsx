import { FC } from "react";
import { Box, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { StyledTableCell } from "./shared";
import { Order, headCells } from "../../src/constants";
import { PokemonData } from "../../src/types";

interface TableHeadProps {
  sortHandler: (event: React.MouseEvent<HTMLSpanElement>, prop: keyof PokemonData) => void;
  order: Order;
  orderBy: string;
}

export const TableHeadComponent: FC<TableHeadProps> = ({ order, orderBy, sortHandler }) => {
  const handleSort = (prop: keyof PokemonData) => (event: React.MouseEvent<HTMLSpanElement>) => {
    sortHandler(event, prop);
  };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.align || (headCell.numeric ? 'right' : 'left')}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: 'bold' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={handleSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}