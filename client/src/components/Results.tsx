import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Results = () => {
  return(
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Results
      </Typography>
      <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Confidence
            </Typography>
            <Typography variant="h5" component="div">
              96%
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Top Label
            </Typography>
            <Typography variant="h5" component="div">
              complies
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <TextField
        id="results-inputed-values"
        multiline
        rows={4}
        value="hello"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
    </Stack>
  )
}

export default Results