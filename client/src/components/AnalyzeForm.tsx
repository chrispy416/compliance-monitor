import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

const AnalyzeForm = () => {

  return (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Analyze
      </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Action"
        multiline
        rows={4}
      />
      <TextField
        id="outlined-multiline-static"
        label="Guideline"
        multiline
        rows={4}
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  )
}

export default AnalyzeForm