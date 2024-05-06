function Reset(gameState, onReset) {
    if(gameState === gameState.inProgress){
        return;
    }
    return (
        <button className="reset-button">
        Play Again
        </button>
    );
}

export default Reset ;