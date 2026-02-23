

let ChessBoardCells = document.querySelectorAll(".ChessBoardCell")
let PieceSelected = null;


for (let i = 0; i < ChessBoardCells.length; i++) {
    ChessBoardCells[i].addEventListener("click", function(){
       
        
        if(PieceSelected && this.querySelector(".ChessPiece") === null)
        {
            console.log("Moving Piece To " + this.id)
            MovePiece(this)
            
            PieceSelected = null

        }
        else
        {
            SelectPiece(this)
        }
    
    })
    
    
}

function SelectPiece(element)
{
    PieceAtLocation = element.querySelector(".ChessPiece")
    if(PieceAtLocation !== null){
        PieceSelected = PieceAtLocation
        console.log("Selected Piece is: " + PieceSelected.src + " At " + element.id)
    }
    else{
         PieceSelected = null
        console.log("Selected Piece is NULL")
    }
}   

function MovePiece(targetCell){
    targetCell.appendChild(PieceSelected);
}