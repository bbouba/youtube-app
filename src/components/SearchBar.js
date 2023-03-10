import { useState } from 'react';

function SearchBar ({ onFormSubmit }) {
    const [term, setTerm] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term)
    }

    return <div>
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term}
                        onChange={(e) => setTerm(e.target.value)} 
                    />
                </div>
            </form>
        </div>
    </div>

}

export default SearchBar;