import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";

export const TableEmptyRows: FC<{ emptyRows: number }> = ({ emptyRows }) => {
  return (
    <TableRow
      style={{
        height: 65 * emptyRows,
      }}
    >
      <TableCell colSpan={6} />
    </TableRow>
  );
}