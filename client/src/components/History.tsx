import HistoryCard from './HistoryCard.tsx'
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import type {AnalyzeResponse} from "../types/types.ts";

interface HistoryProps {
  history: AnalyzeResponse[]
  onEdit: (item: AnalyzeResponse) => void
}

const History = ({ history, onEdit }: HistoryProps) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Past analyses ({history.length})
      </Typography>
      {history.length === 0 ?
        (
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            No past analyses yet.
          </Typography>
        ) :
        (
          <>
            <Stack spacing={2} direction="row">
              {history.map((item, index) => (
                <HistoryCard
                  key={index}
                  data={item}
                  onEdit={onEdit}
                />
              ))}
            </Stack>
          </>
        )}
    </Stack>
  )
}

export default History