import { FC, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, ListItemButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Page } from "../src/types";

const RouterLink = forwardRef(({ href, ...other }: any, ref) => <Link ref={ref} to={href} {...other} />);

export const NavItem: FC<{ item: Page }> = ({ item }) => {
  const { pathname } = useLocation();
  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        borderRadius: 1,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        minHeight: 40,
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span">{item.title}</Box>
    </ListItemButton>
  );
}
