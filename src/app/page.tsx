"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [xTurn, setXTurn] = useState(true);
  const [won, setWon] = useState(false);
  const [isDraw, setIsDraw]= useState(false);
  const [filledSquare, setFilledSquare] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [boardData, setBoardData] = useState([
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
  ]);

  const updateBoardData = (idx: number) => {
    if (!boardData[idx].val) {
      const value: string = xTurn === true ? "X" : "O";
      let boardTemp = {...boardData}
      boardTemp[idx].val = value
      setBoardData(boardTemp);
      setXTurn(!xTurn);
    }
  };

  const reset = () => {
    setBoardData([ {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },
    {
      val: "",
    },]);
    setXTurn(true);
    setWon(false);
    setIsDraw(false);
    setModalTitle("");
};
  
  useEffect(() => {
    const WINNING_COMBO = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const checkWinner = () =>{
      WINNING_COMBO.map((bd) => {
        const [a,b,c] = bd;
        if(boardData[a].val && boardData[a].val === boardData[b].val && boardData[a].val === boardData[c].val){
          setWon(true)
          setModalTitle(`${boardData[a].val} Win !!!`);
        }
      })
    }

    const checkDraw = () =>{
      setFilledSquare(filledSquare + 1)
      if(filledSquare == 9 ) {
        setIsDraw(true)
        setModalTitle("Match Draw!!!");
      }
    }

    checkWinner();
    checkDraw();
  }, [boardData])
  return (
    <div>
      <h1>Tic Tac Toe Bernat</h1>
      <div className="game">
        <div className="game__menu">
          <p>{xTurn === true ? "X Turn" : "O Turn"}</p>
        </div>
        <div className="game__board">
          {[...Array(9)].map((v, idx) => {
            return (
              <div
                key={idx}
                className="square"
                onClick={() => {
                  won || isDraw ? {}: updateBoardData(idx);
                }}>
                {boardData[idx].val}
              </div>
            );
          })}
        </div>
        <div className={`modal ${modalTitle ? "show" : ""}`}>
          <div className="modal__title">{modalTitle}</div>
          <button onClick={reset}>New Game</button>
        </div>
      </div>
    </div>
  );
}
