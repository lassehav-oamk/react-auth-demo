import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {

  return (
    <div>
      This is the home page for the whole application.
      <div>
          { props.userJwt != null ? <Link to="protected">Go to protected view</Link> :
              <>
                <Link to="signup">Sign up</Link><br />
                <Link to="login">Login</Link>
              </>
          }
      </div>
    </div>
  )
}
