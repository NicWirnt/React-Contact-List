import {useState, useEffect} from 'react'

import './App.css';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Spinner } from './components/Spinner';
import { Title } from './components/Title';
import { fetchUser } from './helper/apiCall';


// const apiUrl = "https://randomuser.me/api/?"

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetchUser().then(data => {
      setContacts(data.results)
      setUser(data.results)
      setLoading(false);
    }
      ) ;
    },  []);

  // Call API and UPDATE THE STATE

    const handleOnGenderChange = (e) =>{
      const { value } = e.target;
      console.log(value);
      setLoading(true);
      const params = `results=20&gender=${value}`;
      fetchUser(params).then(data => {
        setContacts(data.results)
        setUser(data.results);
        setLoading(false);
      }) ;
    }

    const handleOnSearch = e =>{
      const { value } = e.target;

      // filter
      const filterArgs = user.filter((user) => {
        const userName = (user.name.first + " " + user.name.last).toLowerCase();
        if(userName.includes(value.toLowerCase()) ){
          return true;
        }
      })

      setContacts(filterArgs);
    }


  console.log("rendering completed" ,contacts)


  return (
    <div className="wrapper">
      <div className="container">
      {/* Title Section */}
      <Title />

      {/* Search and Filter Section */}
      <SearchFilter handleOnGenderChange={handleOnGenderChange} handleOnSearch={handleOnSearch} />
      <hr />

      {loading && <Spinner />}
    
      {/* User Count */}
      <div className="row">
        <div className="col">
          {contacts.length} user found
        </div>
      </div>
      {/* Contact List Card */}
      <ContactList users={contacts} />
      </div>
    </div>
  );
}

export default App;
