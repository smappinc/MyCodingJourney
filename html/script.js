document.addEventListener("DOMContentLoaded", function () {
    const playerStatsForm = document.getElementById("playerStatsForm");
    const goalsInput = document.getElementById("goals");
    const assistsInput = document.getElementById("assists");
    const goalsDisplay = document.getElementById("goalsDisplay");
    const assistsDisplay = document.getElementById("assistsDisplay");
    const playerSelect = document.getElementById("playerSelect");

    playerStatsForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedPlayer = playerSelect.value;
        const goals = parseInt(goalsInput.value, 10);
        const assists = parseInt(assistsInput.value, 10);

        if (selectedPlayer === "messi") {
            goalsDisplay.textContent = "Goals: " + goals;
            assistsDisplay.textContent = "Assists: " + assists;
        } else if (selectedPlayer === "ronaldo") {
            goalsDisplay.textContent = "Goals: " + goals;
            assistsDisplay.textContent = "Assists: " + assists;
        }
    });
});
