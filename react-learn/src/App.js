// import './App.css';
// import List from './components/List'
// import About from './components/About '
// // import Countries from './components/Countries'
// import CountryHooks from "./hooks-components/CountryHooks";
import Quote from "./hooks-components/Quote";


// function getRandom(){
//   let test = [1,2,3,5]
//    console.log(test)
//   return test;

// }

function App() {
  return (
    <div className="App">
       {/* <List />
       <About
            resetIndex={20}
            showBtn="true" 
            color="red" 
            title='App Title' 
            users={["Alice", "Bob", "Charlie"]} /> */}
       {/* <About title='App Title2' users={["Alice", "Bob", "Charlie"]} getRandomFun={getRandom} /> */}
       {/* <Countries /> */}
       {/* <CountryHooks /> */}
       <Quote />

    </div>
  );
}

export default App;


// we can send variable as props , function , styling 
