import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../feature/appSlice'

const MenuIcon = () => {
    let showMenu = useSelector((state)=> state.app.showSidebar)
    let dispatch = useDispatch()
    
  return (
<div
  onClick={()=> dispatch(toggleSidebar(!showMenu))}
  className="cursor-pointer w-6 h-6 relative flex items-center justify-center">
  <div
    className={`absolute w-full h-0.5 bg-dark-main dark:bg-white rounded-lg transition-all
    ${showMenu ? 'rotate-45' : '-translate-y-2'}`}></div>

  <div
    className={`absolute w-full h-0.5 bg-dark-main dark:bg-white rounded-lg transition-all
    ${showMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></div>

  <div
    className={`absolute w-full h-0.5 bg-dark-main dark:bg-white rounded-lg transition-all
    ${showMenu ? '-rotate-45' : 'translate-y-2'}`}></div>
</div>

  )
}

export default MenuIcon