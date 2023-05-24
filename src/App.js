import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ListPlayer from "./components/ListPlayer";
import FormAddPlayer from "./components/FormAddPlayer";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  const handlePlayerSubmit = (data) => {
    if (!data.id) {
      data.id = players.length
        ? players[players.length - 1].id + 1
        : 1;
      data.mark = 0;
      if (players.length) {
        return setPlayers([...players, data]);
      }
      setPlayers([data]);
    }
  };
  const handleDelete = (id) => {
    const newData = players.filter((data) => data.id !== id);
    setPlayers(newData);
  };
  // khi click vào dấu +
  const handlePus = (id) => {
    const dataEdit = players.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, mark: item.mark + 1 };
        return updatedItem;
      }
      return item;
    });
    setPlayers(dataEdit);
  };
  // khi click vào dấu -
  const handleMinus = (id) => {
    const dataEdit = players.map((item) => {
      if (item.id === id && item.mark > 0) {
        const updatedItem = { ...item, mark: item.mark - 1 };
        return updatedItem;
      }
      return item;
    });
    setPlayers(dataEdit);
  };
  const handlePlayerQuantity = () => {
    return players.length;
  };
  const handleTotalMark = () => {
    let sum = 0;
    players.forEach((element) => {
      sum += element.mark;
    });
    return sum;
  };

  return (
    <div className="App">
      {/* <h1>Bài nâng cao</h1> */}
      <Container>
        <Header
          playerQuantity={handlePlayerQuantity}
          totalMark={handleTotalMark}
        />
      </Container>
      {/* List người chơi */}
      <Container>
        <ListPlayer
          players={players}
          onDeleteData={handleDelete}
          onPlus={handlePus}
          onMinus={handleMinus}
        />
      </Container>
      <Container>
        <FormAddPlayer onPlayerSubmit={handlePlayerSubmit} />
      </Container>
    </div>
  );
}

export default App;
