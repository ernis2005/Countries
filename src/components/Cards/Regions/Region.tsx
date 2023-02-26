import React, { FC, } from 'react'
import "./style.scss";
interface person {
    title: string,
    id?: any,
    onClick?: () => void

}
const Region: FC<person> = ({ title, id, onClick }) => {
    return (
        <div className='block' onClick={onClick} id={id}>
            <p>{title}</p>
        </div>
    )
}

export default Region
