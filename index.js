const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  // Se rolar mais de 300px, mostra o botão
  if (window.scrollY > 300) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

// Opcional: Garante que o clique leve ao topo mesmo em navegadores antigos
btnTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});