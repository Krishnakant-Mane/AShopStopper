export const CommonLink = [
    {
        linkname: "🏠︎home",
        linkurl: "/home"
    },
    {
        linkname: "👨🏻‍💻ContactUs",
        linkurl:"/contact"
    },
    {
        linkname:"🖍AboutUs",
        linkurl:"/aboutus"
    }
]


export const AdminLink = [
    {
        linkname:"👤Profile",
        linkurl:"/profile"
    },
    {
        linkname:"🛒Cart",
        linkurl:"/cart"
    },
    ...CommonLink,
]


export const GuestLink = [
    {
        linkname:"SignUp",
        linkurl:"/signup"
    },
    {
        linkname:"Login",
        linkurl:"/login"
    },
    ...CommonLink,
]

export const LoggedLink = [
    {
        linkname:"👤Profile",
        linkurl:"/profile"
    },
    {
        linkname:"🛍️OrderDetails",
        linkurl:"/orderdetails"
    },
    {
        linkname:"🛒Cart",
        linkurl:"/cart"
    },
    ...CommonLink,
]