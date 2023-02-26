import  {configureStore} from "@reduxjs/toolkit"
import countries from  './Api'
 export default configureStore({
    reducer:{
        Countriesname:countries
    }
 })