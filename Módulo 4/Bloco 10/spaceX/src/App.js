//* React Routers
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//*----------------------------------------------------------------

//* Import Pages
import Home from "./pages/Home";
import Viagens from "./pages/Section-Live/Viagens";
import Inscricao from "./pages/Section-Live/Inscricao";
//*! Page Admin
import Login from "./pages/Section-Login/Login";
import Admin from "./pages/Section-Login/Admin";
import CreateTrips from "./pages/Section-Login/CreateTrips";
import DecideCandidate from "./pages/Section-Login/DecideCandidate";
//*!----------------------------------------------------------------
import { PageNotFound, DivFound } from "./components/PageNotFound/style";
//*-----------------------------------------------------------------

//* Import StyleGlobal
import { StyleGlobal } from "./style/StyleGlobal";
//*------------------------------------------------------------------

//*! Verification Login
const  PrivateRoute = ({  children,  redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />
};
//*!==============================================

function App() {

  return (

    <>

        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route path="/Viagens" element={<Viagens />} />
            
            {/* //*! Rotas Login */}
            <Route path="/Admin" element={<PrivateRoute redirectTo="/Login">
              <Admin />
            </PrivateRoute>} />
            <Route path="/Admin/Create-Trips" element={<PrivateRoute>
              <CreateTrips />
            </PrivateRoute>} />
            <Route path="/Admin/Decide-Candidate/:id" element={<PrivateRoute>
              <DecideCandidate />
            </PrivateRoute>} />
            <Route path="/Login" element={<Login />} />
            {/* //*!------------------------------------------------------------------------------------------------------ */}

            <Route path="/Inscricao" element={<Inscricao />} />

          {/*  PageNotFound (" Pagína não encontrada ")  */}
            <Route path="*"
            element={ 
              <DivFound>
                <PageNotFound src="img/404@2x.png" />
              </DivFound>
            } 
            />

          </Routes>
        </BrowserRouter>

        <div id="div-footer">
            <p>Feito por: Gabriel Silva </p>      
        </div>

      <StyleGlobal />

    </>

  );
};

export default App;
