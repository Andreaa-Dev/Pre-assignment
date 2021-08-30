import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";
import DetailsInformation from "./DetailsInformation";
import NavBar from "./NavBar";

export type UserInformation = {
  name: string;
  username: string;
  website: string;
  id: number;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users ";
  const [userInformation, setUserInformation] = useState<UserInformation[]>([]);

  const fetchData = async () => {
    const data = await axios.get(url);
    const userData = data.data;
    setUserInformation(userData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage userInformation={userInformation} />;
        </Route>
        <Route exact path="/:userID">
          <DetailsInformation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
