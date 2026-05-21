import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ResultCard from "./ResultCard.tsx";

const Results = ({ data }) => {
  return(
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Results
      </Typography>
      {data ?
        (
          <>
            <Typography variant="subtitle2" gutterBottom>
              {new Date(data.timestamp).toLocaleString()}
            </Typography>
            <Stack spacing={2} direction="row">
              <ResultCard label="Confidence" value={data.confidence}/>
              <ResultCard label="Analysis result" value={data.result}/>
            </Stack>
            <TextField
              id="results-inputed-values"
              multiline
              rows={4}
              value={`action: ${data.action}\nguideline: ${data.guideline}`}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </>
        ):
        (
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Submit an analysis to see results.
          </Typography>
        )
      }

    </Stack>
  )
}

export default Results