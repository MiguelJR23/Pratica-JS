const exercises = [
    { title: "1. Habilitação", html: `
        <h2>Verificador de idade para habilitação</h2>
        <input id="idade" type="number" placeholder="Idade">
        <button onclick="podeDirigir()">Verificar</button>
        <div id="res1" class="result"></div>
    ` },
    { title: "2. Maior número", html: `
        <h2>Determinar o maior entre os três</h2>
        <input id="n1" type="number" placeholder="Número 1">
        <input id="n2" type="number" placeholder="Número 2">
        <input id="n3" type="number" placeholder="Número 3">
        <button onclick="encontrarMaiorEntreTres()">Calcular</button>
        <div id="res2" class="result"></div>
    ` },
    { title: "3. Classificar moeda", html: `
        <h2>Classificador de moedas</h2>
        <input id="moeda" type="number" placeholder="Valor da moeda" step="0.01">
        <button onclick="classificarMoeda()">Classificar</button>
        <div id="res3" class="result"></div>
    ` },
    { title: "4. Verificar senha", html: `
        <h2>Verificador de senha</h2>
        <input id="senha" type="password" placeholder="Digite a senha">
        <button onclick="senhaForte()">Verificar</button>
        <div id="res4" class="result"></div>
    ` },
    { title: "5. Temperatura", html: `
        <h2>Alerta de temperatura</h2>
        <input id="temp" type="number" placeholder="Temperatura em °C">
        <button onclick="checarTemperatura()">Classificar</button>
        <div id="res5" class="result"></div>
    ` },
    { title: "6. Dia da semana", html: `
        <h2>Classificador de dia da semana</h2>
        <input id="dia" type="number" placeholder="Número (1-7)" min="1" max="7">
        <button onclick="nomeDoDia()">Verificar</button>
        <div id="res6" class="result"></div>
    ` },
    { title: "7. Triângulo", html: `
        <h2>Tipo de triângulo</h2>
        <input id="l1" type="number" placeholder="Lado 1">
        <input id="l2" type="number" placeholder="Lado 2">
        <input id="l3" type="number" placeholder="Lado 3">
        <button onclick="tipoTriangulo()">Verificar</button>
        <div id="res7" class="result"></div>
    ` },
    { title: "8. Nome", html: `
        <h2>Gerador de nome completo</h2>
        <input id="primeiroNome" type="text" placeholder="Primeiro nome">
        <input id="sobrenome" type="text" placeholder="Sobrenome">
        <button onclick="gerarNomeCompleto()">Gerar</button>
        <div id="res8" class="result"></div>
    ` },
    { title: "9. Média para nota", html: `
        <h2>Calculadora de média</h2>
        <input id="nota1" type="number" placeholder="Primeira nota" min="0" max="10" step="0.1">
        <input id="nota2" type="number" placeholder="Segunda nota" min="0" max="10" step="0.1">
        <button onclick="calcularMediaSimples()">Calcular</button>
        <div id="res9" class="result"></div>
    ` },
    { title: "10. Telefone", html: `
        <h2>Formatação de telefone</h2>
        <input id="tel" type="text" placeholder="Ex: 932138580" maxlength="9">
        <button onclick="formatarTelefone()">Formatar</button>
        <div id="res10" class="result"></div>
    ` }
];

const tabBar = document.getElementById("tabBar");
const contentArea = document.getElementById("contentArea");

// Aqui faz as abas
exercises.forEach((ex, index) => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.innerText = ex.title;
    tab.onclick = () => openTab(index);
    tabBar.appendChild(tab);
});

function openTab(i) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab')[i].classList.add('active');
    contentArea.innerHTML = exercises[i].html;
}

openTab(0);

// Ex 1
function podeDirigir() {
    let idade = Number(document.getElementById("idade").value);
    document.getElementById("res1").innerText = idade >= 18 ? "Pode ser habilitado(a)" : "Ainda não pode";
}

// Ex 2
function encontrarMaiorEntreTres() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let maior = Math.max(n1, n2, n3);
    document.getElementById("res2").innerText = "Maior número: " + maior;
}

// Ex 3
function classificarMoeda() {
    let m = Number(document.getElementById("moeda").value);
    let resultado = document.getElementById("res3");
    const valoresAceitos = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00];
    
    if (!valoresAceitos.includes(m)) {
        resultado.innerText = "Valor Desconhecido - Use: 0.01, 0.05, 0.10, 0.25, 0.50 ou 1.00";
        return;
    }
    
    const map = {
        0.01: "Um Centavo",
        0.05: "Cinco Centavos",
        0.10: "Dez Centavos",
        0.25: "Vinte e Cinco Centavos",
        0.50: "Cinquenta Centavos",
        1.00: "Um Real"
    };
    
    resultado.innerText = map[m];
}

// Ex 4
function senhaForte() {
    let s = document.getElementById("senha").value;
    let resultado = document.getElementById("res4");
    
    let erros = [];
    if (s.length <= 8) {
        erros.push("Deve ter mais de 8 caracteres");
    }
    if (s === "12345678") {
        erros.push("é uma senha muito comum");
    }
    if (erros.length > 0) {
        resultado.innerText = "Crie outra senha, muito fraca - " + erros.join(" e ");
    } else {
        resultado.innerText = "Boa senha";
    }
}

// Ex 5
function checarTemperatura() {
    let t = Number(document.getElementById("temp").value);
    let msg = t < 10 ? "Alerta de frio" : t <= 25 ? "Temperatura ideal" : "Alerta de calor";
    document.getElementById("res5").innerText = msg;
}

// Ex 6
function nomeDoDia() {
    let dia = Number(document.getElementById("dia").value);
    let nomeDia;
    switch(dia) {
        case 1: nomeDia = "Domingo"; break;
        case 2: nomeDia = "Segunda"; break;
        case 3: nomeDia = "Terça"; break;
        case 4: nomeDia = "Quarta"; break;
        case 5: nomeDia = "Quinta"; break;
        case 6: nomeDia = "Sexta"; break;
        case 7: nomeDia = "Sábado"; break;
        default: nomeDia = "Número inválido";
    }
    document.getElementById("res6").innerText = nomeDia;
}

// Ex 7
function tipoTriangulo() {
    let l1 = Number(document.getElementById("l1").value);
    let l2 = Number(document.getElementById("l2").value);
    let l3 = Number(document.getElementById("l3").value); 
    let tipo;
    if (l1 === l2 && l2 === l3) {
        tipo = "Equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }
    document.getElementById("res7").innerText = tipo;
}

// Ex 8
function gerarNomeCompleto() {
    let primeiroNome = document.getElementById("primeiroNome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("res8").innerText = primeiroNome + " " + sobrenome;
}

// Ex 9
function calcularMediaSimples() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let resultado = document.getElementById("res9");
    
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        resultado.innerText = "Erro: As notas devem estar entre 0 e 10";
        return;
    }
    
    let media = (n1 + n2) / 2;
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";
    resultado.innerText = `Média: ${media.toFixed(1)} - ${situacao}`;
}

// Ex 10
function formatarTelefone() {
    let tel = document.getElementById("tel").value.replace(/\D/g, '');
    let resultado = document.getElementById("res10");
    
    if (tel.length === 9) {
        resultado.innerText = tel.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else if (tel.length === 8) {
        resultado.innerText = tel.replace(/(\d{4})(\d{4})/, "$1-$2");
    } else {
        resultado.innerText = "Digite 8 ou 9 dígitos";
    }
}
