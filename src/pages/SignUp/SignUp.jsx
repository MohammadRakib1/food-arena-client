import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then((res => {
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user created successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            }))
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Food Arena | Sign UP</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photoUrl" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase,
                                    one number and
                                    one special characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary w-full" type="submit" value="Sign Up" />
                            </div>
                            <p><small><Link to='/login'>Already have an account</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;