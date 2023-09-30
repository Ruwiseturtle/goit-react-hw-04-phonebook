
import './Filter.css';

const Filter = ({ changeFilter}) => {
  
  const selectByValues = (e) => {
    changeFilter(e.target.value);
  }

    return (
      <div className="containerFilter">
        <label>
          <p className="textLabel">Find contacts by name</p>
          <input
            className="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={selectByValues}
          />
        </label>
      </div>
    );
}

export default Filter;