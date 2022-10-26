let home = 0
let guest = 0
let pontosh = document.getElementById("homepoints-el")
let pontosg = document.getElementById("guestpoints-el")
let titulo = document.getElementById("title-el")

function umh() {
    home += 1
    pontosh.textContent = home
}
function doish() {
    home += 2
    pontosh.textContent = home
}
function tresh() {
    home += 3
    pontosh.textContent = home
}

function umg() {
    guest += 1
    pontosg.textContent = guest
}
function doisg() {
    guest += 2
    pontosg.textContent = guest
}
function tresg() {
    guest += 3
    pontosg.textContent = guest
}

function nj() {
    home = 0
    guest = 0
    pontosg.textContent = guest
    pontosh.textContent = home
}