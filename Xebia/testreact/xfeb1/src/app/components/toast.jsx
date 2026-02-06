
function toast(props) {
  return (
    <div className="toast toast-start">
      <div className="alert alert-info">
        <span className="text-2xl font-medium">{props.name}</span>
      </div>
      <div className="alert alert-success">
        <span className="text-xl font-mono">{props.age}</span>
      </div>
    </div>
  );
}

export default toast;
