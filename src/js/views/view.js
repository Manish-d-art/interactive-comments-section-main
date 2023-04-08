import deleteIcon from '/src/assets/images/icon-delete.svg';
import editIcon from '/src/assets/images/icon-edit.svg';

export default class View {
	replyTextareaEle;

	render(data) {
		this.data = data;
		console.log(this.data);
		const { comment, currentUser } = this.data;
		this.commentAndReplyMarkUp(currentUser, comment);
		this.textarea.value = '';
	}

	getCommentText() {
		return this.textarea.value.trim();
	}

	removeTextarea() {
		this.replyTextareaEle = document
			.querySelector('.comments-container')
			.querySelector('.comments-container__write-comment');
		if (this.replyTextareaEle) {
			this.replyTextareaEle.remove();
			return true;
		}
	}

	commentAndReplyMarkUp(currentUser, comment) {
		const markup = `
        <li>
        <section class="main__replies main__replies-user">
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
        `;
		this.parentElement.insertAdjacentHTML('beforeend', markup);
	}
}
