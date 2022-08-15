import Curso from "../components/Curso";
import Layout from "../components/Layout";
import ListadoGuitarras from "../components/ListadoGuitarras";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({guitarras, cursos, entradas}) {

  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[0]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>
      <Curso 
        cursos={cursos}
      />
      <section className="contenedor">
        <ListadoBlog 
          entradas={entradas}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([

    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
    
  ])

  const [guitarras, cursos, entradas] = await Promise.all([

    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()

  ])

  return {
    props: {
      guitarras,
      cursos,
      entradas
    }
  }

}
