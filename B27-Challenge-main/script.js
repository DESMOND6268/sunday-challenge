const usersData = [
    {
        id: 0,
        username: "Wade Wilson",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city: "California",
        country: "USA",
        techStak: ["PHP", "android", "IOS", 'Flutter', 'Swift', 'Kotlin', 'Java'],
        description: "Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
    },
    {
        id: 1,
        username: "Alex Morgan",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city: "London",
        country: "UK",
        techStak: ["UI", "UX", "Photoshop", 'AfterEffect', 'Premier Pro', 'Adobe Illutrator'],
        description: "Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
    },

    {
        id: 2,
        username: "Jonathan Jones",
        image: "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city: "Berlin",
        country: "Germany",
        techStak: ["Node.JS", "MongoDB", "React.JS", 'HTML', 'CSS', 'JS', 'Express', 'Redux', 'Firebase', 'Next.JS', 'Angular.JS'],
        description: "Jonathan is very good web developer who can create any web application with high effeciency",
    },

]

var clutter = ""
usersData.forEach(function (elem) {
    var skills = "";
    for (let i = 0; i < Math.min(3, elem.techStak.length); i++) {
        skills += `<div class="skill"><h6>${elem.techStak[i]}</h6></div>`;
    }

    if (elem.techStak.length > 3) {
        skills += `<div class="skill"><h6>+${elem.techStak.length - 3}</h6></div>`;
    }
    clutter += `<div class="card">
<div class="image-container">
    <div class="img">
     <img src="${elem.image}" alt="">
    </div>
    </div>
<div class="name-container">
    <h1>${elem.username}</h1>
    <h6>${elem.country}</h6>
</div>
<div class="skills-container">
    ${skills}

</div>
<div class="information-container">
    <p>${elem.description}</p>

</div>
<div class="view-profile">
    <h4>VIEW PROFILE</h4>
</div>
</div>`
})

var main = document.querySelector(".main")
main.innerHTML = clutter
