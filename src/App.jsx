import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

const WYNSite            = lazy(() => import("./wyn-site"));
const EtudiantsPage      = lazy(() => import("./pages/EtudiantsPage"));
const ParentsPage        = lazy(() => import("./pages/ParentsPage"));
const EcolesPage         = lazy(() => import("./pages/EcolesPage"));
const CommentCaMarchePage = lazy(() => import("./pages/CommentCaMarchePage"));
const TestOrientationPage = lazy(() => import("./pages/TestOrientationPage"));
const SalairesPage       = lazy(() => import("./pages/SalairesPage"));
const PressePage         = lazy(() => import("./pages/PressePage"));

function App() {
  const [lang, setLang] = useState("fr");
  const [dark, setDark] = useState(false);

  const pageProps = { lang, dark, setLang, setDark };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0E0E1A" }} />}>
        <Routes>
          <Route path="/" element={<WYNSite />} />
          <Route path="/etudiants" element={<EtudiantsPage {...pageProps} />} />
          <Route path="/parents" element={<ParentsPage {...pageProps} />} />
          <Route path="/ecoles" element={<EcolesPage {...pageProps} />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarchePage {...pageProps} />} />
          <Route path="/test-orientation" element={<TestOrientationPage {...pageProps} />} />
          <Route path="/salaires" element={<SalairesPage {...pageProps} />} />
          <Route path="/presse" element={<PressePage {...pageProps} />} />
          <Route path="*" element={<WYNSite />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
