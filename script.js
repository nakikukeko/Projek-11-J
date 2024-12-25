
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
    { name: "Yeni", gender: "cewe" },
];

function generateGroups() {
    const shuffled = names.sort(() => Math.random() - 0.5);
    const groupSize = Math.ceil(shuffled.length / 4);
    let result = "";

    for (let i = 0; i < 4; i++) {
        const group = shuffled.slice(i * groupSize, (i + 1) * groupSize);
        result += `<h3>Kelompok ${i + 1}</h3><ul>`;
        group.forEach(person => {
            result += `<li>${person.name} (${person.gender})</li>`;
        });
        result += `</ul>`;
    }

    document.getElementById("result").innerHTML = result;
}
