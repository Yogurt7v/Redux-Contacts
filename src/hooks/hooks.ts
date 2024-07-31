import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "src/store/store";
import { useSelector } from "react-redux";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector