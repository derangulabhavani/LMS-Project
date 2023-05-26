import React from 'react';


const Navbar = () => {
    function Logout()
    {
      localStorage.clear();
            window.location="/";
         
    }
    function Test()
    {
      if(localStorage.getItem('user')==null)
         return false;
      return true;
    }
  return (
    <div>
        <nav className='navbar navbar-expand-lg ' style={{background: "#3baea0"}} >
            <div className='container-fluid'>
                <a href="/" className='navbar-brand'>
                    <img src="https://th.bing.com/th/id/OIP.YMlcItwqDOzdVfdgcVgq9QHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="hexaware" style={{height:'50px',borderRadius:"50%"}}/>
                </a>

                <button className='navbar-toggler' type="button" data-bs-toggler="collapse" data-bs-target="#nav"></button>
                <div className='collapse navbar-collapse' id='nav'>
                {Test()?
                <ul className='navbar-nav'>
                              <li className='nav-item'  >
                                 <h4 > <b>
                                    <a className='nav-link active' href='' style = {{color: "black"}}>
                                    Leave Management System
                                    </a>
                                 </b></h4>
                              </li>
                              <li className='nav-item'>
                                 <a className='nav-link active' href='/'>Home</a>
                              </li>
                              <li className='nav-item'>
                                 <a className='nav-link active' href='/dashboard'>My Dashboard</a>
                              </li>
                              <li className='nav-item'>
                                 <button style={{'float':'right'}} className='btn btn-danger' onClick={()=>Logout()}>Logout</button>
                              </li>
                           </ul>:<ul className='navbar-nav'>
                           <li className='nav-item'  >
                           <h4 > <b>
                              <a className='nav-link active' href='' style = {{color: "#900048"}}>
                              Leave Management System
                              </a>
                            </b></h4>
                        </li>
                        {/* <li className='nav-item'>
                           <a className='nav-link active' href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                           <a className='nav-link active' href='/login'>Login</a>
                        </li>
                        <li className='nav-item'>
                           <a className='nav-link active' href='/register'>Register</a>
                        </li>
                        */}
                        {/* <li className='nav-item'>
                           <a className='nav-link active' href='/'>Employees List</a>
                        </li> */}
                        {/* <li className='nav-item'>
                           <a className='nav-link active' href='/applyleave'>Apply For Leave</a>
                    </li> */}
                        

                    </ul>
                }
                </div>
            </div>

        </nav>
        
    </div>
  )
}

export default Navbar