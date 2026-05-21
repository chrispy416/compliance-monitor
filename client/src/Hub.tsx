import './Hub.css'
import AnalyzeForm from "./components/AnalyzeForm.tsx";
import History from "./components/History.tsx"
import Results from "./components/Results.tsx"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useAnalyze } from './hooks/useAnalyze'

const Hub = () => {
  const { result, isLoading, error, analyze } = useAnalyze();

  const handleSubmit = async (action: string, guideline: string) => {
    await analyze({ action, guideline});
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Compliance Monitor
      </Typography>
      <Grid container spacing={2} rowSpacing={4} columns={16}>
        <Grid size={6}>
          <AnalyzeForm onSubmit={handleSubmit} isLoading={isLoading}/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={6}>
          <Results data={result} />
        </Grid>
        <Grid size={12}>
          <History />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hub
