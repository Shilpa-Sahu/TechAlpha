import TextField from '@mui/material/TextField';  
import Button from '@mui/material/Button';
   import "./searchBox.css";
export default function SearchBox(){
	return(
		<div className="searchBox"> 
		<h3> Search for the weather</h3>
	       <form>
		   <TextField id="city" label="City Name" variant="outlined"  required/> <br/>  <br/>  <br/>
		   <Button variant="contained" type='Submit'>
		   Search
		 </Button>
		   </form>
		</div>
	);
}