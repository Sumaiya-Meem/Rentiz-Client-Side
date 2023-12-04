import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const AddProperty = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure=useAxiosSecure()

    const handleAddProperty=(e)=>{

        e.preventDefault();

        const form = e.target;
        const name= form.name.value || "Not-Given"
        const location= form.location.value || "Not-Given"
        const image= form.image.value || "Not-Given"
        const price= form.price.value || "Not-Given"
        const agentName= form.agentName.value || "Not-Given"
        const agentEmail= form.agentEmail.value || "Not-Given"
        const status="pending"
        const agentImage=user.photoURL || "Not-Given"

        const propertyInfo ={
            name,location,image,price,agentName,agentEmail,status,agentImage
        }
        // console.log(propertyInfo)
        axiosSecure.post('/properties',propertyInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Property information add successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })

    }
    return (
        <div>


            <form className="p-2 lg:p-6" onSubmit={handleAddProperty}>
                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Property Name" />
                        </div>
                        <TextInput type="text" placeholder="name" name="name" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Property Location" />
                        </div>
                        <TextInput type="text" name="location" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Image" />
                        </div>
                        <TextInput type="text" placeholder="image" name="image" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Price" />
                        </div>
                        <TextInput type="text" name="price" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Agent Name" />
                        </div>
                        <TextInput type="text" value={user.displayName} name="agentName" readOnly shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Agent Email" />
                        </div>
                        <TextInput type="text" value={user.email} name="agentEmail" readOnly shadow />
                    </div>
                </div>
                
                <Button type="submit">Add</Button>
            </form>


        </div>
    );
};

export default AddProperty;