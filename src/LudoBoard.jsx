import {useState} from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let updateBlue = () => {
       // moves.blue += 1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        });
    }

    let updateYellow = () => {
        // moves.blue += 1;
         console.log(`moves.yellow = ${moves.yellow}`);
         setMoves((prevMoves) => {
             return {...prevMoves, yellow: prevMoves.yellow + 1}
         });
     }

     let updateRed = () => {
        // moves.blue += 1;
         console.log(`moves.blue = ${moves.red}`);
         setMoves((prevMoves) => {
             return {...prevMoves, red: prevMoves.red + 1}
         });
     }


     let updateGreen = () => {
        // moves.blue += 1;
         console.log(`moves.green = ${moves.green}`);
         setMoves((prevMoves) => {
             return {...prevMoves, green: prevMoves.green + 1}
         });
     }


    return (
        <div>
            <p>Game Begin!</p>
            <div className="bord">
                <p>Blue moves = {moves.blue}</p>
                <button style={{background: "blue"}} onClick={updateBlue}>
                    +1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button style={{background: "yellow", color: "black"}} onClick={updateYellow}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style={{background: "green"}} onClick={updateGreen}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{background: "red"}} onClick={updateRed}>+1</button>

            </div>
        </div>
    )
}