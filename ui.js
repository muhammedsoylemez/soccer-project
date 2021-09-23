// function UI() {

// }

class UI {
    static addTeamToUI(newTeam) {

        const teamList = document.getElementById("teams")

        teamList.innerHTML += `
        <tr>
            <td><img src="${newTeam.url}" class="img-fluid img-thumbnail"></td>
            <td>${newTeam.title}</td>
            <td>${newTeam.coach}</td>
            <td><a href="#" id="delete-team" class="btn btn-danger">Delete Team</a></td>
        </tr> 
        `
    }

    static clearInputs(input1, input2, input3) {
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
    static displayMessages(message, type) {
        const cardBody = document.querySelectorAll(".card-body")[0];

        // creating alert div
        const div = document.createElement("div");
        div.className = `alert alert-${type}`
        div.textContent = message
        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1500);
    }

    static loadAllTeams(teams) {
        const teamList = document.getElementById("teams");
        teams.forEach(team => {
            teamList.innerHTML += `
        <tr>
            <td><img src="${team.url}" class="img-fluid img-thumbnail"></td>
            <td>${team.title}</td>
            <td>${team.coach}</td>
            <td><a href="#" id="delete-team" class="btn btn-danger">Delete Team</a></td>
        </tr> 
        `
        });
    }

    static deleteTeamFromUI(element) {
        element.parentElement.parentElement.remove();
    }
    static clearAllTeamsFromUI() {
        const teamList = document.getElementById("teams")
        while (teamList.firstElementChild !== null) {
            teamList.firstElementChild.remove()
        }
    }
}
/*
UI.prototype.addTeamToUI = function (newTeam) {


    const teamList = document.getElementById("teams")

    teamList.innerHTML += `
    <tr>
        <td><img src="${newTeam.url}" class="img-fluid img-thumbnail"></td>
        <td>${newTeam.title}</td>
        <td>${newTeam.coach}</td>
        <td><a href="#" id="delete-team" class="btn btn-danger">Delete Team</a></td>
    </tr>
    `
}

UI.prototype.clearInputs = function (input1,input2,input3) {
    input1.value ="";
    input2.value="";
    input3.value="";
}

UI.prototype.displayMessages = function (message,type) {
    const cardBody = document.querySelectorAll(".card-body")[0];

    // creating alert div
    const div = document.createElement("div");
    div.className =`alert alert-${type}`
    div.textContent = message
    cardBody.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 1500);
}

UI.prototype.loadAllTeams = function (teams) {
    const teamList = document.getElementById("teams");
    teams.forEach(team => {
         teamList.innerHTML += `
    <tr>
        <td><img src="${team.url}" class="img-fluid img-thumbnail"></td>
        <td>${team.title}</td>
        <td>${team.coach}</td>
        <td><a href="#" id="delete-team" class="btn btn-danger">Delete Team</a></td>
    </tr>
    `
    });
}

UI.prototype.deleteTeamFromUI = function (element) {
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllTeamsFromUI = function () {
    const teamList = document.getElementById("teams")
    while (teamList.firstElementChild !==null) {
        teamList.firstElementChild.remove()
    }
}
*/