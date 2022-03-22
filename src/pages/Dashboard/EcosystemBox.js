import { Stack, Box, Typography, Chip } from "@mui/material";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random() * 1000),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random() * 1000),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const EcosystemBox = () => {
    return (
      <Box bgcolor="#212121" pt={7.5} pb={8} px={6} borderRadius={3}>
            <Stack flexDirection="row" alignItems="center">
                <Typography fontWeight="900" fontSize={20} color="#FFFFFF" textTransform="uppercase" fontFamily="SF Pro">Tvl of the entire ecosystem</Typography>
            </Stack>
            <Box>
                <Line options={options} data={data} />
            </Box>
        </Box>
    )
}

export default EcosystemBox;