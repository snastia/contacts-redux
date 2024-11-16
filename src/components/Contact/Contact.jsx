export const Contact = ({contact}) => {
    return(
        <li key={contact.id}> 
        <p>
           {contact.name}: {contact.num}  
        </p>
         <button type="button">Видалити</button>
        </li>
    )
}