import View from './view.js';

class ScoreView extends View {
	_score;
	_parentEle;
	_plusBtn;
	_minusBtn;

	addHandlerClick(handler) {
		this.body.addEventListener('click', (e) => {
			this._plusBtn = e.target.closest('.plus-btn');
			this._minusBtn = e.target.closest('.minus-btn');
			if (!this._plusBtn && !this._minusBtn) return;
			this._setScoreProperty(e);
			handler();
		});
	}

	_findParentElement(e) {
		return e.target.closest('.comments-container__section__vote');
	}

	_setScoreProperty(e) {
		const parentEle = this._findParentElement(e);
		if (!parentEle) return;
		this._score = parentEle.querySelector('.score');
	}

	updateScore() {
		let scoreValue = +this._score.textContent;
		if (this._plusBtn) scoreValue += 1;
		if (scoreValue === 0) return;
		if (this._minusBtn) scoreValue -= 1;
		this._score.textContent = scoreValue;
	}
}

export default new ScoreView();
