import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
  	return (
  		<Scroll>
  			<SearchList filteredPersons={filteredPersons} />
  		</Scroll>
  	);
  }

  return (
    <section className="search-section garamond">
			<div className="container">
				<div className="search-wrap">
					<div className="navy georgia ma0 grow">
						<h2 className="f2">Search your course</h2>
					</div>
					<div className="row pa2">
						<input 
							className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
							type = "search" 
							placeholder = "Search People" 
							onChange = {handleChange}
						/>
					</div>
					{searchList()}
				</div>
			</div>
		</section>
  );
}

export default Search;