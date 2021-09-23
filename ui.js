function UI() {

}

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