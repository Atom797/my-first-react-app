import axios from 'axios'
import usersCss from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    if (props.users.length === 0) {
       
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            debugger;
            props.setUsers(response.data.items)
        })
        // props.setUsers([
        //     { id: 0, name: "Зульфия", followed: true, status: 'Я гений', location: { city: 'Kazan', country: 'Russia', }, profileAvatar: "https://www.1zoom.ru/prev2/138/137683.jpg" },
        //     { id: 1, name: "Бабашан", followed: false, status: 'Я турок', location: { city: 'Махачкала', country: 'Таджикистан', }, profileAvatar: "https://shutnikov.club/wp-content/uploads/2019/12/054a2c6c723ecc37d1e8b27c420354ec.png" },
        //     { id: 2, name: "Тимур", followed: true, status: 'Я жимолость', location: { city: 'Kazan', country: 'Russia', }, profileAvatar: "https://www.meme-arsenal.com/memes/54e922a5757c64f82fce6d2172143f8c.jpg" }
        // ])
    }

    return (
        <div>
            {
                props.users.map(i =>
                    <div key={i.id} className={usersCss.mainContainer}>
                        <div className={usersCss.followContainer}>
                            <img src={i.profileAvatar!=null ? i.profileAvatar : userPhoto} className={usersCss.img} />
                            {i.followed ? <button onClick={() => { props.unfollow(i.id) }}>Unfollow</button> : <button onClick={() => { props.follow(i.id) }}>Follow</button>}
                        </div>
                        <div className={usersCss.informationContainer}>
                            <div сlassName={usersCss.userContent}>
                                <div>{i.name}</div>
                                <div>{i.status}</div>
                            </div>
                            <div сlassName={usersCss.userContent}>
                                <div>{"i.location.country"}</div>
                                <div>{"i.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;