function stampaOgniSecondo() {
    intervallo = setInterval(() => {
        console.log('Stampa ogni secondo');
        clearInterval(intervallo)
    }, 1000)
}
stampaOgniSecondo()


