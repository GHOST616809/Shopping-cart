 
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Smartphones from './components/Smartphones';
import Slider from './components/Slider';
import PopItems from './components/PopItems';
import  ReactSimpleChatbot   from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Component } from 'react';
import ChatbotSmartphone from './components/ChatbotSmartphone';
import Fashion from './components/Fashion';
import Phones from './components/Phones';
import Grocery from './components/Grocery';


 
// import { Chatbot } from 'react-chatbot-kit';






function App() {


  const steps = [
    {
        id: '0',
        message: 'Hey I am Kuhl, Fuhrer of ze fazerland!',
        trigger:'1'
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
 
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Smartphones',trigger:'Smartphones' },
            { value: 2, label: 'Laptops', trigger:'Laptops'},
            { value: 2, label: 'Fashionwear',trigger:'Fashion' },
            { value: 2, label: 'Skin care',trigger:'Skin care' },
             
 
        ],
        
    },
    {
      id:"Smartphones",
      component:<ChatbotSmartphone/>,
      end:true
    },
    {
      id:"Laptops",
      message:"bhag bsdk",
      end:true
    },
    {
      id:"Fashion",
      message:"bhag bsdk",
      end:true
    },
    {
      id:"Skin care",
      message:"bhag bsdk",
      end:true
    }
    
];

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};


const config = {
    botAvatar: " https://cdn3.iconfinder.com/data/icons/iconka-buddy-set/128/robot_128.png",
    floating: true,
};

  return (
    <div  >
      <Router>
      <Navbar></Navbar>
      

      <ThemeProvider theme={theme}><ReactSimpleChatbot steps={steps} headerTitle="KuhlBot" {...config} /></ThemeProvider>
      
       <Routes>
       
       <Route path="/Home" element={<Home></Home>}>
      
    
    </Route>
    

    

    <Route path="/Slider" element={<Slider></Slider>}>
    
    
    </Route>
    
    <Route path="/Fashion" element={<Fashion></Fashion>}>
    
    
    </Route>

    <Route path="/Smartphones" element={<Phones></Phones>}>
      
    
      </Route>
      <Route path="/Grocery" element={<Grocery></Grocery>}>
      
    
      </Route>
    

    <Route path="/Cart" element={<Cart></Cart>}>
    
    
    </Route>
    <Route path="/PopItems" element={<PopItems></PopItems>}>
    
    
    </Route>
    
    

    </Routes>
       
    </Router>
    </div>
  );
}

export default App;
