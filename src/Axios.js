import axios from "axios";


const instance = axios.create({
    baseURL: "https://blog-me-567ca-default-rtdb.europe-west1.firebasedatabase.app/"
});


export default instance;

/**
 * componentDidMount() {
        axios.get('https://drs-burger.firebaseio.com/defaultIngredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: error})
        });

    }
 */