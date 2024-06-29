import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ListItem from "../../layouts/ListItem/ListItem";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    fetch(
      `https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/mySpot/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user, remove]);

  return (
    <div className="container mx-auto  grid md:grid-cols-3 justify-center">
      {items.map((item) => (
        <ListItem
          key={item._id}
          item={item}
          remove={remove}
          setRemove={setRemove}
        ></ListItem>
      ))}
    </div>
  );
};

export default MyList;
