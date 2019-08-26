import React from 'react';
import Input from "../Input/Input";


const DropdownForm = props => {
    const {submit, change, elements} = props;
    return (
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Réserver
            </a>

            <div className="dropdown-menu">
                <form className="px-4 py-3" onSubmit={submit}>
                    {elements.map(element => {
                        return <Input id={element.label}
                                      key={element.label}
                                      label={element.label}
                                      change={() => change()}
                                      mb={element.mb}
                                      type={element.type}
                                      value={element.value}
                        />
                    })}
                    <button type="submit" className="btn btn-primary">Valider</button>
                </form>
            </div>
        </div>
    )
};

export default DropdownForm;