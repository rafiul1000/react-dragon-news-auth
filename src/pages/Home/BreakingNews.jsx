import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] mt-7">
            <button className="btn btn-secondary my-6 mx-4">Breaking News</button>
            <Marquee className="font-semibold text-lg py-6" pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;