

const navLinks = document.querySelectorAll('.customization-bar .nav-link');
const navBar = document.querySelector('.customization-bar');

function _scrollTo(selector, yOffset = 0){
	const el = document.querySelector(selector);
	const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

	window.scrollTo({top: y, behavior: 'smooth'});
}

navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		_scrollTo(e.target.getAttribute('href'), -navBar.offsetHeight);
	})
})


// Initialise Carousel
// const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
// 	Dots: false,
//   });
  
  // Thumbnails
//   const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
// 	Sync: {
// 	  target: mainCarousel,
// 	  friction: 0,
// 	},
// 	Dots: false,
// 	Navigation: false,
// 	center: true,
// 	slidesPerPage: 1,
// 	infinite: false,
//   });

//   const mainCarousel_2 = new Carousel(document.querySelector("#mainCarousel_2"), {
// 	Dots: false,
//   });
  
  // Thumbnails
//   const thumbCarousel_2 = new Carousel(document.querySelector("#thumbCarousel_2"), {
// 	Sync: {
// 	  target: mainCarousel_2,
// 	  friction: 0,
// 	},
// 	Dots: false,
// 	Navigation: false,
// 	center: true,
// 	slidesPerPage: 1,
// 	infinite: false,
//   });
  
  
  // Customize Fancybox
//   Fancybox.bind('[data-fancybox="gallery"]', {
// 	Carousel: {
// 	  on: {
// 		change: (that) => {
// 		  mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
// 			friction: 0,
// 		  });
// 		},
// 	  },
// 	},
//   });


//   Fancybox.bind('[data-fancybox="gallery02"]', {
// 	mainCarousel_2: {
// 	  on: {
// 		change: (that) => {
// 		  mainCarousel_2.slideTo(mainCarousel_2.findPageForSlide(that.page), {
// 			friction: 0,
// 		  });
// 		},
// 	  },
// 	},
//   });

// let popup = document.getElementById("popup1");
let popup = document.getElementById("contactModal");

function openPopup(){
	$("#contactModal").modal("show");
}
// function closePopup(){
// 	popup.classList.remove("open-popup");
// }

const popupHeader = popup.querySelector('.header'),
	  popupContent = popup.querySelector('.content');
	//   popupClose = popup.querySelector('.close'),
	//   popupConfirm = popup.querySelector('.confirm');
const successMessage = 'Thank you for contacting me, I have received your message, I will reply as soon as possible.',
      successHeader = 'Confirmed!',
      failedMessage = 'Sorry, there was an error sending your message.',
	  failedHeader = 'OOOPS!!';

// popupClose.addEventListener('click', () => {
// 	closePopup();
// });
// popupConfirm.addEventListener('click', () => {
// 	closePopup();
// })

let contactFormSubmit = document.querySelector('#send'); 

const clearForm = () => {
	document.querySelector('#name').value = '';
	document.querySelector('#email').value = '';
	document.querySelector('#message').value = '';
}

contactFormSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	let contactForm = {
		name: document.querySelector('#name').value,
		email: document.querySelector('#email').value,
		message: document.querySelector('#message').value
	};
	let test = $.ajax({
		method: 'POST',
		url: 'https://formsubmit.co/ajax/8708e0e5ec7c319500caf43337b3ee23',
		dataType: 'json',
		accepts: 'application/json',
		data: contactForm,
		success: (data) => {
			popupHeader.innerHTML = successHeader;
			popupContent.innerHTML = successMessage;
			openPopup();
		},
		error: (err) => {
			popupHeader.innerHTML = failedHeader;
			popupContent.innerHTML = failedMessage;
			openPopup();
		}
	});

	contactFormSubmit.disabled=true;
	clearForm();
	
	
})
