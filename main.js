function creaContatoreAutomatico() {
    let contatore = 5
    setInterval(() => {
        contatore--;
        console.log(contatore);
        clearInterval(contatore === 0)
    }, 1000)
}

creaContatoreAutomatico()


