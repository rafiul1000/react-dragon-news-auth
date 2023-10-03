import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-12' src={logo} alt="" />
            <p className='mt-5 text-[#706F6F] font-normal text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl mt-2 font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;