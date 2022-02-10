import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import dynamic from "next/dynamic";

import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { // This method is used to make lazy load, so the import/load will be done dynamically
  ssr: false // from the moment this option passes as 'false' the import/ loading will only be done on the browser side and never by the server side, ie the server-side render is turned off
});

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const options: ApexOptions  = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 51, 18, 109]
  }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> {/* 'flex=1' indicates that the element will occupy the remaining width/is available, in which case 'SimpleGrid' will occupy the width left over from the 'Sidebar' */}
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}