import React, { Component } from 'react';
import RepositoryComponent from './Repository-component';
import api from '../../services/api';
import './styles.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                title: '',
                url: '',
                techs: '',
            },
            repositories: [],
        }

        this.handleSubmitData = this.handleSubmitData.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.handleDeleteData = this.handleDeleteData.bind(this);
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <a href="#home"><h1 id="title">MyRepositories</h1></a>
                </header>
            </div>
        );
    }
}

export default Home;