import { useState } from 'react';
import { sources } from './SourcesText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SourceDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="source-dropdown">
      <button
        className="source-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="source-button">Källor</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={open ? 'rotate' : ''}
        />
      </button>

      {open && (
        <ul className="source-list">
          {sources.map((source) => (
            <li key={source.id}>
              <span>{source.author}</span>
              <span>{source.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SourceDropdown;
