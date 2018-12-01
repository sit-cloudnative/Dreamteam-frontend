export default ({profile}) => (
    <div>
        <img style={{ borderRadius: '50%' }} src="../../static/images/logo/user-1.png" width="180" height="171" />
        <h3>{profile.firstname}  {profile.lastname}</h3>
        <h6>@{profile.username}</h6>
        <hr />
    </div>
)