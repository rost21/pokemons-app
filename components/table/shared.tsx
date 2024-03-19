import { TableCell, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F4F6F8',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));