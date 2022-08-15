import React from 'react'
import Layout from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras'

const Tienda = ({guitarras}) => {

  return (
    <Layout
      pagina='tienda'
    >
        <h1 className='heading'>Nuestra Coleccion</h1>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
    </Layout>
  )
}

export async function getServerSideProps() {

  const url=`${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }

}

export default Tienda
