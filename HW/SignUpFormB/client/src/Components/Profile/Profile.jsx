import { useLocation } from "react-router-dom";
import './Profile.css'

function Profile() {

  const location = useLocation();
  const user = location.state;

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <h2 className="profile-name">{user.username}</h2>

        <p className="profile-role">Welcome to your profile</p>

        <button className="profile-btn">Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;