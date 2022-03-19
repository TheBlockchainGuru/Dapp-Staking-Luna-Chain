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
  font-family: IBM Plex Sans, sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  color: #666566;

  &:hover {
    color: #FFFFFF;
  }

  &:focus {
    border-radius: 12px 12px 0px 0px;
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #eeefee;
    color: #000000;
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
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  align-content: space-between;
`;

const pages = [
  { title: 'DASHBOARD', route: '/' }, 
  { title: 'MY PAGE', route: '/mypage' },
  { title: 'EARN', route: 'earn' }, 
  { title: 'TTUST', route: 'ttust' }
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
    <AppBar position="fixed" sx={{ bgcolor: '#000000', boxShadow: 'none' }}>
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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <TabsUnstyled defaultValue={'DASHBOARD'}>
                <Box sx={{ flexGrow: 1, pb: 1, pt: 2, display: { xs: 'none', md: 'block' } }} >
                  <img src={LogoImage} style={{ verticalAlign: 'middle' }} />
                </Box>
                <TabsList>
                {pages.map((page) => (
                  <Link to={page.route} style={{ textDecoration: 'none' }}>
                    <Tab
                      value={page.title}
                      key={page.title}
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
                  <AccountBalanceWalletOutlinedIcon sx={{ color: '#4ada4a !important' }} />
                </>
              } 
              clickable={true}
              onClick={onConnect}
              label="Connect Wallet"  
              variant="outlined" 
              sx={{ color: '#4ada4a', py: '20', borderColor: '#4ada4a', px: 2, mb: 1 }} 
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
