import { useNavigate } from "react-router-dom"
import GameBoard from "../components/board"
import Buttons from "../components/button"

export default function Home()
{   
    const navigate = useNavigate();
    function handlePlayerSelect(player: 'X' | 'O') {
      navigate('/game', { state: { firstPlayer: player } });
    }

    return (
        <div className=" text-white min-h-screen flex flex-col items-center justify-center space-y-6">
           {/*GameBoard*/}
            <GameBoard squares={Array(9).fill(null)} onSquareClick={() => {}}/>
            <p className="text-white font-montserrat text-shadow-lg"> Pick who goes first?</p>
            {/*Buttons*/}
            <div className="flex space-x-6">
              {['X','O'].map((value) => (
                <Buttons 
                  value={value}
                  onClick={() => handlePlayerSelect(value as 'X' | 'O')}
                />
              ))}
            </div>
        </div>
    )

}