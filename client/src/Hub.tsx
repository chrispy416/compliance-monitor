import './Hub.css'
import AnalyzeForm from "./components/AnalyzeForm.tsx";
import History from "./components/History.tsx"
import Results from "./components/Results.tsx"
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useAnalyze } from './hooks/useAnalyze'
import { useHistory } from './hooks/useHistory.ts'
import type {AnalyzeResponse} from "./types/types.ts";
import {useState} from "react";

const Hub = () => {
  const { result, isLoading, analyze } = useAnalyze();
  const { history, addToHistory } = useHistory();
  const [action, setAction] = useState('');
  const [guideLine, setGuideLine] = useState('');


  const handleSubmit = async (action: string, guideline: string) => {
    const data = await analyze({ action, guideline});
    if(data) {
      addToHistory(data);
    }
  }

  const handleEdit = (item: AnalyzeResponse) => {
    setAction(item.action);
    setGuideLine(item.guideline);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Compliance Monitor
      </Typography>
      <Grid container spacing={2} rowSpacing={4} columns={16}>
        <Grid size={6}>
          <AnalyzeForm
            action={action}
            guideLine={guideLine}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            onActionChange={setAction}
            onGuideLineChange={setGuideLine}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={6}>
          <Results data={result} />
        </Grid>
        <Grid size={12}>
          <History history={history} onEdit={handleEdit}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hub
