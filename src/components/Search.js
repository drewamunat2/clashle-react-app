import { Grid } from "@mui/material";
//import PropTypes from "prop-types";
//import axios from "axios";
import Select from 'react-select'

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#b7c9e2",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#00d5ff" : state.isDisabled ? "#d3d3d3" : "blue",
    cursor: state.isDisabled ? 'not-allowed' : 'text',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor:  "#00d5ff",
    },
    height: "50px"
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  }),
  option: base => ({
    ...base,
    cursor: 'grab'
  })
};

const customStylesMobileBig = {
  control: (base, state) => ({
    ...base,
    background: "#b7c9e2",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#00d5ff" : state.isDisabled ? "#d3d3d3" : "blue",
    cursor: state.isDisabled ? 'not-allowed' : 'text',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor:  "#00d5ff",
    },
    height: "50px"
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    height: '175px'
  }),
  option: base => ({
    ...base,
    cursor: 'grab'
  })
};

const names = [
  {
    label: 'Valk',
    id: 'Valk',
  },
  {
    label: 'Knight',
    id: 'Knight',
  },
];

function Search (props) {

  const { noTurn, isCorrect } = props

  const handleChange = (selectedOption) => {
    
  }

  if(noTurn || isCorrect) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
          <Select 
            styles={customStyles}
            placeholder={null}
            isDisabled={true}
            controlShouldRenderValue={false}
            components={{
              IndicatorSeparator: () => null
            }}
          />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ display: {xs:'none', sm:'flex'}}}
        >
          <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
            <Select 
              styles={customStyles}
              placeholder={null}
              options={names}
              onChange={handleChange()}
              autoFocus={false}
              closeMenuOnSelect={true}
              controlShouldRenderValue={false}
              openMenuOnClick={true}
              openMenuOnFocus={false}
              captureMenuScroll={false}
              escapeClearsValue={true}
              menuShouldBlockScroll={true}
              cacheOptions={true}
              blurInputOnSelect={true}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ display: {xs:'flex', sm:'none'}}}
        >
          <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
            <Select 
              styles={customStylesMobileBig}
              placeholder={null}
              options={names}
              onChange={handleChange()}
              autoFocus={false}
              closeMenuOnSelect={true}
              controlShouldRenderValue={false}
              openMenuOnClick={true}
              openMenuOnFocus={false}
              captureMenuScroll={false}
              escapeClearsValue={true}
              menuShouldBlockScroll={true}
              cacheOptions={true}
              blurInputOnSelect={true}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
  
}

export default Search;

/*Search.propTypes = {
  updateCharacters: PropTypes.func.isRequired,
  updateColors: PropTypes.func.isRequired,
  updateOutOfTurns: PropTypes.func.isRequired
};*/