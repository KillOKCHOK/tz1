import Link from "next/link";

export const getStaticProps = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const contacts = await response.json();
    return {
        props:{
            contacts:contacts
        }
    };
}
function ClientPage({contacts}) {
    return ( <div>
        <h1>Clients Page</h1>
        <h2>Contacts</h2>
        <ul>
            {contacts&&contacts.map(contact=>{
                return <Link href={"/client/"+contact.id} key={contact.id}><li ><strong>{contact.name}</strong> {contact.email}</li></Link>
            })}
        </ul>
    </div> );
}

export default ClientPage;