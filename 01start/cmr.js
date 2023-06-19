function m0k(pGbn){
    if (pGbn=="contents")
        document.getElementById("idH1").innerHTML="메롱";
    else if (pGbn=="color")
        document.getElementById("idH1").style="color:green";
    else if (pGbn=="img")
        document.getElementById("idImg").src="http://arabbit.link/images/tiger.png";
    else if (pGbn=="hid")
        document.getElementById("idImg").style="display:none";
    else if (pGbn=="show")
        document.getElementById("idImg").style="display:block";
}