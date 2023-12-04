import { Avatar, Button, Card } from 'flowbite-react';
import useProperty from '../../hooks/useProperty';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddedProperty = () => {
    const { user } = useContext(AuthContext);

    const [allProperty, refetch] = useProperty();
    const axiosSecure =useAxiosSecure();

    const userProperties = allProperty.filter(property => property.agentEmail === user.email);

    const handleDelete= (id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/properties/${id}`)
              .then(res=>{
                 refetch();
                 Swal.fire({
                    title: "Deleted!",
                    text: "Delete successfully.",
                    icon: "success"
                  });
                
              })
             
            }
          });
    }
    return (
        <div>
            <h1 className='text-2xl font-bold mt-4 pl-3 text-[#205081]'>Total Added Property : {userProperties.length}</h1>

            <div className='grid grid-cols-2 gap-2 p-2'>
                {
                    userProperties.map(data =>

                        <Card
                            className="h-[480px]"
                        >
                           <div className='relative'>
                           <div className='flex gap-5 absolute top-0 right-0'>
                          <Button color="">
                          < FaRegEdit  className='text-2xl  bg-slate-200'></FaRegEdit>
                          </Button>
                           <Button color=""  onClick={()=>handleDelete(data._id)}>
                           < RxCross2   className='text-2xl bg-slate-200'></ RxCross2 >
                           </Button>
                            
                           </div>
                             
                            <img src={data.image} className='h-[250px] rounded-lg w-full' alt="" />
                           </div>
                            <h2>{data.name}</h2>
                            <div className='flex justify-around'>
                                <div className='flex items-center gap-2'>
                                    <span> <FaLocationDot /></span>
                                    <p> {data.location}</p>

                                </div>
                                <div>
                                    Price: $ {data.price}
                                </div>

                            </div>
                            <div className='flex gap-4 items-center'>
                                <Avatar img={data.agentImage} alt="avatar of Jese" rounded />
                                <div className='flex flex-col font-semibold'>
                                    <h4>Agent Name</h4>
                                    <h2>{data.agentName}</h2>
                                </div>
                            </div>
                            <h3 className='capitalize'>Status: {data.status}</h3>

                        </Card>
                    )
                }
            </div>


        </div>
    );
};

export default AddedProperty;