import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { RepoContext } from '../../context';

const useStyles = makeStyles({
  table: {
    maxWidth: 500,
  },
});

const RepoTable: React.FC = () => {
	const classes = useStyles();
	const {repositories} = useContext(RepoContext);


  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Stars</TableCell>
            <TableCell align="right">Forks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories?.map((repository, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
							<Link href={`https://github.com/${repository.full_name}`} target="_blank">
								{repository.full_name}
							</Link>	
							</TableCell>
              <TableCell align="right">{repository.stargazers_count}</TableCell>
              <TableCell align="right">{repository.forks_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RepoTable;
