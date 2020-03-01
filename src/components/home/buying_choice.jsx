import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


class Buying_choice extends Component{
  state={
    buy:false
  }
  render(){
        return(
          <div>
      <FormControl variant="outlined">
      <InputLabel>
      </InputLabel>
      <Select
        native
        onChange={handleChange => {this.setState({buy: handleChange.target.value})}}
        autoWidth
      >
        <option value=""/>
        <option value= {true} >Yes</option>
        <option value= {false} >No</option>
      </Select>
      </FormControl>
          </div>
      );
      }
      }
export default Buying_choice





/*

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';




const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      buy: '',
      name: 'hai',
    });
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    const handleChange = ()=>{
      setState({
        buy: state.buy = "yes"
      })
    };

        return(
            <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="buying-choice">
          Select
        </InputLabel>
        <Select
          native
          value={state.buy}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: 'buy',
            id: 'buying-choice',
          }}
        >
          <option value=""/>
          <option value= "yes" >Yes</option>
          <option value= "no" >No</option>
        </Select>
      </FormControl>
            </div>
        );
}


*/