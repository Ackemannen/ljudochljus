import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lighting from "./pages/Lighting";
import Sound from "./pages/Sound";
import Smoke from "./pages/Smoke";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename="/ljudochljus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ljud" element={<Sound />} />
          <Route path="/ljus" element={<Lighting />} />
          <Route path="/rok" element={<Smoke />} />
          <Route path="/villkor" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
