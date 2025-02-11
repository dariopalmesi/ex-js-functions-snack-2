function creaContatoreAutomatico() {
    let contatore = 0
    setInterval(() => {
        contatore++;
        console.log(contatore);
        clearInterval(contatore === 5)
    }, 1000)
}

creaContatoreAutomatico()


