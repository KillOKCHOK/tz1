export const getServerSideProps = async (context)=>{
    const {id} = context.params;
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const contact = await response.json();
    return {
        props:{
            contact:contact
        }
    };
}

function SingleClientPage({contact}) {
    return ( <div>
        <h1>Single Client Page</h1>
        <p>{contact.name}</p>
    </div> );
}

export default SingleClientPage;