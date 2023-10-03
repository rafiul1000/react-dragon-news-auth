import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-[#403F3F] text-xl font-semibold">All Categories</h2>
            {
                categories.map(category => <Link 
                    className="block text-[#9F9F9F] text-xl font-medium ml-4 mt-8" 
                    key={category.id} 
                    to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;