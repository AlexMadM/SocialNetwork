import {StateType} from "../../redux/Redux-store";
import {Dispatch} from "redux";
import {followChangerAC, getUsersAC, UserType} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import {Users} from "./UsersBlock";




type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    followChanger: (id: number)=> void
    getUsers: (users: UserType[])=> void
}

export type UserContainerType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (store: StateType): MapStateToPropsType=> {
    return {
        users: store.users.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
    return {
        followChanger: (userId: number)=>dispatch(followChangerAC(userId)),
        getUsers: (users: UserType[])=> dispatch(getUsersAC(users))
    }
}

export const UsersContainer  =  connect(mapStateToProps, mapDispatchToProps)(Users)

