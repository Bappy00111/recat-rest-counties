
import './App.css'
import Countries from './component/Countries/Countries'




function App() {


  return (
   <div className='app'>
    {/* <LoadCountries></LoadCountries> */}
    <Countries></Countries>
   </div>
  )
}

// function LoadCountries(){
//   // frist step usedState 
//   const [countries,setCountries] = useState([])
//   // secound step useEffect 
//   useEffect(()=>{
//     // thand step data fech 
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     // four step data set the setCountries 
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Visteting Country!!!</h1>
//       <h3>countries length:{countries.length}</h3>
//       {/* six step map to data  */}
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2>Name:{props.name}</h2>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

export default App
