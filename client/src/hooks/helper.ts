
import classNames from "classnames";
import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from 'react-redux'
// import type { TypedUseSelectorHook } from 'react-redux'
// import { AppDispatch, RootState } from "src/redux-rtk/app/store";

export const cx = classNames;

export const exceptTagsSymbols = ["<", ">", "^", "/"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Add/Remove checked item from list
export const checkHandler = (checkedPermissions: string[], setCheckedPermissions: (checkedPermissions: string[]) => void) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        var updatedList = [...checkedPermissions];
        if (event.target.checked) {
            updatedList = [...checkedPermissions, event.target.value];
        } else {
            updatedList.splice(checkedPermissions.indexOf(event.target.value), 1);
        }
        setCheckedPermissions(updatedList);
    }
};