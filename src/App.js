import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Community, Error, GardeningChallenges, Home, Landing, MyGardens, Resources } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/Profile";
import { Footer, Navbar } from "./components";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Router>
        {isAuthenticated && <Navbar />}
        <Routes>
          {
            isAuthenticated ? (
              <>
                <Route path="/" element=<Home /> exact />
                <Route path="/profile" element=<Profile /> exact />
                <Route path="/my_garden" element=<MyGardens/> exact/>
                <Route path="/community" element=<Community /> exact />
                <Route path="/resources" element=<Resources/> exact/>
                <Route path="/gardening_challenges" element=<GardeningChallenges/> exact/>
              </>
            ) : (
              <Route path="/" element=<Landing /> exact />
            )
          }
          <Route path="*" element=<Error /> exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
