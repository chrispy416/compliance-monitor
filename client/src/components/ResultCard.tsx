import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

interface ResultsCardProp {
  label: string
  value: number | string
}

const ResultCard = ({ label, value }: ResultsCardProp) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {label}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ResultCard