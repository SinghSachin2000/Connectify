import React,{useState,useContext} from 'react';
import { UserContext } from '../context/user.context';
import { Link ,useNavigate} from 'react-router-dom';
import axios from '../config/axios';

function Register() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const {setUser} = useContext(UserContext);

    const navigate = useNavigate();

    function submithandler(e){
        e.preventDefault();
        axios.post('/users/register',{email,password}).then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            setUser(res.data.user)
            navigate('/');
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>
        <form onSubmit={submithandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
              Email
            </label>
            <input
            onChange={(e)=>setemail(e.target.value)}
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 text-sm mb-2">
              Password
            </label>
            <input
            onChange={(e)=>setpassword(e.target.value)}
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
