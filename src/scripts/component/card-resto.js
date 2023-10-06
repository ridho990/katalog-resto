class cardResto extends HTMLElement {
	set cardData(data) {
		this._cardData = data;
		this.render();
	}

	render() {
		const rating = this._cardData.rating;
		const bgColorRating = rating < 4 ? "bg-red" : "bg-blue";
		const colorTextReview = rating < 4 ? "text-red" : "text-blue";
		const textReview = rating < 4 ? "Not Good" : "Very Good";

		this.innerHTML = `
					<article class="card-info-resto">
						<div class="card-info-resto__img">
							<img
								src="${this._cardData.pictureId}"
								alt="Foto Resto ${this._cardData.name}"
							/>
						</div>
						<div class="card-info-resto__bottom">
							<a href="#" class="card-info-resto__navigasi" title="Menuju halaman resto ${this._cardData.name}">
								<div class="card-info-resto__rating-info flex-row">
									<span class="rating-resto-angka text-white ${bgColorRating}">${rating}</span>
									<p class="rating-resto-word ${colorTextReview}">${textReview}</p>
									<p class="review-resto text-navy">10k Review</p>
								</div>
								<div class="card-info-resto__profile-resto">
									<h3 class="text-navy text-2xl">${this._cardData.name}</h3>
									<h4 class="text-navy text-lg">${this._cardData.type} Resto'</h4>
									<p class="text-navy">${this._cardData.city}</p>
									<hr />
								</div>
								<p class="card-info-resto__description text-navy">
									${this._cardData.description}
								</p>
							</a>
						</div>
					</article>
		`;
	}
}

customElements.define("card-resto", cardResto);
