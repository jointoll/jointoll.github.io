

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
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
	Dots: false,
  });
  
  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
	Sync: {
	  target: mainCarousel,
	  friction: 0,
	},
	Dots: false,
	Navigation: false,
	center: true,
	slidesPerPage: 1,
	infinite: false,
  });

  const mainCarousel_2 = new Carousel(document.querySelector("#mainCarousel_2"), {
	Dots: false,
  });
  
  // Thumbnails
  const thumbCarousel_2 = new Carousel(document.querySelector("#thumbCarousel_2"), {
	Sync: {
	  target: mainCarousel_2,
	  friction: 0,
	},
	Dots: false,
	Navigation: false,
	center: true,
	slidesPerPage: 1,
	infinite: false,
  });
  
  
  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
	Carousel: {
	  on: {
		change: (that) => {
		  mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
			friction: 0,
		  });
		},
	  },
	},
  });


  Fancybox.bind('[data-fancybox="gallery02"]', {
	mainCarousel_2: {
	  on: {
		change: (that) => {
		  mainCarousel_2.slideTo(mainCarousel_2.findPageForSlide(that.page), {
			friction: 0,
		  });
		},
	  },
	},
  });

