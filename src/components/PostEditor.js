import React, { Component } from 'react';
import TextInput from './TextInput';
import Button from './Button';

class PostEditor extends Component {
  render() {
    return (
      <form>
        <p>
          <label>
            <b>Title</b>
            <TextInput
              placeholder="11 Photos You Won't Believe Are Real"
              tabIndex="1"
            />
          </label>
        </p>
        <p>
          <label>
            <b>URL</b>
            <TextInput
              placeholder="http://example.com/11-photos-you-wont-believe-are-real"
              tabIndex="2"
            />
          </label>
        </p>
        <p>
          <label>
            <b>Provider</b>
            <TextInput placeholder="Friendface" tabIndex="3" />
          </label>
        </p>
        <p>
          <label>
            <b>Time</b>
            <TextInput placeholder="April 28, 17:00" tabIndex="4" />
          </label>
        </p>
        <p>
          <Button tabIndex="5">Save</Button>
        </p>
      </form>
    );
  }
}

export default PostEditor;
