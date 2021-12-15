import { makeStyles } from '@mui/styles';

const productStyles: any = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        margin: '50px auto',
        textAlign: 'center'
    },
    productsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    loaderContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loader: {
        width: '30vw'
    }
});

export default productStyles;