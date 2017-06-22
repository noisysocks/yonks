import { connect } from 'react-redux';
import { savePost } from '../store/ducks/posts';
import PostEditor from '../components/PostEditor';

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
