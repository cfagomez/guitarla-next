import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layout
        pagina="Nosotros"
    >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre Nosotros'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a purus metus. In tortor neque, maximus ut feugiat at, condimentum id leo. In a tristique turpis, sed commodo ligula. Aenean vitae est a erat facilisis vehicula. Vestibulum a mattis justo, sed lacinia nisl. Ut mattis in felis sed fermentum. Aliquam efficitur, nibh sit amet porta accumsan, mi eros lacinia tellus, a rhoncus magna leo volutpat est. Morbi feugiat gravida ante non dapibus. Pellentesque accumsan lectus id ipsum pretium vulputate vitae eget quam. Etiam vitae orci sit amet dui suscipit venenatis. Cras quis felis eget augue tincidunt dapibus sit amet at nisl. Donec eu suscipit nulla.
                Maecenas interdum elit eu lectus ornare, vel vestibulum dolor auctor. Cras facilisis volutpat magna ut vehicula. Duis eu sapien mi. Phasellus fermentum arcu nec urna consectetur, eu ullamcorper nisl sagittis. Curabitur sed pharetra quam. Fusce pulvinar egestas lacus, ac posuere dolor rutrum vitae. Vivamus vel aliquam nisi, sit amet consectetur nunc. Nam sed tincidunt dui. Proin sed orci ac justo varius porttitor. Nullam quis blandit odio, et porta turpis. Quisque commodo risus felis, quis feugiat arcu convallis condimentum.
                </p>
            </div>
        </main>
    </Layout>
  )
}

export default nosotros
