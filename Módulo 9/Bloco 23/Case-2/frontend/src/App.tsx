import { ContextGlobalComponent } from "./contexts/contextGlobal";
import { Routers } from "./routes/index";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <ContextGlobalComponent>
     <Routers />
     <GlobalStyles />
    </ContextGlobalComponent>
  );
};

export default App;
