const form = document.getElementById("soccer-form")
const titleInput = document.querySelector("#title")
const coachInput = document.querySelector("#coach")
const urlInput = document.querySelector("#url")
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-teams")

// // Starting UI Object
// const ui = new UI();

// // Starting Storage Object
// const storage = new Storage();

// Loading all event;
eventListeners();

function eventListeners() {
    form.addEventListener("submit",addTeam);
    document.addEventListener("DOMContentLoaded",function () {
        let teams = Storage.getTeamsFromStorage();
        UI.loadAllTeams(teams)
    })
    secondCardBody.addEventListener("click",deleteTeam)
    clear.addEventListener("click",clearAllTeams)
}
function addTeam(e) {
    const title = titleInput.value.trim();
    const coach = coachInput.value.trim();
    const url = urlInput.value.trim();
    if (title === ""|| coach ===""||url ==="") {
        // Error
        UI.displayMessages("Please fill all the fields..","danger")
    }else{
        // New Team
        const newTeam = new Team(title,coach,url)
        UI.addTeamToUI(newTeam); // Adding team to the ui
        Storage.addTeamToStorage(newTeam); // Adding team to storage
        UI.displayMessages("Successfully added","success")

    }

    UI.clearInputs(titleInput,coachInput,urlInput)

    e.preventDefault()
}

function deleteTeam(e) {
    if (e.target.id ==="delete-team") {
        UI.deleteTeamFromUI(e.target)
        Storage.deleteTeamFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

        UI.displayMessages("Silme işlemi başarılı..","success")
    }

}

function clearAllTeams() {
    if (confirm("Emin misiniz ?")) {
        UI.clearAllTeamsFromUI();
        Storage.clearAllTeamsFromStorage();
    }
  
}

