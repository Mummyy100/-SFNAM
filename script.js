document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '<strong>Your Answers:</strong><br>' +
        '1. ' + q1 + '<br>' +
        '2. ' + q2 + '<br>' +
        '3. ' + q3;
    answersDiv.style.display = 'block';
});
