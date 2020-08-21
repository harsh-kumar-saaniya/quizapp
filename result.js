function scoreDisplayer() {
    var total = sessionStorage.getItem("score")
    var userPoints = document.getElementById("userPoints");
    // userPoints.innerHTML = "Your score is:  " +  total ;
    userPoints.innerHTML = `Your Score is: ${total} out of 60`
    
}


scoreDisplayer()




