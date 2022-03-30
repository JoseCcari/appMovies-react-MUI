
import { makeStyles } from "@mui/styles";


const centerStyleObj = {
    display : 'flex',
    alignItems : 'center',
    justifyContent: 'center'
}
export default makeStyles ( {
    container : {
        height: '100vh',
        flexDirection: 'column',
        ...centerStyleObj,
    },
    cardContainer: {
        flexDirection: 'column',
        width: '400',
        height: '200',
        padding: '2rem',
        ...centerStyleObj
    },
    title: {
        fontSize: '3rem'
    },
    titleGridContainer: {
        ...centerStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    buttonsContainer: {
        marginTop: '1rem'
    }

})