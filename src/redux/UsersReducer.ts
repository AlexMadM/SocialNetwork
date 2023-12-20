




const initialState: UsersType = {
    users: []
}

type UsersType = {
    users: UserType[]
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export const Usersreducer = (state = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case 'FOLLOW-CHANGER': {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
        }
        case "GET-USERS": {
            return {...state, users: action.users}
        }
        default:
            return state
    }
}

type ActionType = FollowChangerAC | GetUsersAC

type FollowChangerAC = ReturnType<typeof followChangerAC>
type GetUsersAC = ReturnType<typeof getUsersAC>


export const followChangerAC = (userId: number) => {
    return {
        type: 'FOLLOW-CHANGER',
        userId
    } as const
}

export const getUsersAC = (users: UserType[]) => {
    return {
        type: 'GET-USERS',
        users
    } as const
}


// [ {
//     id: 1,
//     status: 'привет',
//     photos: {
//         small: "",
//         large: ""
//     },
//     name: 'Max',
//     followed: true,
// },
//     {
//         id: 2,
//         status: 'привет',
//         photos: {
//             small: "",
//             large: ""
//         },
//         name: 'Constantine',
//         followed: true,
//     },
//     {
//         id: 3,
//         status: 'привет',
//         photos: {
//             small: "",
//             large: ""
//         },
//         name: 'Egor',
//         followed: false
//     }
//     , {
//     id: 4,
//     status: 'привет',
//     photos: {
//         small: "",
//         large: ""
//     },
//     name: 'Artem',
//     followed: false
// }]