import React from 'react'
import { Card } from './card/Card'

export const ContactList = ({users}) => {
    
    
    return (
    <div className="row">
        

        {/* Spinner */}

        {users.length ?(
            users.map((usr, i) =>
                <Card key={i} user={usr}/>
            )
       
        ) : (
            
        <h5>User Not Found</h5>
         
         ) }

        {/* Cards */}

        
       

        
    </div>
  )
}
