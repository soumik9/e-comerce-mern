import { MdOutlineSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";

export const dashboardLink = '/dashboard'

export const dashboardLayoutUrls = [
    dashboardLink
];

export const dashboardMenuItems = [
    { to: dashboardLink, text: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
    { to: "/item", text: "Items", icon: <MdProductionQuantityLimits /> },
    { to: "/user", text: "Users", icon: <PiUserSwitch /> },
];

export const iconSize = 'text-[22px] relative -top-[1px]'