import { connect } from 'react-redux';
import PostEditor from '../components/PostEditor';
import { savePost } from '../store/ducks/posts';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit(post) {
      dispatch(savePost(post));
      ownProps.onSubmit();
    },
  };
}

const PostEditorContainer = connect(null, mapDispatchToProps)(PostEditor);

export default PostEditorContainer;
