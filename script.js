const names = [
    { name: "Alliza", gender: "cewe" },
    { name: "Annisa", gender: "cewe" },
    { name: "Aulia", gender: "cewe" },
    { name: "Azkha", gender: "cowo" },
    { name: "Bagus", gender: "cowo" },
    { name: "Devira", gender: "cewe" },
    { name: "Fathiyah", gender: "cewe" },
    { name: "Fatimah", gender: "cewe" },
    { name: "Julianto", gender: "cowo" },
    { name: "Kamila", gender: "cewe" },
    { name: "Kayla", gender: "cewe" },
    { name: "Khusnul", gender: "cewe" },
    { name: "Linda", gender: "cewe" },
    { name: "Aal", gender: "cowo" },
    { name: "Jihan", gender: "cewe" },
    { name: "Nadias", gender: "cewe" },
    { name: "Ami", gender: "cewe" },
    { name: "Dita", gender: "cewe" },
    { name: "Nala", gender: "cowo" },
    { name: "Maul", gender: "cowo" },
    { name: "Raniyah", gender: "cewe" },
    { name: "Revita", gender: "cewe" },
    { name: "Risda", gender: "cewe" },
    { name: "Shafa", gender: "cewe" },
    { name: "Wahyu", gender: "cowo" },
    { name: "Bayu", gender: "cowo" },
    { name: "Yasser", gender: "cowo" },
    { name: "Yeni", gender: "cewe" }
];

function generateGroups() {
    const groupCount = parseInt(document.getElementById("groupCount").value);
    const shuffled = [...names].sort(() => Math.random() - 0.5);

    const bagus = shuffled.find(person => person.name === "Bagus");
    const raniyah = shuffled.find(person => person.name === "Raniyah");
    shuffled.splice(shuffled.indexOf(bagus), 1);
    shuffled.splice(shuffled.indexOf(raniyah), 1);

    const groups = Array.from({ length: groupCount }, () => []);

    // Probabilitas 70% Bagus dan Raniyah satu kelompok
    if (Math.random() <= 0.7) {
        const randomGroupIndex = Math.floor(Math.random() * groupCount);
        groups[randomGroupIndex].push(bagus, raniyah);
    } else {
        // 30% Bagus dan Raniyah di kelompok berbeda
        const randomGroupIndexBagus = Math.floor(Math.random() * groupCount);
        const randomGroupIndexRaniyah = Math.floor(Math.random() * groupCount);
        groups[randomGroupIndexBagus].push(bagus);
        groups[randomGroupIndexRaniyah].push(raniyah);
    }

    // Sebar anggota lain
    shuffled.forEach((person, index) => {
        groups[index % groupCount].push(person);
    });

    // Tampilkan hasil
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    groups.forEach((group, i) => {
        const groupHTML = `
            <h3>Kelompok ${i + 1}</h3>
            <ul>${group.map(person => `<li>${person.name} (${person.gender})</li>`).join("")}</ul>
        `;
        resultDiv.innerHTML += groupHTML;
    });
}
