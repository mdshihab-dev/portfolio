import SunIcon from '../assets/icons/SunIcon'
import MoonIcon from '../assets/icons/MoonIcon'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from '../feature/appSlice'

const ToggleDarkMode = () => {
   let theme = useSelector((state)=> state.app.theme)
   let dispatch = useDispatch()

   useEffect(()=>{
        let htmlElement = document.documentElement
        if (theme === 'dark') {
            htmlElement.classList.add('dark')
        }
        else{
            htmlElement.classList.remove('dark')
        }
        
    },[theme])

  return (
    <button onClick={()=> dispatch(switchTheme(theme === "light" ? "dark" : "light"))} className=' cursor-pointer'>
        {
            theme === 'light' ? <MoonIcon/> : <SunIcon/>
        }
    </button>
  )
}

export default ToggleDarkMode