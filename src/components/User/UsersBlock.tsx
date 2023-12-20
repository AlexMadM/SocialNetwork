import {UserContainerType} from "./UsersContainer";
import axios from "axios";

export const Users = (props: UserContainerType) => {

const {users, followChanger, getUsers}=props



    const mapedUsers = users.map(user=> <div>
        <span>{user.name}</span>
        <div>
            <button onClick={()=>followChanger(user.id)} >{user.followed
                ? 'FOLLOW'
                : 'UNFOLLOW'
            }</button>
        </div>
    </div>)

    const getUsersHandler = () => {
      (axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
          response=>(getUsers(response.data.items))
      ))

    }

    return (
        <div>
            <button onClick={getUsersHandler}>GET USERS</button>
            {mapedUsers}
        </div>
    );
};

