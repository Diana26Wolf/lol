Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
    flip_horiz: true
})
camera= document.getElementById("camera")
Webcam.attach("#camera")
function capture(){
    Webcam.snap(
        function(data_uri){
                document.getElementById("result").innerHTML= "<img id='captured_img' src= '"+data_uri+"'>";
        }
    )
}