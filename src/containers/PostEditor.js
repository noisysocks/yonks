import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

class PostEditor extends Component {
  render() {
    return (
      <form>
        <p>
          <label>
            <b>Title</b>
            <TextInput placeholder="11 Photos You Won't Believe Are Real" />
          </label>
        </p>
        <p>
          <label>
            <b>URL</b>
            <TextInput placeholder="http://example.com/11-photos-you-wont-believe-are-real" />
          </label>
        </p>
        <p>
          <label>
            <b>Provider</b>
            <TextInput placeholder="Friendface" />
          </label>
        </p>
        <p>
          <label>
            <b>Time</b>
            <TextInput placeholder="April 28, 17:00" />
          </label>
        </p>
        <p>
          <Button>Save</Button>
        </p>
      </form>
    );
  }
}

export default PostEditor;
