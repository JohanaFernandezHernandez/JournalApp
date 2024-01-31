import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0}}}
        
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant= 'h6' noWrap component='div'>
                    Johana Fernandez
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero', 'Fevrero', 'Marzo', 'Abril', 'Mayo'].map(text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText secondary={ 'Ut consectetur sint id fugiat ' }/>
                                    </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
    
  )
}
