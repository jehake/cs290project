
if (document.getElementById("downloadButton")){
	var download = document.getElementById("downloadButton");

	download.addEventListener("click", request);

	function request(){
	    window.location = "widget.pdf";
	}
		
}


