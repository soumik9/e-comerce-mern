import { cx } from "@/hooks/helper";
import { MdOutlineSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";

export const dashboardLink = '/dashboard'

export const userLink = '/panel/user'
export const userAddLink = '/panel/user/add'

export const dashboardLayoutUrls = [
    dashboardLink,
    userLink
];

export const iconSize = 'text-[24px]'

export const dashboardMenuItems = [
    { to: dashboardLink, text: "Dashboard", icon: <MdOutlineSpaceDashboard className={cx(iconSize)} /> },
    { to: "/item", text: "Items", icon: <MdProductionQuantityLimits className={cx(iconSize)} /> },
    { to: userLink, text: "Users", icon: <PiUserSwitch className={cx(iconSize)} /> },
];

