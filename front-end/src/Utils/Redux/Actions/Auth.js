const setAuthInfo = ({ token, isAdmin, name, email }) => ({
    type: "SET_AUTH_INFO",
    token,
    isAdmin, 
    name,
    email
})

export const logout = () => ({
    type: "LOG_OUT"
})

export default setAuthInfo