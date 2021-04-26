import React, { useState, useContext, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../../services/api';
import { RepoContext } from '../../context';

const useStyles = makeStyles({
  button: {
    height: '56px',
  },
});

const SearchInput: React.FC = () => {
	const [newRepo, setNewRepo] = useState('');
	const {repositories, setRepositories} = useContext(RepoContext);
	const classes = useStyles();

	async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const response = await api.get(`repos/${newRepo}`);

		const repository = response.data;
		if (repositories) {
			setRepositories([...repositories, repository]);
		} else {
			setRepositories(repository);
		}
		setNewRepo('');
	}

	return (
		<form onSubmit={handleAddRepository} noValidate autoComplete='off'>
			<TextField 
				value={newRepo}
				onChange={e => setNewRepo(e.target.value)} 
				id='repo-input'
				label='Repository'
				variant='outlined'
			/>
			<Button className={classes.button} type='submit' variant='contained' color='primary' disableElevation>
				Search
			</Button>
		</form>
	)
}

export default SearchInput;
