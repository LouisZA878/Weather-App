import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";

const Header = ({ handleChange, handleSubmit }) => {
  return (
    <div className='Header'>
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' id="city" onChange={handleChange} placeholder="Search For a City"/>
            <button type='submit' className="submit"><FaSearch /></button>
        </form>
        <IoNotificationsOutline className="Notify"/>
        <RxPerson className="Profile"/>
        <img />
    </div>
  )
}

export default Header