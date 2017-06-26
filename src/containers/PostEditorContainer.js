import { connect } from 'react-redux';
import PostEditor from '../components/PostEditor';
import { savePost, deletePost } from '../store/ducks/posts';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit(postInfo) {
      dispatch(savePost(postInfo));
      ownProps.onSubmit();
    },
    onDelete(id) {
      dispatch(deletePost(id));
      ownProps.onSubmit();
    },
  };
}

const PostEditorContainer = connect(null, mapDispatchToProps)(PostEditor);

export default PostEditorContainer;
