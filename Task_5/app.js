// const { Html5Qrcode, Html5QrcodeScanner } = require("html5-qrcode");

 const scanner = new Html5QrcodeScanner('reader', {
	qrbox: {
              width :250,
			  hight: 250,
	},
	  fps: 20,

 });

    scanner.render(success, error);
	 function success(result){
		document.getElementById('result').innerHTML = `
		<h2> Success !</h2>
		<p>  <a href = "${result}">${result} </a></p>`;
		scanner.clear();
		document.getElementById('reader').remove();

	 }
	 function error(err){
		console.error(err);
	 }