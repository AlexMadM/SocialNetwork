import { Usersreducer, UserType } from './UsersReducer'

describe("Usersreducer", () => {
    const initialState = {
        users: []
    }

    test("should return the initial state", () => {
        expect(Usersreducer(undefined, {} as ActionType)).toEqual(initialState)
    })

    test("should handle FOLLOW-CHANGER action", () => {
        const userId = 1
        const users = [
            { id: 1, name: "User 1", status: "Active", photos: { small: "", large: "" }, followed: false },
            { id: 2, name: "User 2", status: "Active", photos: { small: "", large: "" }, followed: true }
        ]
        const action = { type: "FOLLOW-CHANGER", userId }
    })

    test("should handle GET-USERS action", () => {
        const users = [
            { id: 1, name: "User 1", status: "Active", photos: { small: "", large: "" }, followed: false },
            { id: 2, name: "User 2", status: "Active", photos: { small: "", large: "" }, followed: true }
        ]
        const action = { type: "GET-USERS", users }})
})

