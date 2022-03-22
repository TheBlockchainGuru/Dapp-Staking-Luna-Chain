import { Box, Chip, Stack, Typography, Slider, Divider } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const StakeBox = (props) => {
    return (
        <Box bgcolor="#212121" pt={3.5} pb={4.5} px={6} borderRadius={3} flex="auto">
            <Stack flexDirection="row" alignItems="center" gap={1}>
                <img src={props.image} style={{ width: 80, height: 80 }} />
                <Box>
                    <Typography component="div" fontFamily="SF Pro" lineHeight="unset" fontWeight={860} fontSize={36} color="#FFFFFF">UST</Typography>
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                        <Typography fontFamily="SF Pro" fontWeight={860} fontSize={13} color="#CEC0C0" textTransform="uppercase" lineHeight="unset">Interest</Typography>
                        <ErrorOutlineIcon sx={{ fontSize: 16, color: "#CEC0C0" }} />
                    </Stack>
                </Box>
            </Stack>
            <Stack alignItems="center" pt={4.5}>
                <Chip label="APY" sx={{ bgcolor: '#493C3C', color: '#CEC0C0', px: 2.5, fontSize: 13 }} />
            </Stack>
            <Stack alignItems="center" justifyContent="center" flexDirection="row" pt={2} gap={1}>
                <Typography fontFamily="SF Pro" fontSize={36} fontWeight={860} textAlign="center" lineHeight="unset" color="#FFFFFF">{ props.percent }</Typography>
                <Typography fontFamily="SF Pro" fontSize={36} fontWeight={860} textAlign="center" lineHeight="unset" color="#FFFFFF">%</Typography>
            </Stack>
            <Slider 
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto"
                sx={{
                    color: '#F9D85E',
                    py: 20,
                    '& .MuiSlider-rail': {
                        // opacity: 0,
                    }
                }}
            />
            <Divider sx={{ borderColor: '#434040' }} />
            <Stack alignItems="center" pt={4}>
                <Chip label={"Stake your " + props.title + " now!"}
                    clickable={true}
                    sx={{ 
                        bgcolor: '#493C3C', 
                        color: '#FFFFFF', 
                        fontSize: 13,
                        px: 12,
                        py: 3,
                        borderRadius: 40,
                        textTransform: 'uppercase'
                    }} />
            </Stack>
        </Box>
    );
}

export default StakeBox;