function Reset(gameState, onReset) {
    if(gameState === gameState.inProgress){
        return;
    }
    return (
        <button className="reset-button">
        Reset 
        </button>
    );
}

export default Reset ;