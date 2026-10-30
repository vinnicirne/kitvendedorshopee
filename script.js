/**
 * Lógica Interativa - Landing Page: Kit do Vendedor Shopee
 */

// Link de Checkout Kiwify
var CHECKOUT = "https://pay.kiwify.com.br/eOZL2Y8";

// Configura todos os botões de compra para abrir o checkout
if (CHECKOUT) {
  document.querySelectorAll(".buy").forEach(function(a) {
    a.href = CHECKOUT;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// Formatação monetária em Real (R$)
function R(v) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Cálculo do simulador interativo
function go() {
  var p = parseFloat(document.getElementById("p").value) || 0;
  var c = parseFloat(document.getElementById("c").value) || 0;
  var t = p >= 200 ? [0.14, 26] : p >= 100 ? [0.14, 20] : p >= 80 ? [0.14, 16] : [0.2, 4.5];
  var l = p - p * t[0] - t[1] - c - p * 0.02;
  var o = document.getElementById("out");

  if (!o) return;

  o.textContent = (l < 0 ? "Prejuízo de " : "Lucro de ") + R(Math.abs(l)) + " por venda";
  o.style.color = l < 0 ? "var(--no)" : "var(--ok)";
  o.style.borderColor = o.style.color;
}

// Event Listeners dos inputs do simulador
var inputP = document.getElementById("p");
var inputC = document.getElementById("c");

if (inputP) inputP.addEventListener("input", go);
if (inputC) inputC.addEventListener("input", go);

// Executa o cálculo inicial
go();

// Prova Social / Depoimentos dinâmicos
var DEPOIMENTOS = []; /* Formato: {nome:"Maria, vendedora de acessórios", texto:"Depoimento real aqui"} */

if (DEPOIMENTOS.length) {
  var s = document.getElementById("prova");
  var b = document.getElementById("provas");
  if (s && b) {
    DEPOIMENTOS.forEach(function(d) {
      var e = document.createElement("div");
      e.className = "c";
      var p = document.createElement("p");
      p.textContent = "“" + d.texto + "”";
      var h = document.createElement("h3");
      h.textContent = d.nome;
      h.style.marginTop = "10px";
      e.appendChild(p);
      e.appendChild(h);
      b.appendChild(e);
    });
    s.style.display = "block";
  }
}
