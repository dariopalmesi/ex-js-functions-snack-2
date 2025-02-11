function eseguiEferma(esegui) {
    esegui()
    setTimeout(() => {
        console.log('La funzione è stata esegiuta');

    }, 1000)
    setTimeout(() => {
        console.log('Stop');
    }, 2000)
}

eseguiEferma(
    () => console.log('Sto per eseguire'),
)
