import { Box, Chip, Stack, Typography, Slider } from "@mui/material";

const StakeBox = () => {
    return (
        <Box bgcolor="#f3f3f5" borderRadius="20px" flex="auto" p={4}>
            <Stack>
                <Typography fontWeight={700} fontSize={24}>UST</Typography>
            </Stack>
            <Stack>
                <Typography fontSize={12}>INTEREST</Typography>
            </Stack>
            <Stack alignItems="center">
                <Chip label="APY" sx={{ bgcolor: '#FFFFFF', px: 2 }} />
            </Stack>
            <Typography fontSize={48} fontWeight={700} textAlign="center" pt={1} color="#4ada4b">34.87%</Typography>
            <Slider 
                defaultValue={50} 
                aria-label="Default" 
                valueLabelDisplay="auto"
                sx={{
                    color: '#76d75f',
                    py: 20,
                    '& .MuiSlider-rail': {
                        opacity: 0,
                    }
                }}
            />
            <Stack alignItems="center">
                <Chip label="STAKE UST NOW!" 
                    clickable={true}
                    sx={{ 
                        bgcolor: '#2c2c2c', 
                        color: '#FFFFFF', 
                        px: 2,
                        fontSize: 10,
                        px: 12,
                    }} />
            </Stack>
        </Box>
    );
}

export default StakeBox;