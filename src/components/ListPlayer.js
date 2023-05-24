import { useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaBeer } from "react-icons/fa";

function ListPlayer(props) {
  // console.log(11, props.players);

  const [playerList, setPlayerList] = useState(props.players);
  //   console.log(22, playerList);

  return (
    <Table id="id-content">
      <thead></thead>
      <tbody style={{ verticalAlign: "center" }}>
        {props.players.map((player, index) => (
          <tr key={index}>
            <td
              style={{
                width: "50px",
                fontWeight: 700,
                verticalAlign: "center",
              }}
            >
              <button onClick={() => props.onDeleteData(player.id)}>
                X
              </button>
            </td>
            <td
              style={{
                width: "50px",
                fontWeight: 700,
                fontSize: "30px",
              }}
            >
              *
            </td>
            <td style={{ textAlign: "left" }}>{player.name}</td>
            <td style={{ width: "50px" }}>
              <button onClick={() => props.onMinus(player.id)}>
                -
              </button>
            </td>
            <td style={{ width: "100px" }}>{player.mark}</td>
            <td style={{ width: "50px" }}>
              <button onClick={() => props.onPlus(player.id)}>
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListPlayer;
