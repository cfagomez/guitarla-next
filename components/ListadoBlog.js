import React from 'react'
import styles from '../styles/Blog.module.css'
import Entrada from './Entrada'

const ListadoBlog = ({entradas}) => {
  return (
    <>
        <h2 className='heading'>Blog</h2>
        <div className={styles.blog}>
            {
                entradas.map(entrada => (
                    <Entrada 
                        entrada={entrada}
                        key={entrada.id}
                    />
                ))
            }
        </div>
    </>
  )
}

export default ListadoBlog
