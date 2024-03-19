import React, { FC } from "react";
import {
  Box,
  Stack,
} from "@mui/material";
import { NavItem } from "../components/navItem";
import { Header } from "../components/header";
import { pages } from "../src/constants";

import Logo from "../public/pokemon-icon.svg";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: 1,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: 280,
        }}
      >
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: 280,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Box sx={{ marginLeft: '16px' }}>
            <Logo />
          </Box>

          <Stack component="nav" spacing={0.5} sx={{ px: 2, my: 2 }}>
            {pages.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </Stack>

        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          width: 'calc(100% - 280px)',
        }}
      >
        <Header />
        {children}
      </Box>
    </Box>
  );
};
