let currentTurn = "X"

function initializeCell(cellId) {
    const cellElement = $(`#${cellId}`)
    cellElement.on("click", () => {
    //turn the space
    cellElement.text(currentTurn)
    //change the turn
    currentTurn = currentTurn === "X" ? "O" : "X"
    //display new turn
    $("#currentTurn").text(currentTurn)

    
})
}

const cells = ["UL", "UM", "UR", "ML", "MM", "MR", "BL", "BM", "BR"]
cells.forEach((cellId) => {
    initializeCell(cellId)
})

$("#restart").on("click", () => {
    $(".gameCell").text("-")
})