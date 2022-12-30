import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import DrawResultPage from "./pages/DrawResultPage";
import SetupPage from "./pages/SetupPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [participants, setParticipants] = useState<string[]>([]);

  const addParticipant = (participante: string): void => {
    setParticipants(list => [...list, participante]);
  };

  const deleteParticipant = (participante: string): void => {
    setParticipants(list => list.filter(x => x !== participante));
  };

  return (
    <>
      <Header />
      <Card>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <SetupPage
                  participants={participants}
                  deleteParticipant={deleteParticipant}
                  addParticipant={addParticipant}
                />
              }
            />
            <Route
              path="/draw"
              element={
                <ProtectedRoute check={Boolean(participants.length)}>
                  <DrawResultPage participants={participants} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Card>
    </>
  );
};

export default App;
