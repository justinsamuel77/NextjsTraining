import Link from 'next/link';
// import axios from 'axo'
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()

    return {
        props: { users: json }
    }
}

const document = ({ users }) => {
    const router = useRouter()
    console.log(router, 'routerrouter')
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link href={`document/${user.id}`}>{user.name}</Link>
                        </div>
                    )
                })}
        </div >
    )
}

export default document