import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';

function RepositoryComponent({ repositories, handleDeleteData }) {
  return (
    <section className="content">
        {repositories.map(repository => (
            <article className="item" key={repository.id}>
                <header className="article-title">
                    <h3>{repository.title}</h3> 
                    <IconButton aria-label="delete" onClick={() => handleDeleteData(repository.id)}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </header>
                <div className="divider"/>   
                <ul className="list-techs">
                    {repository.techs.map(tech => (
                        <li key={`${Date.now()} ${Math.floor(Math.random() * 10000)}`}>
                            <a href="#tech" className="tech">{tech}</a>
                        </li>
                    ))}
                </ul>
                <div className="divider"/>   
                <a href={repository.url} rel="noopener noreferrer" target="_blank" className="repository-link">Repositório</a>
            </article>
        ))}
    </section>
  );
}

export default RepositoryComponent;