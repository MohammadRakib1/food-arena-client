import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }

    return (
        <div>
            <SectionTitle heading='Update Item' subHeading='Refresh Info'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Recipe Name*</span>
                    </div>
                    <input type="text" defaultValue={name} placeholder="Recipe name" {...register('name', { required: true })} className="input input-bordered w-full my-6" />
                </label>
                <div className='flex gap-6'>
                    {/* category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                            <option disabled value='default'>select a category</option>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                        </select>
                    </label>
                    {/* price */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input type="text" placeholder="price" defaultValue={price} {...register('price', { required: true })} className="input input-bordered w-full" />
                    </label>
                </div>
                {/* recipe details */}
                <div className="form-control my-6">
                    <div>
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24 w-full" placeholder="Bio"></textarea>
                </div>
                <div className='form-control w-full my-6'>
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button className='btn'>
                    Update Menu Item
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;