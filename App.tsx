import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./components/Dashboard";
import LiveGameView from "./components/game/LiveGameView";
import StatsDashboard from "./components/stats/StatsDashboard";
import SocialHub from "./components/social/SocialHub";
import AICoach from "./components/training/AICoach";
import NotFound from "./pages/NotFound";
import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { ScoringVariantSelector } from './components/scoring/ScoringVariants';
import { GameConfigDialog } from './components/game/GameConfig';
import { theme } from './theme';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = React.useState<ScoringVariant | null>(null);
  const [configOpen, setConfigOpen] = React.useState(false);

  const handleVariantSelect = (variant: ScoringVariant) => {
    setSelectedVariant(variant);
    setConfigOpen(true);
  };

  const handleGameStart = (config: GameConfig) => {
    // Initialize game with selected variant and config
    console.log('Starting game with:', { variant: selectedVariant, config });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="games" element={<LiveGameView />} />
              <Route path="stats" element={<StatsDashboard />} />
              <Route path="social" element={<SocialHub />} />
              <Route path="training" element={<AICoach />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
