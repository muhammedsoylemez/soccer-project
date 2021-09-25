class Storage {

    
static addTeamToStorage(newTeam) {
    let teams = this.getTeamsFromStorage();
    teams.push(newTeam);

    localStorage.setItem("teams",JSON.stringify(teams))

}


static getTeamsFromStorage () {
    let teams;
    if (localStorage.getItem("teams") === null) {
        teams = [];
    } else {
        teams = JSON.parse(localStorage.getItem("teams"))
    }
    return teams
}

static deleteTeamFromStorage (teamTitle) {
    let teams = this.getTeamsFromStorage();
    teams.forEach((team,index) => {
        if (team.title === teamTitle) {
            teams.splice(index,1)
        }
    });
    localStorage.setItem("teams",JSON.stringify(teams))
}

static clearAllTeamsFromStorage() {
    localStorage.removeItem("teams")
}

}
