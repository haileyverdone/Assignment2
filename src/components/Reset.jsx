import GameState from "./GameState";

function Reset({gameState, onReset }) {
    if(gameState === gameState.inProgress){
        return;
    }
    return (
        <button onClick= {onReset} className="reset-button">
        Play Again
        </button>
    );
}

export default Reset ;