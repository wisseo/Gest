

const fct = () => {
    console.log('Veuillez saisir votre age : ')
    process.stdin.on('data', (data) => {
    if (data > 99 || data < 0) {
        console.log('age incorrect, saisir à nouveau votre age :')
    }
    else {
        let anneeNaiscance = 2024 - data
        console.log(`Vous etes née en ${anneeNaiscance}` )
        process.exit()
    }
})
}
fct()