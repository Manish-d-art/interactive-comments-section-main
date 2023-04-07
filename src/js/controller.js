import * as model from './model.js';
import commentsView from './views/commentsView.js';
import addCommentView from './views/addCommentView.js';
import addReplyView from './views/addReplyView.js';

const controlInitialComments = () => {
	const { comments } = model.state;
	commentsView.render(comments);
};
const controlReply = () => {
	console.log(123);
};

const controlAddComment = () => {
	const currentUser = model.state.currentUser;
	console.log(currentUser);
	const comment = addCommentView.getComment();
	console.log(comment);
	addCommentView.render({ currentUser, comment });
};

const init = function () {
	controlInitialComments();
	addCommentView.addHandlerComment(controlAddComment);
	addReplyView.addHandlerReplyClick(controlReply);
};
init();
