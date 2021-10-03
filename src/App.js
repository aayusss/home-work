import React, {useState, useEffect } from 'react'
import Login from './components/Login'
import { Switch,Route, BrowserRouter } from 'react-router-dom'
import CreateAccount from './components/CreateAccount';
import Home from "./components/Home"
import Logout from './components/Logout'
import { useDispatch } from 'react-redux';
import { auth } from './firebase/firebase';
import { setUser } from './Redux/Action';
import AddItems from './components/AddItems';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import { uuid } from 'uuidv4';
import api from './api/contact'
import EditItems from './components/EditItems';

const App = () => {
   const [contacts, setContacts] = useState([]);

   const LOCAL_STORAGE_KEY = 'contacts';
   const addContactHandler = async (contact) => {
     console.log(contact);
     const request = {
       id: uuid(),
       ...contact,
     };
     const response = await api.post('/contacts', request);
     setContacts([...contacts, response.data]);
   };
   const retrieveContacts = async () => {
     const response = await api.get('/contacts');
     return response.data;
   };
   const updateContactHandler=async (contact)=>{
     const response=await api.put(`/contacts/${contact.id}`,contact)
      const { id, name, description,price,quantity }=response.data;
      setContacts(contacts.map((contact)=>{
        return contact.id===id?{...response.data}:contact;
      }));
   };
   const deleteHandler = async (id) => {
     await api.delete(`/contacts/${id}`);
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
     });
     setContacts(newContactList);
   };
   useEffect(() => {
     const getAllContacts = async () => {
       const getContacts = await retrieveContacts();
       if (getContacts) setContacts(getContacts);
     };
     getAllContacts();
   }, []);
   useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
   }, [contacts]);

  const dispatch=useDispatch();

  useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
     if(authUser){
       dispatch(setUser(authUser));
     }
     else{
       dispatch(setUser(null));
     }
   })
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="ui container">
        <Switch>
          <Route
            exact
            path="/add"
            render={(props) => (
              <AddItems {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(props) => (
              <EditItems {...props} updateContactHandler={updateContactHandler} />
            )}
          />
          <Route
            exact
            path="/itemlist"
            render={(props) => (
              <ItemList
                {...props}
                contacts={contacts}
                getDeleteId={deleteHandler}
              />
            )}
          />
          <Route path="/contact/:id" component={ItemDetails} />
          <Logout exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={CreateAccount} />
          <Route exact path="/addItems" component={AddItems} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App
