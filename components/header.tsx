import { FC } from "react"
import { AccountCircle } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"

export const Header: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 'inherit' }}
    >
      <Toolbar
        sx={{
          justifyContent: 'flex-end',
          backgroundColor: 'white'
        }}>
        <Box alignItems="flex-end">
          <IconButton
            size="large"
            color="default"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}