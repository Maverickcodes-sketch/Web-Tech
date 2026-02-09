// in normal props we have to access each prop separately but in destructuring we can access all the props at once by using destructuring syntax and rest operator is used to access any other props that we want to pass in future without changing the existing code
function toast({name, age, color,...rest}) {//destructuring normal props and rest operator(if we want to pass any other props in future we can use rest operator to access them) 
  return (
    <div className="toast toast-start">
      <div className={`alert alert-${color}`}>//destructuring props
        <span className="text-2xl font-medium">{name}</span>
      </div>
      <div className="alert alert-success">
        <span className="text-xl font-mono">{age}</span>
      </div>
    </div>
  );
}

export default toast;
