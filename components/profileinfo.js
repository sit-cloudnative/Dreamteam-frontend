export default ({profile}) => (
    <div>
        <img style={{ borderRadius: '50%' }} src="../../static/images/avatar/user1.jpg" width="180" height="171" />
        <h3>{profile.firstname}  {profile.lastname}</h3>
        <h6>@{profile.username}</h6>
        <hr />
        <button type="button" className="btn btn-outline-danger">My Favorite Subjects</button>
    </div>
)