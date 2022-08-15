import React from 'react'
import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'
import Image from 'next/image'

const Guitarra = ({guitarra}) => {

    const {descripcion, imagen, titulo, precio} = guitarra

  return (
    <Layout
        pagina={`Guitarra ${titulo}`}
    >
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen para ${titulo}`} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form className={styles.formulario}>
                        <label>Cantidad</label>
                        <select>
                            <option value={""}>-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input 
                            type='submit'
                            value="Agregar al carrito"
                        />
                    </form>
                </div>
            </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra: guitarra[0]
        }
    }

}

export default Guitarra
