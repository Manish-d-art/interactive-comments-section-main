import * as model from './model.js';
import commentsView from './views/commentsView.js';
import addCommentView from './views/addCommentView.js';
import addReplyView from './views/addReplyView.js';

const controlInitialComments = () => {
	const { comments } = model.state;
	commentsView.render(comments);
};

const controlAddReplyMarkUp = (container) => {
	const { currentUser } = model.state;
	addReplyView.render({ currentUser, container });
};

const controlAddComment = () => {
	const { currentUser } = model.state;
	const comment = addCommentView.getComment();
	addCommentView.render({ currentUser, comment });
};

const init = function () {
	controlInitialComments();
	addCommentView.addHandlerComment(controlAddComment);
	addReplyView.addHandlerReplyClick(controlAddReplyMarkUp);
};
init();
