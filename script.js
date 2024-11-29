document.addEventListener("DOMContentLoaded", () => {
    const pointInput = document.getElementById("pointInput");
    const addPointBtn = document.getElementById("addPointBtn");
    const pointsList = document.getElementById("pointsList");

    // Função para atualizar a lista de pontos turísticos/eventos
    function updatePointsList() {
        pointsList.innerHTML = "";  // Limpa a lista atual
        const points = JSON.parse(localStorage.getItem("itabunaPoints")) || [];

        points.forEach((point, index) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = `${point} <button class="btn btn-sm text-danger" onclick="removePoint(${index})">Excluir</button>`;
            pointsList.appendChild(li);
        });
    }

    // Função para adicionar um ponto ou evento sobre Itabuna
    addPointBtn.addEventListener("click", () => {
        const point = pointInput.value.trim();
        if (point) {
            const points = JSON.parse(localStorage.getItem("itabunaPoints")) || [];
            points.push(point);
            localStorage.setItem("itabunaPoints", JSON.stringify(points));
            pointInput.value = ""; // Limpa o campo de entrada
            updatePointsList(); // Atualiza a lista
        }
    });

    // Função para remover um ponto ou evento
    window.removePoint = function(index) {
        const points = JSON.parse(localStorage.getItem("itabunaPoints")) || [];
        points.splice(index, 1);
        localStorage.setItem("itabunaPoints", JSON.stringify(points));
        updatePointsList(); // Atualiza a lista
    }

    // Atualiza a lista ao carregar a página
    updatePointsList();
});