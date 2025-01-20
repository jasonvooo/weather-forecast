import { StatHelpText, StatLabel, StatValueText, StatRoot } from '@/components/ui/stat'
import { Box } from '@chakra-ui/react'

interface WeatherCardProps {
  label: string
  value: string
  icon: string
  helpText: string
}

export const WeatherCard = ({ label, value, icon, helpText }: WeatherCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding="3" boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)">
      <StatRoot>
        <StatLabel>{label}</StatLabel>
        <StatValueText>{value}</StatValueText>
        <StatHelpText>
          <img src={icon} alt={helpText} />
          {helpText}
        </StatHelpText>
      </StatRoot>
    </Box>
  )
}
