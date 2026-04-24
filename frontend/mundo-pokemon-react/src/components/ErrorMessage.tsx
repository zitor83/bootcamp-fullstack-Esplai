interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

// Componente para mostrar un mensaje de error y un botón para reintentar
function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-container">
      <h2>¡Un Snorlax salvaje bloquea el camino!</h2>
      <p className="error-text">{message}</p>
      <button className="retry-button" onClick={onRetry}>
        Reintentar
      </button>
    </div>
  );
}

export default ErrorMessage;
