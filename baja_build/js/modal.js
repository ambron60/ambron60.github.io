// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal - use its "alt" text as a caption
var imgArray = document.querySelectorAll('.image-gallery img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgArray.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}