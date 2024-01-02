
export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()

    return {
        props: { users: json }
    }
}

export default function contact({users}) {
    console.log(users)
    return (
        <div>contact</div>
    )
}
