import { useContext, useEffect, useState  } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ListItem from "../../layouts/ListItem/ListItem";


const MyList = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    const [control, setControl] = useState(false);
    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/mySpot/${user?.email}`)
            .then(res => res.json())
            .then(data => {
            setItems(data);
        })
    },[user,control])

   
    
    return (
        <div className="container mx-auto  grid grid-cols-3 justify-center">
            {
                items.map(item => <ListItem key={item._id} item={item} control={control} setControl={setControl}></ListItem>)
            }
        </div>
    );
};

export default MyList;