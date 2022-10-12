function TokenDist() {
  return (
    <div className="token-dist">
      <div className="container-fluid h-100" contentEditable="false">
        <div className="row mt-0 mb-lg-5 pb-5" contentEditable="false">
          <div
            className="col-lg-12 text-center mb-lg-5 mt-5"
            contentEditable="false"
          >
            <h1 className="fw-bold" contentEditable="false">
              Token <span className="txt-red">Distribution</span>
            </h1>
          </div>
        </div>
        <div className="row w-100 desktop-token-view" contentEditable="false">
          <div className="col-md-6 m-auto pb-5" contentEditable="false">
            <div className="token-sale__graph" contentEditable="false">
              <div
                className="token-50 token-sale__graph-ico text-center token-sale__graph-info"
                contentEditable="false"
              >
                <h5 className="fs-22" contentEditable="false">
                  <strong>50%</strong>
                </h5>{" "}
                <strong>Liquidity Rewards (Locked)</strong>
              </div>
              <div
                className="token-sale__graph-ico__shadow"
                contentEditable="false"
              />
              <div
                className="token-10-t-l text-center token-sale__graph-info"
                contentEditable="false"
              >
                <h5 className="fs-22" contentEditable="false">
                  <strong>10%</strong>
                </h5>
                <span>
                  <strong>Growth Hacking</strong>
                </span>
              </div>
              <div
                className="token-10-b-l text-center token-sale__graph-info"
                contentEditable="false"
              >
                <h5 className="fs-22" contentEditable="false">
                  <strong>10%</strong>
                </h5>
                <span>
                  <strong>Liquidity</strong>
                </span>
              </div>
              <div
                className="token-10-t-r text-center token-sale__graph-info"
                contentEditable="false"
              >
                <h5 className="fs-22" contentEditable="false">
                  <strong>10%</strong>
                </h5>
                <span>
                  <strong>Team - locked</strong>
                </span>
              </div>
              <div
                className="token-10-b-r text-center token-sale__graph-info"
                contentEditable="false"
              >
                <h5 className="fs-22" contentEditable="false">
                  <strong>20%</strong>
                </h5>
                <span>
                  <strong>Public Sale</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TokenDist;
