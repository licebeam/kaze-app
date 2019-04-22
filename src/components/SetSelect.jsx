import React, { Component } from 'react';
import styled from 'styled-components';
import core100 from '../json-data/core1000/core100';
import core200 from '../json-data/core1000/core200';
import core300 from '../json-data/core1000/core300';
import core400 from '../json-data/core1000/core400';
import core500 from '../json-data/core1000/core500';
import core600 from '../json-data/core1000/core600';
import core700 from '../json-data/core1000/core700';
import core800 from '../json-data/core1000/core800';
import core900 from '../json-data/core1000/core900';
import core1000 from '../json-data/core1000/core1000';
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
      case 'core400':
        changeSet(core400, set)
        break;
      case 'core500':
        changeSet(core500, set)
        break;
      case 'core600':
        changeSet(core600, set)
        break;
      case 'core700':
        changeSet(core700, set)
        break;
      case 'core800':
        changeSet(core800, set)
        break;
      case 'core900':
        changeSet(core900, set)
        break;
      case 'core1000':
        changeSet(core1000, set)
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
            <option value='core400'>Set 301-400</option>
            <option value='core500'>Set 401-500</option>
            <option value='core600'>Set 501-600</option>
            <option value='core700'>Set 601-700</option>
            <option value='core800'>Set 701-800</option>
            <option value='core900'>Set 801-900</option>
            <option value='core1000'>Set 901-1000</option>
          </select>
        ) : null
        }
      </div>
    )
  }
}

export default SetSelect