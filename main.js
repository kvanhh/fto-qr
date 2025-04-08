var ourl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
var input_qr = document.getElementById("input_qr");
var createQR = document.getElementById("createQR");
var img = document.getElementById("qr_img-change");
var loading_animt = document.getElementById("loading_animt");

createQR.addEventListener('click', function() {
    loading_animt.classList.add('active');
    // console.log(input_qr.value);
    // console.log(ourl);
    // console.log(ourl + input_qr.value);
    setTimeout(function(){
        img.src = ourl + input_qr.value;
    }, 200);
    setTimeout(function(){
        loading_animt.classList.remove('active');
    }, 1000);
});
input_qr.addEventListener("keydown", function(event) {
    if(event.keyCode == 13){
        // console.log(input_qr.value);
        // console.log(ourl);
        // console.log(ourl + input_qr.value);
        
    loading_animt.classList.add('active');
    // console.log(input_qr.value);
    // console.log(ourl);
    // console.log(ourl + input_qr.value);
    setTimeout(function(){
        img.src = ourl + input_qr.value;
    }, 200);
    setTimeout(function(){
        loading_animt.classList.remove('active');
    }, 1000);
    }
})
