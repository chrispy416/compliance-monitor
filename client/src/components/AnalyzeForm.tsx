import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

interface AnalyzeFormProps {
  onSubmit: (action: string, guideLine: string) => void
  isLoading: boolean
  action: string,
  guideLine: string,
  onActionChange: (value: string) => void
  onGuideLineChange: (value: string) => void
}

const AnalyzeForm = ({ onSubmit, isLoading, action, guideLine, onActionChange, onGuideLineChange }: AnalyzeFormProps) => {

  const handleSubmit = () => {
    if(!action.trim()) {
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
        id="action-input"
        label="Action"
        multiline
        rows={4}
        value={action}
        onChange={(e) => onActionChange(e.target.value)}
      />
      <TextField
        id="guideline-input"
        label="Guideline"
        multiline
        rows={4}
        value={guideLine}
        onChange={(e) => onGuideLineChange(e.target.value)}
      />
      <Button onClick={handleSubmit} loading={isLoading} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  )
}

export default AnalyzeForm