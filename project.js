const form = document.getElementById("soccer-form")
const titleInput = document.querySelector("#title")
const coachInput = document.querySelector("#coach")
const urlInput = document.querySelector("#url")


// Starting UI Object
const ui = new UI();

// Loading all event;
eventListeners();

function eventListeners() {
    form.addEventListener("submit",addTeam);
}
function addTeam(e) {
    const title = titleInput.value.trim();
    const coach = coachInput.value.trim();
    const url = urlInput.value.trim();
    if (title === ""|| coach ===""||url ==="") {
        // Error
        ui.displayMessages("Please fill all the fields..","danger")
    }else{
        // New Team
        const newTeam = new Team(title,coach,url)
        ui.addTeamToUI(newTeam); // Adding team to the ui
        ui.displayMessages("Successfully added","success")

    }

    ui.clearInputs(titleInput,coachInput,urlInput)

    e.preventDefault()
}