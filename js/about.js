(() => {

	console.log('fired');

	const	moreButton 	= document.querySelector("#readMore"),
		 	moreContent = document.querySelector(".moreContent");

	function readMore() {
		
		moreContent.classList.toggle("slideToggle");

	}
		moreButton.addEventListener('click', readMore);


})();
