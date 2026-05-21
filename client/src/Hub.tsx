import './Hub.css'
import AnalyzeForm from "./components/AnalyzeForm.tsx";
import Results from "./components/Results.tsx"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Hub = () => {

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Compliance Monitor
      </Typography>
      <Grid container spacing={2} rowSpacing={4} columns={16}>
        <Grid size={6}>
          <AnalyzeForm/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={6}>
          <Results />
        </Grid>
        <Grid size={12}>
          History
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hub
