import { selectItemType } from "@/config/types/types";
import { districtOptions } from "./districtOptions";
import { ENUM_USER_RANK, ENUM_USER_ROLE, ENUM_USER_STATUS, GenderEnum } from "./UserInterface";

export const userStatusOptions: selectItemType[] = [
    { _id: 'status1', label: 'Active', value: ENUM_USER_STATUS.ACTIVE },
    { _id: 'status2', label: 'Inactive', value: ENUM_USER_STATUS.INACTIVE },
    { _id: 'status3', label: 'Banned', value: ENUM_USER_STATUS.BANNED },
]

export const genderOptions: selectItemType[] = [
    { _id: 'gender1', label: 'Male', value: GenderEnum.MALE },
    { _id: 'gender2', label: 'Female', value: GenderEnum.FEMALE },
    { _id: 'gender3', label: 'Other', value: GenderEnum.OTHER },
]

export const rankOptions: selectItemType[] = [
    { _id: 'uT1', label: 'Select Rank', value: ENUM_USER_RANK.NONE },
    { _id: 'uT1', label: 'Bronze', value: ENUM_USER_RANK.BRONZE },
    { _id: 'uT2', label: 'Platinum', value: ENUM_USER_RANK.PLATINUM },
    { _id: 'uT3', label: 'Diamond', value: ENUM_USER_RANK.DIAMOND },
]

export const rolesOptions: selectItemType[] = [
    { _id: 'roleOp0', label: 'Select Role', value: ENUM_USER_ROLE.NONE },
    { _id: 'roleOp1', label: ENUM_USER_ROLE.ADMIN, value: ENUM_USER_ROLE.ADMIN },
    { _id: 'roleOp2', label: ENUM_USER_ROLE.SELLER, value: ENUM_USER_ROLE.SELLER },
    { _id: 'roleOp4', label: ENUM_USER_ROLE.SUPPLIER, value: ENUM_USER_ROLE.SUPPLIER },
    { _id: 'roleOp3', label: ENUM_USER_ROLE.CUSTOMER, value: ENUM_USER_ROLE.CUSTOMER },
];

export const userDefaultValues = {
    name: '',
    username: '',
    email: '',
    mobile: {
        primary: '',
        secondary: '',
    },
    address: {
        present: '',
        city: districtOptions[0],
    },
    gender: genderOptions[0],
    rank: rankOptions[0],
    status: userStatusOptions[0],
    role: rolesOptions[0],
    password: '',
    confirmPassword: '',
    description: '',
}

