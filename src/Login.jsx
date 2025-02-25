const Login = () =>{
  return(
    <div className="flex justify-center mt-16">
      <div className="card bg-gray-800 w-94 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title flex justify-center text-2xl mb-3">Login Page</h2>


          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">Enter Email</span>
            </div>
            <input type="text" className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text mb-2">Enter Password</span>
            </div>
            <input type="text" className="input input-bordered w-76 p-5" />
            <div className="label">
            </div>
          </label>


          <div className="card-actions justify-center mt-2">
            <button className="btn btn-primary shadow-2xl">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;