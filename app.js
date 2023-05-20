const sections=document.querySelectorAll('.section'); /*Select everything that has the class of section in the html document*/
const sectBtns=document.querySelectorAll('.controls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelectorAll('.main-content');

function pageTransitions(){
	//Button click active class
	//Gets rid of the class that is not active
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', function(){
			let currentBtn=document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += ' active-btn';
		})
	}

	//Sections active class
	allSections.forEach((section) =>{
	section.addEventListener('click', (e) =>{
		const id = e.target.dataset.id;
		if (id) {
			//Remove selected from the other button
			//Loops whatever is inside the body
			sectBtns.forEach((btn) =>{
				btn.classList.remove('active');
			});
			e.target.classList.add('active');

			//Hide other sections
			sections.forEach((section) =>{
				section.classList.remove('active');
			});
			const element = document.getElementById(id);
			element.classList.add('active');
		}
	});
	});

	//Toggle theme
	const themeBtn=document.querySelector('.theme-btn');
	themeBtn.addEventListener('click', () =>{
		let element = document.body;
		element.classList.toggle('light-mode')
	})
}

pageTransitions();