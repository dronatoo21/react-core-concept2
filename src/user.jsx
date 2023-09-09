import './user.css'
export default function User({user}){
    const {name, email} = user;
    return (
        <div className='box'>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
        </div>
    )
}