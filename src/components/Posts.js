import React, {Component} from 'react'; 
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://a.d-cd.net/myAAAgNA4eA-960.jpg" alt="inst"/>
        <Post src="https://a.d-cd.net/YsAAAgMfouA-960.jpg" alt="second"/>
      </div>
    )
  }
}