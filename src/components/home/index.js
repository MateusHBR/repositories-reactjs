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
    
    componentDidMount() {
        api.get('/repositories').then(response => (
            this.setState({ repositories: response.data })
        ));
    }

    handleSubmitData = (event) => {
        let { title, url, techs } = this.state.form;

        const myTechs = techs.split(', ');

        const request = {
            title,
            url,
            techs: myTechs,
        };

        api.post('/repositories', request).then(response => {
            this.setState({
                repositories: [...this.state.repositories, response.data], 
                form: {
                    title: '',
                    url: '',
                    techs: '',
                }
            });
        });

        event.preventDefault();
    }

    onChangeData = (newValue) =>  {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <a href="#home"><h1 id="title">MyRepositories</h1></a>
                </header>
                <form className="form"  onSubmit={this.handleSubmitData} >
                    <input name="title" value={this.state.form.title} onChange={this.onChangeData} type="text" placeholder="Título do repositório" className="textfield"></input>
                    <input name="url" value={this.state.form.url} onChange={this.onChangeData} type="text" placeholder="URL do repositório" className="textfield"></input>                
                    <input name="techs" value={this.state.form.techs} onChange={this.onChangeData} type="text" placeholder="Techs do repositório" className="textfield"></input>
                    <input type="submit" className="submit" value="Enviar"/>
                </form>
                <div className="divider"/>   
                <RepositoryComponent repositories={this.state.repositories} handleDeleteData={this.handleDeleteData}/>
            </div>
        );
    }
}

export default Home;