import Link from 'next/link'
export default function topo(){
    return(
        <>
        <h3><Link href="./">Menu</Link></h3>
        <h3><Link href="./pagina2">Página 2</Link></h3>
        <h3><Link href="./pagina3">Página 3</Link></h3>
        </>
    )
}