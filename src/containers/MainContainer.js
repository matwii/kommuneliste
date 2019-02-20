import React, {Component} from 'react';
import MunicipalList from '../components/MunicipalList/MunicipalList';
import Spinner from '../components/Spinner';
import SearchInput from '../components/SearchInput'
import "./MainContainer.css"

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            municipalities: []
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
        try {
            let response = await fetch('https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json');
            let responseJson = await response.json();
            console.log(responseJson);
            if (responseJson) {
                //Sorts the array based on the municipaliti number
                responseJson.containeditems.sort((a, b) => a.label - b.label);
                this.setState({municipalities: responseJson.containeditems})
            }
            this.setState({loading: false});
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Updates list when user types text in search field.
     * @param event
     */
    onTextChange = (event) => {
        console.log(event.target.value)
    };

    render() {
        if (this.state.loading) {
            return (
                <Spinner/>
            )
        }
        return (
            <div className="container">
                <h2>Kommunesøk</h2>
                <div className="row">
                    <SearchInput onTextChange={this.onTextChange}/>
                    <div className="input-group col-md-6 col-sm-12">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-light">
                                <input type="radio" name="options" id="option1" autoComplete="off"/> Active
                            </label>
                            <label className="btn btn-light">
                                <input type="radio" name="options" id="option2" autoComplete="off"/> Inactive
                            </label>
                            <label className="btn btn-light active">
                                <input type="radio" name="options" id="option3" autoComplete="off"/> All
                            </label>
                        </div>
                    </div>
                </div>
                <MunicipalList
                    list={this.state.municipalities}
                />
            </div>
        )
    }
}

export default MainContainer;