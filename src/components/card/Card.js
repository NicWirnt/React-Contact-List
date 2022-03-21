import React from 'react'
import "./card.css";

export const Card = ({user}) => {
    console.log(user)
    return (
    <div className="col-md-6 col-lg-3 py-3">
        <div className="card">
        <img src={user.picture.large} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.name.title}. {user.name.first} {user.name.last}</h5>
                <p className="card-text">
                    <ul className='list-unstyled'>
                        <li><i class="fa-solid fa-phone text-center py-1"></i> {user.phone}</li>
                        <li><i class="fa-solid fa-at text-center py-1"></i> {user.email}</li>
                        <li><i class="fa-solid fa-globe text-center py-1"></i> {user.location.country}, {user.location.city}</li>  
                    </ul>

                </p>
                
            </div>
        </div>
    </div>
  )
}
