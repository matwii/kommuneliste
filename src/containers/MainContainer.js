import React, {Component} from 'react';
import MunicipalList from '../components/MunicipalList/MunicipalList';
import Spinner from '../components/Spinner';
import SearchInput from '../components/SearchInput/SearchInput'
import RadioButtonGroup from '../components/RadioButtonGroup/RadioButtonGroup';
import "./MainContainer.css"

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: [],
            searchString: ''
        }
    }

    /**
     * Retrieves data before component is mounted
     */
    componentWillMount() {
        this.getData();
    }

    /**
     * Fetches the list of municipalities in Norway. When fetched these are set as state.
     * @returns {Promise<void>}
     */
    async getData() {
        //Checks if data is stored in localstorage before fetching from internet
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (storedData) {
            //If found, sets data as state
            this.setState({loading: false, data: storedData});
            return storedData;
        }
        //If not found in LocalStorage, fetching data from internet.
        try {
            let response = await fetch('https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json');
            let responseJson = await response.json();
            if (responseJson) {
                //Sorts the array based on the municipaliti number
                responseJson.containeditems.sort((a, b) => a.label - b.label);
                localStorage.setItem('data', JSON.stringify(responseJson.containeditems));
                this.setState({data: responseJson.containeditems, loading: false})
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Updates list when user types text in search field.
     * @param event
     */
    onTextChange = (event) => {
        this.setState({searchString: event.target.value});
    };

    render() {
        let { data, searchString } = this.state;
        if (searchString.length > 0) {
            return data.filter((i) => i.label.match( searchString ) || i.description.toLowerCase().match(searchString.toLowerCase()))
        }
        if (this.state.loading) {
            return (
                <Spinner/>
            )
        }
        return (
            <div className="container">
                <h2>Kommunesøk</h2>
                <div className="row">
                    <SearchInput
                        onTextChange={this.onTextChange}
                    />
                    <div className="col-md-2" />
                    <div className="input-group col-md-4 col-sm-12">
                        <RadioButtonGroup />
                    </div>
                </div>
                <MunicipalList
                    list={data}
                />
            </div>
        )
    }
}

export default MainContainer;