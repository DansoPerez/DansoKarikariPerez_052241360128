const buttons = document.querySelectorAll('.card button');

buttons.forEach((button) => {
	button.addEventListener('click', function () {
		const targetId = this.dataset.target;
		const content = document.getElementById(targetId);
		const card = this.parentElement;

		card.classList.toggle('active');
		content.classList.toggle('show');
	});
});


document.getElementsById('about').addEventListener('click', function() {
    document.getElementsByClassName('welcome').scrollIntoView({ behavior: 'smooth' });
});