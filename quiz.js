console.log ("hello")


var growButton = document.getElementById("grow")
var howHigh = document.getElementById("height")
var character = document.getElementById("char")

growButton.addEventListener("click", getvalues)
howHigh.addEventListener("keypress", theRightKey)
character.addEventListener("keypress", theRightKey)

function theRightKey(event) {
    console.log("This is which key was pressed", event.key)
    if (event.key === "Enter") {
        getvalues()
    }
}

function getvalues() {
    var inputTree={
    height: howHigh.value,
    char: character.value,
    }
    // console.log(howHigh.value)
    // console.log(character.value)
    // console.log(inputTree)
    if (inputTree.height === "" || (character.value === "")){
        alert("Must have value");
    }
    else {
        tree(inputTree)
    }

}
function tree(treeObj) {
console.log(">>>>", treeObj)
}

