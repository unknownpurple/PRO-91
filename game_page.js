player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player1_name").innerHTML = player1_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("plyeyr2_score").innerHTML = player2_score;

document.getElementById("player1_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player2_answer").innerHTML = "Answer Turn -" + player2_name;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = pareInt(number1)*parseInt("number2");
    question_word = "<h4 id='word_display'>"+number1+"X"+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML + row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}