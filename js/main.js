(() => {

	console.log('fired');

	const	button 		= document.querySelector("#moreButton"),
		 	eventList 	= document.querySelector(".eventRow3"),
		 	moreButton 	= document.querySelector("#readMore"),
		 	moreContent = document.querySelector(".moreContent"),
		 	menuButton 	= document.querySelector("#menubutton"),
		 	burgerCon 	= document.querySelector("#burgerCon"),
		 	next 		= document.querySelector("#next");

	function loadMore() {
		
		eventList.classList.toggle("slideToggle");

		}

	function menuExpand() {

			burgerCon.classList.toggle("slideToggle");
			menuButton.classList.toggle("expanded");

		}

	

		menuButton.addEventListener("click", menuExpand);
		button.addEventListener("click", loadMore);


})();

