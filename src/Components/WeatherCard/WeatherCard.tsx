import { Box, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

import React from 'react'

interface WeatherCardProps {
  label: string
  value: string
  icon: string
  helpText: string
}

export const WeatherCard = ({ label, value, icon, helpText }: WeatherCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="3" boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>
          <img src={icon} alt={helpText}/>
          {helpText}
        </StatHelpText>
      </Stat>
    </Box>
  )
}
