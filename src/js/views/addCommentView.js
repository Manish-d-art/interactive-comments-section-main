import deleteIcon from '/src/assets/images/icon-delete.svg';
import editIcon from '/src/assets/images/icon-edit.svg';

class addCommentView {
	_parentElement = document.querySelector('.comments-container');
	_form = document.querySelector('.form');
	_textarea = document.querySelector('.textarea-filed');
	_data;

	render(data) {
		this._data = data;
		const { comment, currentUser } = this._data;
		this._textareaMarkUp(currentUser, comment);
		this._textarea.value = '';
	}

	addHandlerComment(handler) {
		this._textarea.focus();
		this._form.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}

	getComment() {
		const text = this._textarea.value;
		return text;
	}

	_textareaMarkUp(currentUser, comment) {
		const markup = `
        <li>
        <section class="main__replies">
          <div class="comments-container__user">
            <img class="comments-container__user-dp" src="${currentUser.image.png}" alt="user-dp">
            <p class="comments-container__user-name">juliusomo</p>
            <p class="comments-container__user-time">2 days ago</p>
         </div>
         <p class="comments-container__section-content">
            ${comment}
         </p>
         <div class="comments-container__section__vote">
            <button class="up-btn">+</button>
            <p class="score">12</p>
            <button class="down-btn">-</button>
         </div>
        <div class="comments-container__section__replyNmodify">
          <button class="delete-btn">
            <img class="delete-icon" src="${deleteIcon}" alt="delete-icon">
            delete
          </button>
          <button class="edit-btn"> 
            <img class="edit-icon" src="${editIcon}" alt="edit-icon">
            edit
          </button>
        </div>
        </section>
      </li>
      <ul class="main__replies-container">
      </ul>
        `;
		this._parentElement.insertAdjacentHTML('beforeend', markup);
	}
}

export default new addCommentView();
