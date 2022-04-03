import React , {useState} from 'react'
import { Container , Typography , Card, Grid , TextField , Button} from '@mui/material'
import styles from './style'
function Home() {
	const [searchText , setSearchText] = useState("");
  const clases = styles()
	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value)
	}
	const handleCleanClick = (event) => {
		console.log(event)
	}
	const handleSearchClick = (event) => {
		console.log(event)
	}
  return (
	<Container className= {clases.container}> 
		<Card className= {clases.cardContainer}>
			<Grid container className= {clases.titleGridContainer}>
				<Grid>
					<Typography className= {clases.title}> Bienvenido</Typography>
				</Grid>
				<Grid>
					<label> Icono</label>
				</Grid>

			</Grid>
			<TextField 
			value= {searchText}
			placeholder='Buscar'
			onChange={handleSearchTextChange}
      className= {clases.TextFieldSearch}
			/>
			<Grid className= {clases.buttonsContainer} >
					<Button variant= "outlined" onClick={handleCleanClick}> Limpiar</Button>
					<Button 
          variant= "contained" 
          color="primary" 
          size ="large"  
          onClick={handleSearchClick} 
          className= {clases.searchButton}
          > Buscar</Button>
			</Grid>

		</Card>
	</Container>
  )
}

export default Home