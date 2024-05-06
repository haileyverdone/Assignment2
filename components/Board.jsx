import Strike from "./Strike";

function Board() {
    return (
     <div className="board">
        <Tile className='right-border bottom-border'/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Strike/>
    </div>
    );
}

export default Board;