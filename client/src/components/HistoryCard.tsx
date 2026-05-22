import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Card from "@mui/material/Card";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import type {AnalyzeResponse} from "../types/types.ts";

interface HistoryCardProps {
  data: AnalyzeResponse
  onEdit: (item: AnalyzeResponse) => void
}
const HistoryCard = ({ data, onEdit }: HistoryCardProps) => {
  const { action, guideline, result, confidence, timestamp} = data;
  const chipColor = result === "COMPLIES" ? "success" : result === "DEVIATES" ? "error" : "warning";
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Stack spacing={2} direction="column">
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {new Date(timestamp).toLocaleString()}
          </Typography>
          <Chip label={result} color={chipColor} />
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {`Confidence: ${confidence}`}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
            {`action: ${action}`}
          </Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {`guideline: ${guideline}`}
          </Typography>
          <Button onClick={() => onEdit(data)} variant="contained" endIcon={<EditIcon />}>
            Edit
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default HistoryCard