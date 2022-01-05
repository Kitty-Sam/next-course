import Link from 'next/link'
import Container from "../components/Container";
import style from './../styles/error.module.css'

export default function Error() {
    return (
        <Container>
            <h1 className={style.error}>
                error | page not found
            </h1>
            <p>Please, <Link href={'/'}><a>go back</a></Link> to safe page</p>
        </Container>
    )
}