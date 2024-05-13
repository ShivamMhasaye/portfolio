
async function fetchData(type = "skills") {
    let response=await fetch("skills.json");
   
            const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skills.icon} alt="skill" />
                <span>${skills.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}
