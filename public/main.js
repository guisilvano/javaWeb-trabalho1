console.log("teste")

const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
    fetch('/discos', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            titulo: 'Those Once Loyal',
            artista: 'Bolt Thrower',
            ano: '2005',
            genero: 'Death Metal',
            gravadora: 'Metal Blade'
        })
    })
})
