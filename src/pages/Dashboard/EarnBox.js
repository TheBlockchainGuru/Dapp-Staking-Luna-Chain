import * as React from 'react';
import {
    Box,
    Divider,
    InputLabel,
    FormControl,
    FilledInput,
    FormHelperText,
    MenuItem,
    Typography,
    Select,
    Stack,
    Slider,
    TextField
} from '@mui/material';

const EarnBox = () => {
    const [luna, setLuna] = React.useState('LUNA');
    const [amount, setAmount] = React.useState(1000000);

    const onChangeLuna = (event) => {
        setLuna(event.target.value);
    };

    const onChangeAmount = (event) => {
        setAmount(event.target.value);
    }

    return (
        <Box bgcolor="#212121" pt={3.5} pb={4.5} px={6} borderRadius={3} flex="auto">
            <Typography fontFamily="SF Pro" fontWeight={860} fontSize={20} color="#FFFFFF" textTransform="uppercase">How much can I earn?</Typography>
            <Stack flexDirection="row" pt={3}>
                <Stack flex="1 0 30%" pt={7} gap={2}>
                    <FormControl variant="standard"
                        sx={{ 
                            minWidth: 200, 
                            '& svg': {
                                color: '#FFFFFF'
                            }
                        }}
                    >
                        <Select
                            value={luna}
                            onChange={onChangeLuna}
                            autoWidth
                            displayEmpty
                            sx={{ color: '#FFFFFF', 
                                '&>div': {
                                    fontSize: 20
                                },
                                '&::before': {
                                    borderBottomColor: '#FFFFFF'
                                },
                                '&:hover': {
                                    borderBottomColor: '#FFFFFF'
                                }
                            }}
                        >
                            <MenuItem value="LUNA">LUNA</MenuItem>
                            <MenuItem value="UST">UST</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: "#CEC0C0", fontSize: 9 }}>Your Deposit</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" 
                        sx={{
                            bgcolor: 'transparent', 
                            minWidth: 120 ,
                        }}
                    >
                        <TextField
                            hiddenLabel
                            defaultValue="Small"
                            value={amount}
                            onChange={onChangeAmount}
                            variant="filled"
                            size="small"
                            sx={{
                                '&>div': {
                                    fontSize: 20,
                                },
                                '&>div::before': {
                                    borderBottomColor: '#FFFFFF'
                                },
                                '& input': {
                                    bgcolor: '#212121',
                                    color: '#FFFFFF',
                                    px: 0
                                }
                            }}
                        />
                        <FormHelperText sx={{ color: "#CEC0C0", fontSize: 9 }}>Amount in UST</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ pt: 3 }}>
                        <Typography fontSize={20} fontFamily="SF Pro" color="#FFFFFF" fontWeight={860}>10 Years</Typography>
                        <Slider
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            sx={{
                                color: '#F9D85E',
                            }}
                        />
                    </FormControl>
                </Stack>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: '#5C5353', pl: 4.5 }} />
                <Stack flex="1 0 70%" flexDirection="row" pl={4.5} pt={7}>
                    <Stack gap={2}>
                        <FormControl>
                            <Typography fontSize={36} fontWeight={860} color="#FFFFFF" lineHeight={1.25} fontFamily="SF Pro">$148,700</Typography>
                            <Typography fontSize={9} fontWeight={860} color="#CEC0C0" fontFamily="SF Pro">Interest Earned</Typography>
                        </FormControl>
                        <FormControl>
                            <Typography fontSize={36} fontWeight={860} color="#FFFFFF" lineHeight={1.25} fontFamily="SF Pro">$448,700</Typography>
                            <Typography fontSize={9} fontWeight={860} color="#CEC0C0" fontFamily="SF Pro">Total</Typography>
                        </FormControl>
                        <FormControl
                            sx={{
                                display: 'flex',
                                gap: 1,
                                pt: 1
                            }}
                        >
                            <Stack flexDirection="row" alignItems="center" gap={.5}>
                                <Box width={10} borderRadius={.25} height={10} bgcolor="#F9D85E"></Box>
                                <Typography fontSize={9} fontWeight={860} color="#CEC0C0" fontFamily="SF Pro">TT Performance</Typography>
                            </Stack>
                            <Stack flexDirection="row" alignItems="center" gap={.5}>
                                <Box width={10} borderRadius={.25} height={10} bgcolor="#000000"></Box>
                                <Typography fontSize={9} fontWeight={860} color="#CEC0C0" fontFamily="SF Pro">TT Performance</Typography>
                            </Stack>
                        </FormControl>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default EarnBox;