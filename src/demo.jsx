import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({});
  let foodsObj = {};
  const foods = ["Fish", "Chicken", "Salade", "Pizza", "Sushi"];
  const handleChange = name => event => {
    if (name === "all") {
      for (const food of foods) {
        foodsObj = { ...foodsObj, [food]: event.target.checked };
      }
      setState(foodsObj);
    } else {
      setState({ ...state, [name]: event.target.checked });
    }
  };
  const handleAll = () => {
    let counter = 0;
    Object.keys(state).map(stat => {
      if (state[stat]) counter++;
      return counter;
    });
    return counter === foods.length;
  };
  return (
    <FormGroup row>
      <ul style={{ listStyle: "none" }}>
        <li>
          <FormControlLabel
            control={
              <Checkbox
                checked={handleAll()}
                onChange={handleChange("all")}
                value="all"
                indeterminate={
                  !handleAll() && Object.values(state).includes(true)
                }
              />
            }
            label="Check All"
          />
        </li>

        <ul style={{ listStyle: "none" }}>
          {foods.map(food => (
            <li>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[food] === true}
                    onChange={handleChange(food)}
                    value={food}
                  />
                }
                label={food}
              />
            </li>
          ))}
        </ul>
      </ul>
    </FormGroup>
  );
}
