import { LinkInfoContext } from "../context/LinkInfoContext";
import { AdminLink } from "../RouteInfo";
import { LoggedLink } from "../RouteInfo";
import { GuestLink } from "../RouteInfo";

export const LinkInfoProvider = ({ children }) => {

    const getLinkDetails = (role ) => {
        switch (role) {
            case "guest":
                return GuestLink;

            case "admin":
                return AdminLink;

            case "customer":
                return LoggedLink;
                
            default:
                return GuestLink
        }
    };


    return (
        <LinkInfoContext.Provider value={{getLinkDetails}}>
            {children}
        </LinkInfoContext.Provider>
    )
}
