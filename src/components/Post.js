import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
          src="https://a.d-cd.net/lIAAAgLQkuA-200.jpg" 
          alt="man" 
          name="Anton" 
          min/>
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
        какой-то аккаунт
        </div>
        <div className="post__descr">
        Приветствую всех, кто заходит в гости! Автомобиль куплен в марте 2016 года. Altezza — двушка-пушка! Машина которая не доставляет проблем, а приносит только удовольствие и драйв.
        </div>
      </div>
    )
  }
}