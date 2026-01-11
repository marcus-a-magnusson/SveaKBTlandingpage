import Button from './Button';

const Result = ({ score, onRestart }) => {
  let title;
  let text;

  if (score <= 10) {
    title = 'Boka konsultationssamtal';
    text =
      'Dina svar tyder på att du kan ha låggradiga symtom. Ett konsultationssamtal kan hjälpa dig att förstå ditt mående och ge konkreta tips för vardagen.';
  } else if (score <= 25) {
    // Adjusted logic to match a 5-25 scale
    title = 'Boka möte med psykolog';
    text =
      'Du visar tecken på nedstämdhet som kan påverka vardagen. Det kan vara värdefullt att prata med någon professionell för stöd och vägledning.';
  } else {
    title = 'Hög påverkan';
    text =
      'Dina svar tyder på att årstidsbunden depression påverkar dig tydligt.';
  }

  return (
    <div className="survey-result">
      <div className="text-container">
        <h2>Ditt Resultat</h2>
        <p>{text}</p>
      </div>

      <div
        className="result-actions"
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {/* Main Action Call to Button */}
        <Button onClick={() => (window.location.href = '#')}>{title}</Button>

        {/* Restart Action */}
        <button
          onClick={onRestart}
          className="restart-link"
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#666',
          }}
        >
          Gör om testet
        </button>
      </div>
    </div>
  );
};

export default Result;
