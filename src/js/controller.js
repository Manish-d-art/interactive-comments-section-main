import * as model from './model.js';
import commentsView from './views/commentsView.js';

const controlInitialComments = () => {
	const { comments } = model.state;
	commentsView.render(comments);
};
const init = function () {
	controlInitialComments();
};
init();
