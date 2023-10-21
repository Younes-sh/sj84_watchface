import React, { Component } from 'react';
import './FadeIn.css';

class FadeIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // انیمیشن اجرا شود هنگامی که به مقدار خاصی اسکرول کرده و رسیده‌ایم
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > this.fadeInRef.offsetTop) {
      this.setState({ visible: true });
      window.removeEventListener('scroll', this.handleScroll); // انیمیشن را یک بار اجرا کنید
    }
  };

  render() {
    const { visible } = this.state;
    return (
      <div style={{textAlign:'justify'}}
        ref={(el) => (this.fadeInRef = el)}
        className={`fade-in ${visible ? 'is-visible' : ''} `}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FadeIn;
