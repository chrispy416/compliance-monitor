import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

const AnalyzeForm = ({ onSubmit, isLoading }) => {
  const [action, setAction] = useState('');
  const [guideLine, setGuideLine] = useState('');

  const handleSubmit = () => {
    if(!action.trim() || !guideLine.trim()) {
      return
    }
    onSubmit(action.trim(), guideLine.trim());
  }
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
        value={action}
        onChange={(e) => setAction(e.target.value)}
      />
      <TextField
        id="outlined-multiline-static"
        label="Guideline"
        multiline
        rows={4}
        value={guideLine}
        onChange={(e) => setGuideLine(e.target.value)}
      />
      <Button onClick={handleSubmit} loading={isLoading} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  )
}

export default AnalyzeForm