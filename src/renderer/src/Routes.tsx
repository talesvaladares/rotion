import { Router, Route } from "electron-router-dom";
import { Blank } from "./pages/blank";
import { Document } from "./pages/document";
import { Default } from "./pages/layouts/default";

export function Routes() {
  // este main é o mesmo que colocamos em main/index.ts nos ajustes de rotas
  // este main é uma janela da aplicaçao
  return (
    <Router
      main={
        <Route path="/" element={<Default />} >
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  );
}
