import { selectItemType } from "@/config/types/types";

export enum ENUM_USER_ROLE {
    NONE = '',
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    SUPPLIER = 'supplier',
    SELLER = 'seller',
}

export enum ENUM_USER_RANK {
    NONE = "",
    BRONZE = 'bronze',
    PLATINUM = 'platinum',
    DIAMOND = 'diamond',
}

export enum ENUM_USER_STATUS {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BANNED = 'banned',
}

export enum GenderEnum {
    // MALE = "male",
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

type gender = GenderEnum.MALE | GenderEnum.FEMALE | GenderEnum.OTHER;
type rank = ENUM_USER_RANK.NONE | ENUM_USER_RANK.BRONZE | ENUM_USER_RANK.DIAMOND | ENUM_USER_RANK.PLATINUM;
type status = ENUM_USER_STATUS.ACTIVE | ENUM_USER_STATUS.INACTIVE | ENUM_USER_STATUS.BANNED;
type role = ENUM_USER_ROLE.ADMIN | ENUM_USER_ROLE.SUPPLIER | ENUM_USER_ROLE.SELLER | ENUM_USER_ROLE.CUSTOMER;

export interface IUserFormInput {
    name: string;
    username: string,
    email: string,
    mobile: {
        primary: string,
        secondary?: string,
    },
    address: {
        present: string,
        city: selectItemType,
    },
    gender: selectItemType,
    rank: selectItemType,
    status: selectItemType,
    role: selectItemType,
    password: string,
    confirmPassword: string,
    description?: string,
}