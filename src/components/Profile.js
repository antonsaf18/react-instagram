import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User 
        src="https://a.d-cd.net/lIAAAgLQkuA-200.jpg" 
        alt="man" 
        name="Anton"/>
      <Palette/>
    </div>
  )
}
export default Profile;