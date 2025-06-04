
document.getElementById('exerciseSearch').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    const exampleExercises = [
        { name: "Şınav", area: "göğüs, triceps", difficulty: "orta" },
        { name: "Plank", area: "core", difficulty: "orta" },
        { name: "Mountain Climbers", area: "cardio, core", difficulty: "orta" },
        { name: "Barfiks", area: "sırt, biceps", difficulty: "zor" },
        { name: "Squat", area: "bacak, kalça", difficulty: "kolay" }
    ];

    const filtered = exampleExercises.filter(ex => ex.name.toLowerCase().includes(query) || ex.area.includes(query));

    filtered.forEach(ex => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${ex.name}</strong> - Kas Grubu: ${ex.area} - Zorluk: ${ex.difficulty}`;
        resultsDiv.appendChild(div);
    });
});
