import React from 'react';
import copy from 'clipboard-copy'; // یا استفاده از کتابخانه دیگری مانند react-copy-to-clipboard

class CopyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  handleCopyClick = () => {
    copy(window.location.href)
      .then(() => {
        this.setState({ copied: true });
      })
      .catch((err) => {
        console.error('مشکل در کپی کردن: ', err);
      });
  }

  render() {
    return (
      <div>
        <button className='btn btn-success mx-2' onClick={this.handleCopyClick}>
          {this.state.copied ? 'The address was copied!' : 'Copy the website address.'}
        </button>
      </div>
    );
  }
}

export default CopyButton;
