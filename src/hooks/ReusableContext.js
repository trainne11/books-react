import {useContext} from 'react';
import { BookContext } from '../context/books';

function useContextHook(){
    return useContext(BookContext);
}


export default useContextHook;