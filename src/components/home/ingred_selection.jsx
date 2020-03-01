import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    campari: false,
    sweet_vermouth: false,
    gin: false,
    tonic: false,
    vodka: false,
    dry_vermouth: false,
    bourbon: false,
    bitters: false,
    rum: false,
    lime_juice: false,
    sugar: false,
    ginger_beer: false, 
    cognac: false,
    orange_liqueur: false,
    tequila: false,
    champagne: false,
    
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { campari, sweet_vermouth, gin, tonic, vodka, dry_vermouth, bourbon, bitters, rum, lime_juice, sugar, ginger_beer, cognac, orange_liqueur, tequila, champagne } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Choose your Ingredients</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={campari} onChange={handleChange('campari')} value="campari" />}
            label="Campari"
          />
          <FormControlLabel
            control={<Checkbox checked={sweet_vermouth} onChange={handleChange('sweet_vermouth')} value="sweet_vermouth" />}
            label="Sweet Vermouth"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gin} onChange={handleChange('gin')} value="gin" />
            }
            label="Gin"
          />
            <FormControlLabel
            control={<Checkbox checked={tonic} onChange={handleChange('tonic')} value="tonic" />}
            label="Tonic"
          />
          <FormControlLabel
            control={<Checkbox checked={vodka} onChange={handleChange('vodka')} value="vodka" />}
            label="Vodka"
          />
          <FormControlLabel
            control={
              <Checkbox checked={dry_vermouth} onChange={handleChange('dry_vermouth')} value="dry_vermouth" />
            }
            label="Dry Vermouth"
          />
          <FormControlLabel
            control={<Checkbox checked={bourbon} onChange={handleChange('bourbon')} value="bourbon" />}
            label="Bourbon"
          />
          <FormControlLabel
            control={<Checkbox checked={bitters} onChange={handleChange('bitters')} value="bitters" />}
            label="Bitters"
          />
          <FormControlLabel
            control={
              <Checkbox checked={rum} onChange={handleChange('rum')} value="rum" />
            }
            label="Rum"
          />
            <FormControlLabel
            control={<Checkbox checked={lime_juice} onChange={handleChange('lime_juice')} value="lime_juice" />}
            label="Lime Juice"
          />
          <FormControlLabel
            control={<Checkbox checked={sugar} onChange={handleChange('sugar')} value="sugar" />}
            label="Sugar"
          />
          <FormControlLabel
            control={
              <Checkbox checked={ginger_beer} onChange={handleChange('ginger_beer')} value="ginger_beer" />
            }
            label="Ginger Beer"
          />
            <FormControlLabel
            control={<Checkbox checked={cognac} onChange={handleChange('cognac')} value="cognac" />}
            label="Cognac"
          />
          <FormControlLabel
            control={<Checkbox checked={orange_liqueur} onChange={handleChange('orange_liqueur')} value="orange_liqueur" />}
            label="Orange Liqueur"
          />
          <FormControlLabel
            control={
              <Checkbox checked={tequila} onChange={handleChange('tequila')} value="tequila" />
            }
            label="Tequila"
          />
            <FormControlLabel
            control={
              <Checkbox checked={champagne} onChange={handleChange('champagne')} value="champagne" />
            }
            label="Champagne"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
        </FormControl>
    </div>
  );
}