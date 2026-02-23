

let ChessBoardCells = document.querySelectorAll(".ChessBoardCell")

for (let i = 0; i < ChessBoardCells.length; i++) {
    ChessBoardCells[i].addEventListener("click", PrintID)
    
}

function PrintID(element)
{
    console.log(element)
}