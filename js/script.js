const exercises = [
<button onclick="gerarNomeCompleto()">Gerar</button>
<div id="res8" class="result"></div>` },


{ title: "9. Média", html: `
<h2>Calcular Média</h2>
<input id="M1" type="number" placeholder="Nota 1">
<input id="M2" type="number" placeholder="Nota 2">
<button onclick="mediaSimples()">Calcular</button>
<div id="res9" class="result"></div>` },


{ title: "10. Telefone", html: `
<h2>Formatar Telefone</h2>
<input id="tel" type="text" placeholder="Ex: 99887766">
<button onclick="formatarTelefone()">Formatar</button>
<div id="res10" class="result"></div>` }
];


const tabBar = document.getElementById("tabBar");
const contentArea = document.getElementById("contentArea");


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


function podeDirigir() {
let idade = Number(document.getElementById("idade").value);
document.getElementById("res1").innerText = idade >= 18 ? "Pode ser habilitado(a)" : "Ainda não pode";
}


function maiorTres() {
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let n3 = Number(document.getElementById("n3").value);
document.getElementById("res2").innerText = "Maior número: " + Math.max(n1,n2,n3);
}


function classificarMoeda() {
let m = Number(document.getElementById("moeda").value);
const map = {
0.01: "Um Centavo",
0.05: "Cinco Centavos",
0.10: "Dez Centavos",
0.25: "Vinte e Cinco Centavos",
0.50: "Cinquenta Centavos",
1.00: "Um Real"
};
document.getElementById("res3").innerText = map[m] || "Valor Desconhecido";
}


function senhaForte() {
let s = document.getElementById("senha").value;
document.getElementById("res4").innerText = (s.length > 8 && s !== "12345678") ? "Senha Forte" : "Senha Fraca";
}


function checarTemperatura() {
let t = Number(document.getElementById("temp").value);
let msg = t < 10 ? "Alerta de Frio" : t <= 25 ? "Temperatura Ideal" : "Alerta de Calor";
document.getElementById("res5").innerText = msg
