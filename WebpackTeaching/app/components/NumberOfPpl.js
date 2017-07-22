import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 250,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class NumberOfPpl extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, index, value){
    this.setState({value})
  }

  render() {
    return (
      <div>
        <SelectField id="numPplSelect"
          floatingLabelText="How many people?"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={6} primaryText="6" />
          <MenuItem value={7} primaryText="7" />
          <MenuItem value={8} primaryText="8" />
          <MenuItem value={9} primaryText="9" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={11} primaryText="11" />
          <MenuItem value={12} primaryText="12" />
        </SelectField>
      </div>
    );
  }
}
