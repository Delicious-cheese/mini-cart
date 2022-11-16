import { Routes, Route } from 'react-router-dom'
import Clothes from './Clothes'
import Electronic from './Electronic'
import Gift from './Gift'
import Home from './Home'
import styles from '../styles/GoodList.module.css'

const GoodsList = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/clothes' element={<Clothes />}></Route>
                <Route path='/electronic' element={<Electronic />}></Route>
                <Route path='/gift' element={<Gift />}></Route>
            </Routes>
        </div >
    )
}

export default GoodsList