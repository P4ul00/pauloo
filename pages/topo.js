import Link from 'next/link'
export default function topo(){
    return(
        <h3><Link href="./">Menu</Link> <Link href= "./pagina2">Página 2</Link> <Link href= "./pagina3">Página 3</Link></h3>
    )
}