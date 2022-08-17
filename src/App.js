import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Recommended } from "./components/Recommended/Recommended";
import { Explore } from "./components/Explore/Explore";
import { Activity } from "./components/Activity/Activity";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";
import { RecommendedUsers } from "./components/RecommendedUsers/RecommendedUsers";
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <h1 className="App__header">
          What are you looking for today?
        </h1>
        <div className="App__container">
          <div className="App__main">
            <Profile />
            <Recommended />
            <Explore />
            <Activity />
          </div>
          <div className="App__sidebar">
            <ChatRoom />
            <RecommendedUsers />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
