import React, { useState } from 'react'
import { UserInfoContext } from '../context/UserInfoContext'

const UserInfoProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({
        u_username: "Guest",
        u_phone: "0000000000",
        u_password: "Guest@123",
        u_cpassword: "Guest@123",
        u_role: "guest",
        u_address: "ABX"
    });

    const userInfoDetails = (userObj) => {
        if (userObj) {

            setUserInfo({
                u_username: userObj.username,
                u_phone: userObj.phone,
                u_password: userObj.password,
                u_cpassword: userObj.cpassword,
                u_role: userObj.role,
                u_address: userObj.address,
            })

        } else {
            setUserInfo({
                u_username: "Guest",
                u_phone: "0000000000",
                u_password: "Guest@123",
                u_cpassword: "Guest@123",
                u_role: "guest",
                u_address: "ABX"
            })
        }
    }

    return (
        <>
            <UserInfoContext.Provider value={{ userInfo, userInfoDetails }}>
                {children}
            </UserInfoContext.Provider>
        </>
    )
}

export default UserInfoProvider;