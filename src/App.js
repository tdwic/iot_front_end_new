import logo from './logo.svg';
import './App.css';
import { Card, Grid } from '@mui/material';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import mongoose from 'mongoose';

function App() {

  // useEffect(() => {
  //   mongoose.connect('mongodb+srv://abc:Abcd%4012345@cluster0.zeg68da.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

  //   const changeStream = mongoose.model('DistanceData').watch();

  //   changeStream.on('change', (data) => {
  //     console.log("data ", data)
  //     setData(data);
  //   });

  //   return () => {
  //     changeStream.close();
  //   };
  // }, []);

  return (
    <div>
      sdsds
    </div>
  );
}

export default App;
