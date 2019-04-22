import React, { Component } from 'react';
import styled from 'styled-components';
import core100 from '../json-data/core1000/core100';
import core200 from '../json-data/core1000/core200';
import core300 from '../json-data/core1000/core300';
class SetSelect extends Component {

  changeCards = (set) => {
    const { changeSet } = this.props;
    switch (set) {
      case 'core100':
        changeSet(core100, set)
        break;
      case 'core200':
        changeSet(core200, set)
        break;
      case 'core300':
        changeSet(core300, set)
        break;

      default:
        break;
    }
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        {title === 'Core 1000' ? (
          <select onChange={(e) => this.changeCards(e.target.value)}>
            <option value='core100'>Set 1-100</option>
            <option value='core200'>Set 101-200</option>
            <option value='core300'>Set 201-300</option>
          </select>
        ) : null
        }
      </div>
    )
  }
}

export default SetSelect