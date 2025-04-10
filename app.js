function fnSomar() {

    let valorHora = document.getElementById("valorHora").value
    let horasTrabalhadas = document.getElementById("horasTrabalhadas").value

    if (horasTrabalhadas <= 44) {
        let total = (valorHora) * (horasTrabalhadas)
        document.getElementById("resultado").value = total
        document.getElementById("outro-resultado").innerText = "R$" + total
    }
    else {
        let extra = parseFloat(valorHora) * (horasTrabalhadas - 44) * 1.5
        total = (valorHora) * 44 + extra
        document.getElementById("resultado").value = "R$" + total
        document.getElementById("outro-resultado").innerText = "R$" + total
    }
}




