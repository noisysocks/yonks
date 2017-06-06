import React, { Component } from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

class PostEditor extends Component {
  render() {
    return (
      <form>
        <p>
          <FormInput label="Title" placeholder="10 Reasons To Live" />
        </p>
        <p>
          <FormInput
            label="URL"
            placeholder="http://example.com/10-reasons-to-live"
          />
        </p>
        <p>
          <FormInput label="Provider" placeholder="Sharespot" />
        </p>
        <p>
          <FormInput label="Time" placeholder="Jun 5, 17:00" />
        </p>
        <p>
          <FormButton>Save</FormButton>
        </p>
      </form>
    );
  }
}

export default PostEditor;
