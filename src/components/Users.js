import React from 'react';
import User from './User';

export default function Users () {
  return (
    <div className="right">
      <User src="https://a.d-cd.net/lIAAAgLQkuA-200.jpg" 
        alt="man" 
        name="Антон" />
      <div className="users__block">
        <User src="https://trademaster.ua/im/pics/119514-MrDashevskiy4.jpg" 
          alt="man" 
          name="Валера" 
          min/>
        <User src="http://www.rap.ru/img/news/b/12063.jpg?1566460446" 
          alt="man" 
          name="Игорь" 
          min/>
        <User src="https://miro.medium.com/max/390/1*Bgd1hPDrMLv3k8eH4TJ9KQ.jpeg" 
          alt="man" 
          name="Дмитрий" 
          min/>
        <User src="https://sun9-62.userapi.com/c856132/v856132006/f73d/VKm81lwmkpc.jpg" 
          alt="man" 
          name="Мамед" 
          min/>
      </div>
    </div>
  )
}