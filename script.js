function showImage() {
  var rollNumber = document.getElementById("numberInput").value;
  var imageUrl = "https://ucam.bup.edu.bd/Upload/Avatar/" + rollNumber + ".jpg";
  var outputImage = document.getElementById("outputImage");

  if (rollNumber.length === 10) {
    outputImage.src = imageUrl;
	
    outputImage.onerror = function() {
      alert("No image found for the provided roll number.");
    };
  } else {
    alert("Please enter a roll number.");
  }
}
