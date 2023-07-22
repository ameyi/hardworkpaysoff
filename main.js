function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6HiIg6Orw/model.json", modelReady);
}
function modelReady(){
    console.log("Model has been tested and loaded");
    classifier.classify(gotResults);
}
var cat = document.getElementById("cat").innerHTML = 0;
var dog = document.getElementById("dog").innerHTML = 0;
var gorilla = document.getElementById("gorilla").innerHTML = 0;
var owl = document.getElementById("owl").innerHTML = 0;
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("rlabel").innerHTML = "I hear -"+results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy - "+(results[0].confidence * 100).toFixed(2);
        document.getElementById("rlabel").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("confidence").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_g+")";
        img1 = document.getElementById("dog");
        img2 = document.getElementById("cat");
        img3 = document.getElementById("gorilla");
        img4 = document.getElementById("owl");
    }
    if (results[0].label=="dog"){
            img1.src = "dog.gif";
            img2.src = "catgif.jpeg";
            img3.src = "gorilla.jpeg";
            img4.src = "open.jpeg";
        }
    else if(results[0].label=="cat"){
        img1.src = "dog.jpeg";
        img2.src = "cat.gif";
        img3.src = "gorilla.jpeg";
        img4.src = "open.jpeg";
    }
    else if(results[0].label=="gorilla"){
        img1.src = "dog.jpeg";
        img2.src = "catgif.jpeg";
        img3.src = "gorilla.gif";
        img4.src = "open.jpeg";
    }
    else if(results[0].label=="owl"){
        img1.src = "dog.jpeg";
        img2.src = "catgif.jpeg";
        img3.src = "gorilla.jpeg";
        img4.src = "owl.gif";
    }
    else{
        console.error(error);
    }
}
