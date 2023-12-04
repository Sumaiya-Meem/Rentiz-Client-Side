import { Card } from 'flowbite-react';
import useProperty from '../../hooks/useProperty';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { FaLocationDot } from "react-icons/fa6";

const AddedProperty = () => {
    const { user } = useContext(AuthContext);

    const [allProperty,refetch] =useProperty()

    const userProperties = allProperty.filter(property => property.agentEmail === user.email);
    return (
        <div> 
            <h1 className='text-2xl font-bold mt-4 pl-3 text-[#205081]'>Total Added Property : {userProperties.length}</h1>
   
   <div  className='grid grid-cols-2 gap-2 p-2'>
   {
    userProperties.map(data => 
        
        <Card
      className="max-w-sm"
    >
        <img src={data.image} className='h-[250px] rounded-lg' alt="" />
        <h2>{data.name}</h2>
        <FaLocationDot />
      
    </Card>
        )
   }
    </div>
 

        </div>
    );
};

export default AddedProperty;