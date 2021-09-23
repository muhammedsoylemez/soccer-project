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