
let player=1 
let b1=document.querySelector("#board")
let tic1=document.querySelectorAll(".top")
let tic2=document.querySelectorAll(".mid")
let tic3=document.querySelectorAll(".cent")
let tic4=document.querySelectorAll(".bot")
let h2=document.querySelector(".turh")
let result=document.querySelector(".result")
let c1=document.querySelector("#c1")
let c2=document.querySelector("#c2")
let c3=document.querySelector("#c3")
let c4=document.querySelector("#c4")
let c5=document.querySelector("#c5")
let c6=document.querySelector("#c6")
let c7=document.querySelector("#c7")
let c8=document.querySelector("#c8")
let c9=document.querySelector("#c9")
let reset=document.querySelector(".reset")
let xwin="Player 1 Wins"
let owin="Player 2 Wins"
let turn=1
let resetin="Double click to reset"
function start() {
    tic1.forEach(function(tic) {
        tic.addEventListener("click",game)
    })
    tic1.forEach(function(tic) {
        tic.addEventListener("click",game)
    })
    tic2.forEach(function(tic) {
        tic.addEventListener("click",game)
    })
    tic3.forEach(function(tic) {
        tic.addEventListener("click",game)
    })
    tic4.forEach(function(tic) {
        tic.addEventListener("click",game)
    })
    h2.innerText="Player 1's Turn"
}
start()
function game(e) {
    if(player==1){
        e.target.textContent='X'
        player=2
        wincondx()
        h2.innerText="Player 2's Turn"
        e.target.removeEventListener("click",game)
        turn++
    }else{
        e.target.textContent='O'
        player=1
        wincondo()
        h2.innerText="Player 1's Turn"
        e.target.removeEventListener("click",game)
        turn++
    }
    
}
function wincondx() {
    if(
        c1.innerText=="X"&&
        c2.innerText=="X"&&
        c3.innerText=="X"
    )
    {
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c4.innerText==="X"&&
        c5.innerText==="X"&&
        c6.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c7.innerText==="X"&&
        c8.innerText==="X"&&
        c9.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c1.innerText==="X"&&
        c4.innerText==="X"&&
        c7.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c2.innerText==="X"&&
        c5.innerText==="X"&&
        c8.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c3.innerText==="X"&&
        c6.innerText==="X"&&
        c9.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c1.innerText==="X"&&
        c5.innerText==="X"&&
        c9.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c3.innerText==="X"&&
        c5.innerText==="X"&&
        c7.innerText==="X"
    ){
        result.innerText=xwin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        turn>8
    ){
        result.innerText="Draw"
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }
}
function wincondo() {
    if(
        c1.innerText=="O"&&
        c2.innerText=="O"&&
        c3.innerText=="O"
    )
    {
        result.innerText=owinreset.innerText=resetin

        b1.addEventListener("dblclick",restart)
    }else if(
        c4.innerText==="O"&&
        c5.innerText==="O"&&
        c6.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c7.innerText==="O"&&
        c8.innerText==="O"&&
        c9.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c1.innerText==="O"&&
        c4.innerText==="O"&&
        c7.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c2.innerText==="O"&&
        c5.innerText==="O"&&
        c8.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c3.innerText==="O"&&
        c6.innerText==="O"&&
        c9.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c1.innerText==="O"&&
        c5.innerText==="O"&&
        c9.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        c3.innerText==="O"&&
        c5.innerText==="O"&&
        c7.innerText==="O"
    ){
        result.innerText=owin
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }else if(
        turn>8
    ){
        result.innerText="Draw"
        reset.innerText=resetin
        b1.addEventListener("dblclick",restart)
    }
}
function restart(e) {
    c1.innerText=" "
    c2.innerText=" "
    c3.innerText=" "
    c4.innerText=" "
    c5.innerText=" "
    c6.innerText=" "
    c7.innerText=" "
    c8.innerText=" "
    c9.innerText=" "
    result.innerText=""
    reset.innerText=""
    b1.removeEventListener("dblclick",restart)
    start()
    turn=1
    player=1
}