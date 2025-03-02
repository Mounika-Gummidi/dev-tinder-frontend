
const UserCard = ({ user }) =>{
  console.log(user);
  const {firstName, lastName,age,gender,skills,about} = user;
  return(
    <div>
      <div className="card bg-base-200 w-96 shadow-sm py-4">
      <figure>
        <img
          src={user.photoUrl}
          alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+" "+lastName}</h2>
        <p>{about}</p>
        {age && gender && <p>{age+","+gender}</p>}
        <div className="card-actions justify-end py-2 pb-0">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserCard;