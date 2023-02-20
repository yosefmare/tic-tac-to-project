let turn = "X"
let arr = []

function end(nmu1, num2, num3) {
    document.getElementById("item-" + nmu1).style.background = "yellowgreen"
    document.getElementById("item-" + num2).style.background = "yellowgreen"
    document.getElementById("item-" + num3).style.background = "yellowgreen"

    setTimeout(() => {
        location.reload()
    }, 1000);
}
function checkWinner() {

    // rows wining
    for (let i = 1; i < 10; i++) {
        arr[i] = document.getElementById("item-" + i).innerHTML
    }

    if (arr[1] === arr[2] && arr[2] === arr[3] && arr[3] != "") {
        end(1,2,3)
    } else if (arr[4] === arr[5] && arr[5] === arr[6] && arr[6] != "") {
        end(4,5,6)
    } else if (arr[7] === arr[8] && arr[8] === arr[9] && arr[9] != "") {
        end(7,8,9)


        // columns wining
    } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] != "") {
        end(1,4,7)
    } else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] != "") {
        end(2,5,8)
    } else if (arr[3] === arr[6] && arr[6] === arr[9] && arr[9] != "") {
        end(3,6,9)



        // horizontal wining
    } else if (arr[1] === arr[5] && arr[5] === arr[9] && arr[9] != "") {
        end(1,5,9)
    } else if (arr[3] === arr[5] && arr[5] === arr[7] && arr[7] != "") {
        end(3,5,7)

    }

}
function getId(id) {
    let element = document.getElementById(id);


    if (turn === "X" && element.innerHTML === "") {
        element.innerHTML = "X"
        turn = "O"
    } else if (turn === "O" && element.innerHTML === "") {
        element.innerHTML = "O"
        turn = "X"
    }

    checkWinner()
}