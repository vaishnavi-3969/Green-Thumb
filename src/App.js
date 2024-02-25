import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Community, Error, Feed, GardeningChallenges, Home, Landing, Marketplace, MyGardens, Resources } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./pages/Profile";
import { Footer, Navbar } from "./components";
import Leaderboard from "./pages/Leaderboard";
import MoveToTop from "./components/MoveToTop";

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
                <Route path="/leaderboard" element=<Leaderboard/> exact/>
                <Route path="/feed" element=<Feed/> exact/>
                <Route path="/marketplace" element=<Marketplace/> exact/>
              </>
            ) : (
              <Route path="/" element=<Landing /> exact />
            )
          }
          <Route path="*" element=<Error /> exact />
        </Routes>
        <MoveToTop/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
