window.onload = function(){DrawBoard();}

let ChessBoardCells = document.querySelectorAll(".ChessBoardCell")
let PieceSelected = null;

class ChessPiece{
    PieceType = "";
    BoardPosition = "";
    DisplayImage = "";
    ColorType = ""
    constructor(piecetype, Boardposition, DisplayImage, Colortype)
    {
        this.PieceType = piecetype;
        this.BoardPosition = Boardposition; 
        this.DisplayImage = DisplayImage;
        this.ColorType = Colortype
    }
}

//Intalizing Deafult Chess Pieces At Instal Positons from (left to Right)
const A1Rook = new ChessPiece("Rook", "A1", "ChessPieces/WhiteRook.png", "White");
const B1Knight = new ChessPiece("Knight", "B1", "ChessPieces/WhiteKnight.png", "White");
const C1Bishop = new ChessPiece("Bishop", "C1", "ChessPieces/WhiteBishop.png", "White");
const D1Queen = new ChessPiece("Queen", "D1", "ChessPieces/WhiteQueen.png", "White");
const E1King = new ChessPiece("King", "E1", "ChessPieces/WhiteKing.png", "White");
const F1Bishop = new ChessPiece("Bishop", "F1", "ChessPieces/WhiteBishop.png", "White");
const G1Knight = new ChessPiece("Knight", "G1", "ChessPieces/WhiteKnight.png", "White");
const H1Rook = new ChessPiece("Rook", "H1", "ChessPieces/WhiteRook.png", "White");

const A2Pawn = new ChessPiece("Pawn", "A2", "ChessPieces/WhitePawn.png", "White");
const B2Pawn = new ChessPiece("Pawn", "B2", "ChessPieces/WhitePawn.png", "White");
const C2Pawn = new ChessPiece("Pawn", "C2", "ChessPieces/WhitePawn.png", "White");
const D2Pawn = new ChessPiece("Pawn", "D2", "ChessPieces/WhitePawn.png", "White");
const E2Pawn = new ChessPiece("Pawn", "E2", "ChessPieces/WhitePawn.png", "White");
const F2Pawn = new ChessPiece("Pawn", "F2", "ChessPieces/WhitePawn.png", "White");
const G2Pawn = new ChessPiece("Pawn", "G2", "ChessPieces/WhitePawn.png", "White");
const H2Pawn = new ChessPiece("Pawn", "H2", "ChessPieces/WhitePawn.png", "White");

const A8Rook = new ChessPiece("Rook", "A8", "ChessPieces/BlackRook.png", "Black");
const B8Knight = new ChessPiece("Knight", "B8", "ChessPieces/BlackKnight.png", "Black");
const C8Bishop = new ChessPiece("Bishop", "C8", "ChessPieces/BlackBishop.png", "Black");
const D8Queen = new ChessPiece("Queen", "D8", "ChessPieces/BlackQueen.png", "Black");
const E8King = new ChessPiece("King", "E8", "ChessPieces/BlackKing.png", "Black");
const F8Bishop = new ChessPiece("Bishop", "F8", "ChessPieces/BlackBishop.png", "Black");
const G8Knight = new ChessPiece("Knight", "G8", "ChessPieces/BlackKnight.png", "Black");
const H8Rook = new ChessPiece("Rook", "H8", "ChessPieces/BlackRook.png", "Black");

const A7Pawn = new ChessPiece("Pawn", "A7", "ChessPieces/BlackPawn.png", "Black");
const B7Pawn = new ChessPiece("Pawn", "B7", "ChessPieces/BlackPawn.png", "Black");
const C7Pawn = new ChessPiece("Pawn", "C7", "ChessPieces/BlackPawn.png", "Black");
const D7Pawn = new ChessPiece("Pawn", "D7", "ChessPieces/BlackPawn.png", "Black");
const E7Pawn = new ChessPiece("Pawn", "E7", "ChessPieces/BlackPawn.png", "Black");
const F7Pawn = new ChessPiece("Pawn", "F7", "ChessPieces/BlackPawn.png", "Black");
const G7Pawn = new ChessPiece("Pawn", "G7", "ChessPieces/BlackPawn.png", "Black");
const H7Pawn = new ChessPiece("Pawn", "H7", "ChessPieces/BlackPawn.png", "Black");

