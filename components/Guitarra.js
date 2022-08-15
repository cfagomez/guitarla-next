import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

    const {titulo, precio, descripcion, imagen, url} = guitarra

  return (
    <div className={styles.guitarra}>
        <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen Guitarra ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/guitarras/${url}`}>
                <a className={styles.enlace}>Ver Producto</a>
            </Link>
        </div>
    </div>
  )
}

export default Guitarra
