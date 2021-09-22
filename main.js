var prediction1="";
var prediction2="";
Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:100
});
var cam=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="cap" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
var classfier=ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
    console.log("modelisloaded");
}
