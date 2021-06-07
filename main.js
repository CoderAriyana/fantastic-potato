function setup(){
    canavs = createCanvas (300, 300);
        video = createCapture(VIDEO);
        video.hide();
        classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", modelLoaded);
    }function modelLoaded(){
        console.log("modelLoaded");
    } 
    
    function draw(){
     image(video, 0, 0, 301, 301);
    classifier.classify(video,gotResults);
    }
    function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("accuracy_object").innerHTML = results[0].confidence.toFIxed(2);
    
    }
    }    