PiecesOnBoard = [A1Rook, B1Knight, C1Bishop, D1Queen, E1King, F1Bishop, G1Knight, H1Rook, A2Pawn, B2Pawn, C2Pawn, D2Pawn, E2Pawn, F2Pawn, G2Pawn, H2Pawn, A8Rook, B8Knight, C8Bishop, D8Queen, E8King, F8Bishop, H8Rook, A7Pawn, B7Pawn, C7Pawn, D7Pawn, E7Pawn, F7Pawn, G7Pawn, H7Pawn]

console.log(A2Pawn);

function DrawBoard()
{
    document.querySelector("#A1 img").src = A1Rook.DisplayImage;
    document.querySelector("#B1 img").src = B1Knight.DisplayImage;
    document.querySelector("#C1 img").src = C1Bishop.DisplayImage;
    document.querySelector("#D1 img").src = D1Queen.DisplayImage;
    document.querySelector("#E1 img").src = E1King.DisplayImage;
    document.querySelector("#F1 img").src = F1Bishop.DisplayImage;
    document.querySelector("#G1 img").src = G1Knight.DisplayImage;
    document.querySelector("#H1 img").src = H1Rook.DisplayImage;

    document.querySelector("#A2 img").src = A2Pawn.DisplayImage;
    document.querySelector("#B2 img").src = B2Pawn.DisplayImage;
    document.querySelector("#C2 img").src = C2Pawn.DisplayImage;
    document.querySelector("#D2 img").src = D2Pawn.DisplayImage;
    document.querySelector("#E2 img").src = E2Pawn.DisplayImage;
    document.querySelector("#F2 img").src = F2Pawn.DisplayImage;
    document.querySelector("#G2 img").src = G2Pawn.DisplayImage;
    document.querySelector("#H2 img").src = H2Pawn.DisplayImage;

    document.querySelector("#A8 img").src = A8Rook.DisplayImage;
    document.querySelector("#B8 img").src = B8Knight.DisplayImage;
    document.querySelector("#C8 img").src = C8Bishop.DisplayImage;
    document.querySelector("#D8 img").src = D8Queen.DisplayImage;
    document.querySelector("#E8 img").src = E8King.DisplayImage;
    document.querySelector("#F8 img").src = F8Bishop.DisplayImage;
    document.querySelector("#G8 img").src = G8Knight.DisplayImage;
    document.querySelector("#H8 img").src = H8Rook.DisplayImage;

    document.querySelector("#A7 img").src = A7Pawn.DisplayImage;
    document.querySelector("#B7 img").src = B7Pawn.DisplayImage;
    document.querySelector("#C7 img").src = C7Pawn.DisplayImage;
    document.querySelector("#D7 img").src = D7Pawn.DisplayImage;
    document.querySelector("#E7 img").src = E7Pawn.DisplayImage;
    document.querySelector("#F7 img").src = F7Pawn.DisplayImage;
    document.querySelector("#G7 img").src = G7Pawn.DisplayImage;
    document.querySelector("#H7 img").src = H7Pawn.DisplayImage;
}

PrevSelectedTile = null
for (let i = 0; i < ChessBoardCells.length; i++) {
    ChessBoardCells[i].addEventListener("click", function()
    {
       
        
        if(PieceSelected && document.querySelector(`#${this.id} img`) == null)
        {
            console.log("Moving Piece To " + this.id)
            MovePiece(this)
            
            PieceSelected = null

        }
        else
        {
            SelectPiece(this)
            PrevSelectedTile = ChessBoardCells[i]
        }
    
    })
    
    
}

function SelectPiece(SelectedTile)
{
    for(let i = 0; i < PiecesOnBoard.length; i++)
    {
        if(PiecesOnBoard[i].BoardPosition == SelectedTile.id)
        {
            PieceSelected = PiecesOnBoard[i]
            console.log(`Piece Selected ${PieceSelected.PieceType}`)
        }
    }
}   

function MovePiece(TargetedTile)
{
    PrevSelectedTile.removeChild(document.querySelector(`#${PrevSelectedTile.id} img`));
    PieceSelected.BoardPosition = TargetedTile.id;
    Tileimage = document.createElement("img");
    Tileimage.src = PieceSelected.DisplayImage;
    TargetedTile.appendChild(Tileimage)

}