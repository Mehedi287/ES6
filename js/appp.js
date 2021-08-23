document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('container').style.border = '3px solid green'
})
function addBackground() {
    const palyers = document.getElementsByClassName('players');
    for (const palyer of palyers) {
        palyer.style.backgroundColor = 'yellow'
    }
}
document.getElementById('add-player').addEventListener('click', function () {
    const container = document.getElementById('container');
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('players')

    playerDiv.innerHTML = `
    <h3>palyer Name-1</h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `
    container.appendChild(playerDiv)
})
