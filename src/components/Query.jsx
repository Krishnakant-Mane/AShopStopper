import React, { useEffect, useState } from 'react'
import { UserInfoContext } from "../context/UserInfoContext";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";

export const Query = () => {
    const { userInfo } = useContext(UserInfoContext);
    const navigate = useNavigate()
    
    useEffect(() => {
    
        if(userInfo.u_role!='admin' )
        {
            navigate("/home")
        }
    })
    

    const [message, setMessage] = useState(
        JSON.parse(localStorage.getItem('message') || [])
    )

    const whatsAppReply = (m) => {
        const phoneNumber = `${m.phone}`

        const message = `Hello ${m.firstName} ${m.lastName}
        Your Query: ${m.message}`

        const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsAppUrl, '_blank')
    }

    const emailReply = (m) => {
        const subject = "Reply to your query"

        const body = `Hello ${m.firstName} ${m.lastName},

        Regarding your query:
        ${m.message}

        Thanks & Regards`

        const emailUrl = `mailto:${m.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        window.open(emailUrl)
    }

    if (!message || message.length === 0 ) {
            return (
                <div className="h-screen flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl font-semibold">No Query</h2>
                </div>
            );
    }


    return (
        <>
            <div className="w-full min-h-screen overflow-x-auto">
                <table className="w-full border border-collapse table-fixed rounded-2xl">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2 w-[10%]">First Name</th>
                            <th className="border p-2 w-[10%]">Last Name</th>
                            <th className="border p-2 w-[15%]">Email</th>
                            <th className="border p-2 w-[10%]">Phone</th>
                            <th className="border p-2 w-[35%]">Message</th>
                            <th className="border p-2 w-[20%] text-center">Reply</th>
                        </tr>
                    </thead>

                    <tbody>
                        {message.map((m, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="border p-2 ">{m.firstName}</td>
                                <td className="border p-2 ">{m.lastName}</td>
                                <td className="border p-2 ">{m.email}</td>
                                <td className="border p-2 ">{m.phone}</td>

                                {/* Wider Message Column */}
                                <td className="border p-2 ">
                                    {m.message}
                                </td>

                                {/* Buttons WITHOUT flex abuse */}
                                <td className="border p-2 text-center space-x-2">
                                    <button
                                        onClick={() => whatsAppReply(m)}
                                        className="px-4 py-2 rounded-2xl bg-green-500 text-white"
                                    >
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={() => emailReply(m)}
                                        className="px-4 py-2 rounded-2xl bg-blue-500 text-white"
                                    >
                                        Email
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>

    )
}
