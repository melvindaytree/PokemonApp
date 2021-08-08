import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch } from './store'


//THIS IS NEW PATTERN  for people new to ts
export const useAppDispatch = () => useDispatch<AppDispatch>();

//alisasing the function and adding type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
