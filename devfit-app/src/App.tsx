import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnalysisProvider } from '@/context/AnalysisContext';
import { HomePage, ResultPage } from '@/pages';

function App() {
  return (
    <AnalysisProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </AnalysisProvider>
  );
}

export default App;
