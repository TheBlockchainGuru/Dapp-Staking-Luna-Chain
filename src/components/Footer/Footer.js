import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Stack, Typography, Container } from '@mui/material';

const Footer = () => {
    return(
        <Container maxWidth="xl" sx={{ m: 0, py: 8 }}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Stack flexDirection="row" gap={4}>
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                        <Box sx={{ width: 12, height: 12, borderRadius: 12, bgcolor: '#76d75f' }}></Box>
                        <Typography fontSize={14} color="#b3b3b4">Latest Block: 6860886</Typography>
                    </Stack>
                    <Typography fontSize={14} color="#b3b3b4">Terms</Typography>
                </Stack>
                <Stack flexDirection="row" gap={5}>
                    <TwitterIcon sx={{ color: "#b3b3b4" }} />
                    <TelegramIcon sx={{ color: "#b3b3b4" }} />
                    <GitHubIcon sx={{ color: "#b3b3b4" }} />
                    <SettingsOutlinedIcon sx={{ color: "#b3b3b4" }} />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Footer;