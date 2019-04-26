import React, { Component } from 'react';
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
import core1100 from '../json-data/core2000/core1100';
import core1200 from '../json-data/core2000/core1200';
import core1300 from '../json-data/core2000/core1300';
import core1400 from '../json-data/core2000/core1400';
import core1500 from '../json-data/core2000/core1500';
import core1600 from '../json-data/core2000/core1600';
import core1700 from '../json-data/core2000/core1700';
import core1800 from '../json-data/core2000/core1800';
import core1900 from '../json-data/core2000/core1900';
import core2000 from '../json-data/core2000/core2000';
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
      case 'core1100':
        changeSet(core1100, set)
        break;
      case 'core1200':
        changeSet(core1200, set)
        break;
      case 'core1300':
        changeSet(core1300, set)
        break;
      case 'core1400':
        changeSet(core1400, set)
        break;
      case 'core1500':
        changeSet(core1500, set)
        break;
      case 'core1600':
        changeSet(core1600, set)
        break;
      case 'core1700':
        changeSet(core1700, set)
        break;
      case 'core1800':
        changeSet(core1800, set)
        break;
      case 'core1900':
        changeSet(core1900, set)
        break;
      case 'core2000':
        changeSet(core2000, set)
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
        {title === 'Core 2000' ? (
          <select onChange={(e) => this.changeCards(e.target.value)}>
            <option value='core1100'>Set 1001-1100</option>
            <option value='core1200'>Set 1101-1200</option>
            <option value='core1300'>Set 1201-1300</option>
            <option value='core1400'>Set 1301-1400</option>
            <option value='core1500'>Set 1401-1500</option>
            <option value='core1600'>Set 1501-1600</option>
            <option value='core1700'>Set 1601-1700</option>
            <option value='core1800'>Set 1701-1800</option>
            <option value='core1900'>Set 1801-1900</option>
            <option value='core2000'>Set 1901-2000</option>
          </select>
        ) : null
        }
      </div>
    )
  }
}

export default SetSelect