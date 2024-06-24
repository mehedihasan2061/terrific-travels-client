import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    
    // const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        setRegisterError("")
         if (password.length < 6) {
           setRegisterError("Please Provide Must Be 6 Character");
           return;
         }
         if (!/[a-z]/.test(password)) {
           setRegisterError("Please provide at least one lowercase");
           return;
         }
         if (!/[A-Z]/.test(password)) {
           setRegisterError("Please provide at least one Uppercase");
           return;
         }
        //  if (!/[$&+,:;=?@#|'<>.-^*()%!]/.test(password)) {
        //    setRegisterError("Please provide at least one special character");
        //    return;
        //  }
          createUser(email, password)
            .then((result) => {
              const user = result.user;
                console.log(user);
                Swal.fire({
                  title: "success",
                  text: "User Register Successfully",
                  icon: "success",
                  confirmButtonText: "Ok",
                });

                updateUserProfile(name, photo)
                    .then(result => {
                        const user = result.user
                        console.log(user);
                    })
                    .catch(error => {
                    console.log(error.message);
                })

                form.reset('')
            })
            .catch((error) => {
                console.log(error.message);
                setRegisterError(error.message)
            });
    }

    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold my-6">Please Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="absolute right-3 top-12 text-xl">
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                    ></FaEyeSlash>
                  ) : (
                    <FaEye
                      onClick={() => setShowPassword(!showPassword)}
                    ></FaEye>
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {registerError && (
                  <p className="text-red-600 font-bold">{registerError}</p>
                )}
                <p>
                  Already have an account !{" "}
                  <Link
                    className="text-blue-500 font-semibold underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;