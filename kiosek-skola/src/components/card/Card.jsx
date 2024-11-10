export const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Zde bude nadpis aktuality</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Autor aktuality (Možnost volby)</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">Datum: x </h6>
          <p className="card-text">
            Zase někdo hulí na hajzlech. Fakt nečekané .
          </p>
       {/** <button type="button" className="btn btn-primary">a</button>*/}   
        </div>
      </div>
    </>
  );
};
