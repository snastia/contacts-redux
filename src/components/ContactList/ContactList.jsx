import { Contact } from "components/Contact/Contact"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/selectors"

export const ContactList = () => {

    const contacts = useSelector(selectContacts)

    return (
        <ul>
            {contacts.map((contact) => {
                return <Contact contact={contact}/>
            })}
        </ul>
    )
}