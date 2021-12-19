function addUser(){
    player1_name=document.getElementById("player_1").value;
    player2_name=document.getElementById("player_2").value;
     
    localStorage.setItem("player 1",player_1);
    localStorage.setItem("player 2",player_2);

window.location(PQmain_quiz.html);
}