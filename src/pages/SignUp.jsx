import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import backgroundImage from '../assets/building.jpg';
import useAxiosPublic from "../hooks/UseAxiosPublic";
import SocialLogin from "../components/SocialLogin";


const SignUp = () => {
  const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const {
      createUser,
      updateUserProfile,
    } = UseAuth()

   
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL

            }
            console.log(userInfo)
            
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  toast.success('User created successfully')
                  navigate('/');
                }
              })


          })
          .catch(error => console.log(error))
      })
  };
    return (
      <div className='flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900 bg-white bg-opacity-90'>
        <div className='mb-2 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to .....</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
            {errors.name && <span className="text-orange-900">Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
            {errors.photoURL && <span className="text-orange-900">Photo URL is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
            {errors.email && <span className="text-orange-900">Email is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"  {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} placeholder="password" className="input input-bordered" />
            {errors.password?.type === 'required' && <p className="text-orange-500">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-orange-500">Password must be 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className="text-orange-500">Password must be less than 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className="text-orange-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
            
          </div>
          <div className="form-control mt-6">
            <input className="btn bg-orange-500 text-white" type="submit" value="Sign Up" />
          </div>
        </form>
        <div className='flex flex-col items-center pt-4 space-x-1'>
          <p className=' text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex dark:bg-gray-700'>
            <SocialLogin></SocialLogin>
           
          </div>
          <p className=' text-sm text-gray-400'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-orange-500 text-gray-600'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;

// import { Link, useNavigate } from "react-router-dom";
// import UseAuth from "../hooks/UseAuth";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import backgroundImage from "../assets/building.jpg";
// import useAxiosPublic from "../hooks/UseAxiosPublic";
// import SocialLogin from "../components/SocialLogin";

// const SignUp = () => {
//   const axiosPublic = useAxiosPublic();
//   const navigate = useNavigate();
//   const { createUser, updateUserProfile } = UseAuth();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     createUser(data.email, data.password)
//       .then((result) => {
//         const loggedUser = result.user;
//         console.log(loggedUser);

//         updateUserProfile(data.name, data.photoURL)
//           .then(() => {
//             const userInfo = {
//               name: data.name,
//               email: data.email,
//               photo: data.photoURL,
//             };

//             axiosPublic.post("/users", userInfo).then((res) => {
//               if (res.data.insertedId) {
//                 console.log("User added to the database");
//                 reset();
//                 toast.success("User created successfully");
//                 navigate("/");
//               }
//             });
//           })
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Error creating user. Please try again.");
//       });
//   };

//   return (
//     <div
//       className="flex justify-center items-center min-h-screen"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white bg-opacity-90 shadow-lg">
//         <div className="mb-2 text-center">
//           <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
//           <p className="text-sm text-gray-500">Welcome to Our Platform</p>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               placeholder="Enter your name"
//               className="input input-bordered w-full"
//             />
//             {errors.name && (
//               <span className="text-red-500 text-sm">{errors.name.message}</span>
//             )}
//           </div>

//           {/* Photo URL Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Photo URL</span>
//             </label>
//             <input
//               type="text"
//               {...register("photoURL")}
//               placeholder="Enter your photo URL"
//               className="input input-bordered w-full"
//             />
//             {errors.photoURL && (
//               <span className="text-red-500 text-sm">
//                 {errors.photoURL.message}
//               </span>
//             )}
//           </div>

//           {/* Email Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="Enter your email"
//               className="input input-bordered w-full"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm">{errors.email.message}</span>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters",
//                 },
//                 maxLength: {
//                   value: 20,
//                   message: "Password must be less than 20 characters",
//                 },
//                 pattern: {
//                   value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//                   message:
//                     "Password must include uppercase, lowercase, number, and special character",
//                 },
//               })}
//               placeholder="Enter your password"
//               className="input input-bordered w-full"
//             />
//             {errors.password && (
//               <span className="text-red-500 text-sm">
//                 {errors.password.message}
//               </span>
//             )}
//           </div>

//           {/* Submit Button */}
//           <div className="form-control mt-6">
//             <button type="submit" className="btn bg-orange-500 text-white w-full">
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className='flex dark:bg-gray-700'>
//             <SocialLogin></SocialLogin>
//           </div>

//         {/* Footer */}
//         <div className="text-center mt-4">
       
//           <p className="text-sm text-gray-500">
//             Already have an account?{" "}
//             <Link to="/login" className="text-orange-500 hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
