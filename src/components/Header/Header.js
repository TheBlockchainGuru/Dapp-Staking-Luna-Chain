import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import {
    IconButton,
    Menu, 
    Container,
    MenuItem,
    Toolbar,
    Box,
    AppBar,
    Typography,
    Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  cursor: pointer;
  font-family: SF pro;
  font-size: 20px;
  font-weight: 860;
  line-height: 120%;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 20px;
  display: flex;
  color: #666566;

  &:hover {
    color: #FFFFFF;
  }

  &:focus {
    border-radius: 20px;
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #212121;
    color: #FFFFFF;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 480px;
  background-color: #0B0B0B;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  align-content: space-between;
`;

const pages = [
  { title: 'DASHBOARD', route: '/' }, 
  { title: 'MY PAGE', route: '/mypage' },
  { title: 'EARN', route: 'earn' }, 
  { title: 'UTILITY +', route: 'utility' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [value, setValue] = React.useState('DASHBOARD');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const onConnect = () => {
    
  }

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#0B0B0B', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'flex-end' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, pt: 6.25 }}>
              <TabsUnstyled defaultValue={'DASHBOARD'}>
                <TabsList>
                {pages.map((page) => (
                  <Link key={page.title} to={page.route} style={{ textDecoration: 'none' }}>
                    <Tab
                      value={page.title}
                      label={page.title}
                      sx={{ color: '#656665', fontSize: 16, fontWeight: 700 }} 
                      // onClick={handleCloseNavMenu}
                      // sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.title}
                    </Tab>
                  </Link>
                ))}
                </TabsList>
              </TabsUnstyled>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Chip 
              icon={
                <>
                  <AccountBalanceWalletOutlinedIcon sx={{ color: '#F9D85E !important', fontSize: 20 }} />
                </>
              } 
              clickable={true}
              onClick={onConnect}
              label="Connect Wallet"  
              variant="outlined" 
              sx={{ color: '#F9D85E', py: 1.5, borderColor: '#F9D85E', px: 2.5, mb: 1 }} 
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
