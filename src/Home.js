import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from './Contexts';

export default function Home() {

  const userAuthContextValue = useContext(UserAuthContext);

  return (
    <div>
      This is the home page for the whole application.
      <div>
        { userAuthContextValue.jwt != null ?
          <Link to="protected">Go to protected view</Link>
          :
          <>
            <Link to="signup">Sign up</Link><br />
            <Link to="login">Login</Link>
          </>
        }
      </div>
    </div>
  )
}
