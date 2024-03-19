import React, { FC, useEffect, useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { fetchPokemonData } from "../../api/pokemon";
import { Order } from "../../src/constants";
import { getApiLink, getComparator, uniqBy } from "../../src/utils";
import { TableHeadComponent } from "./tableHead";
import { PokemonTableRow } from "./tableRow";
import { TableEmptyRows } from "./emptyRow";
import { PokemonData } from "../../src/types";

export const TableComponent: FC = () => {
  const [loadingData, setLoadingData] = useState(true);

  const [totalCount, setTotalCount] = useState(0);

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof PokemonData>('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [data, setData] = useState<PokemonData[]>([]);

  useEffect(() => {
    setLoadingData(true);
    const offset = page * rowsPerPage;
    const url = getApiLink(offset, rowsPerPage);

    fetchPokemonData(url)
      .then(d => {
        const { count, data: fetchedData } = d;
        const nextData = uniqBy([...data, ...fetchedData], (d) => d.id);
        setTotalCount(count);
        setData(nextData);
      })
      .catch(e => console.log('Something went wrong', e))
      .finally(() => setLoadingData(false));
  }, [page, rowsPerPage]);

  const onSortTable = (_, property: keyof PokemonData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const onChangePage = (_, newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows = useMemo(
    () => page > 0 ? Math.max(0, (1 + page) * rowsPerPage - totalCount) : 0,
    [page, rowsPerPage, totalCount]
  );

  const visibleRows = useMemo(
    () => data.sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, data],
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
          stickyHeader
        >
          <TableHeadComponent
            order={order}
            orderBy={orderBy}
            sortHandler={onSortTable}
          />
          <TableBody>
            {loadingData ? (
              <TableRow>
                <TableCell colSpan={6}>Loading data</TableCell>
              </TableRow>) : visibleRows.map((row) => <PokemonTableRow row={row} key={row.id} />)}

            {emptyRows > 0 && (
              <TableEmptyRows emptyRows={emptyRows} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
    </Paper >
  );
}