function Storage() {

}

Storage.prototype.addTeamToStorage = function (newTeam) {
    let teams = this.getTeamsFromStorage();
    teams.push(newTeam);

    localStorage.setItem("teams",JSON.stringify(teams))

}


Storage.prototype.getTeamsFromStorage = function () {
    let teams;
    if (localStorage.getItem("teams") === null) {
        teams = [];
    } else {
        teams = JSON.parse(localStorage.getItem("teams"))
    }
    return teams
}

Storage.prototype.deleteTeamFromStorage = function (teamTitle) {
    let teams = this.getTeamsFromStorage();
    teams.forEach((team,index) => {
        if (team.title === teamTitle) {
            teams.splice(index,1)
        }
    });
    localStorage.setItem("teams",JSON.stringify(teams))
}

Storage.prototype.clearAllTeamsFromStorage = function () {
    localStorage.removeItem("teams")
}