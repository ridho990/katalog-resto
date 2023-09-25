const main = () => {
	const openNavbar = () => {
		const humburger = document.querySelector(".btn-humburger");
		const navbar = document.querySelector(".header__navbar");
		const btnClose = document.querySelector(".btn-x-navbar");
		console.log(humburger);
		humburger.addEventListener("click", function () {
			navbar.classList.add("active-navbar");
			humburger.classList.add("active-navbar");
			btnClose.classList.add("active-navbar");
		});

		btnClose.addEventListener("click", function () {
			navbar.classList.remove("active-navbar");
			humburger.classList.remove("active-navbar");
			btnClose.classList.remove("active-navbar");
		});
	};

	const scrollNavbar = () => {
		const header = document.querySelector(".header");
		window.onscroll = () => {
			if (window.scrollY > 50) {
				header.classList.add("bg-nav-active");
			} else {
				header.classList.remove("bg-nav-active");
			}
		};
	};

	scrollNavbar();
	openNavbar();
};

export default main;
