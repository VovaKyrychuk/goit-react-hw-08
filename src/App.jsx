import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useSelector } from "react-redux";
import { selectContactsNumber, selectError } from "./redux/selectors";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState("delete");
  const [id, setId] = useState("");
  const contactsNumber = useSelector(selectContactsNumber);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);

  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
    }
  }, [error]);

  const searchRef = useRef();

  const handleScroll = (id) => {
    const dims = searchRef.current.getBoundingClientRect();

    window.scrollTo({
      top: dims.top,
      behavior: "smooth",
    });
    setFlag("change");
    setId(id);
  };

  return (
    <div>
      <div className="wrapper">
        <h1>Phonebook</h1>
        <h2 className="num">{contactsNumber} contacts</h2>
      </div>

      <ContactForm ref={searchRef} flag={flag} id={id} setFlag={setFlag} />
      <SearchBox />
      <ContactList handleScroll={handleScroll} />
      <Toaster position="top-right"></Toaster>
    </div>
  );
}

export default App;
