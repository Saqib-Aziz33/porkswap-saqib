import { Container } from "react-bootstrap";

function ComparisonTable() {
  return (
    <div className="comparison-table py-5">
      <Container className="text-center mb-5">
        <h1 className="fw-bold">Comparison Table</h1>
        <h4 className="fw-normal">
          We are building whole ecosystem tools for future identities and data.
        </h4>
      </Container>

      <Container className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>
                <img
                  src="assets/uniswap.png"
                  className="d-block mx-auto"
                  height={20}
                  alt=""
                />
              </th>
              <th>
                <img
                  src="assets/pancakeswap.png"
                  className="d-block mx-auto"
                  height={20}
                  alt=""
                />
              </th>
              <th>
                <img
                  src="assets/logo.png"
                  className="d-block mx-auto"
                  height={20}
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Automated Market Maker</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Spot Trading</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Futures Trading</td>
              <td className="text-center">❌</td>
              <td className="text-center">❌</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Governance</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Leveraged Trading</td>
              <td className="text-center">❌</td>
              <td className="text-center">❌</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Gas Fees</td>
              <td className="text-center text-danger">$71.53</td>
              <td className="text-center text-danger">$0.42</td>
              <td className="text-center text-success">$0.42</td>
            </tr>
            <tr>
              <td className="fw-bold">inflationary</td>
              <td className="text-center">❌</td>
              <td className="text-center">❌</td>
              <td className="text-center">❎</td>
            </tr>
            <tr>
              <td className="fw-bold">Deflationary</td>
              <td className="text-center">❌</td>
              <td className="text-center">❌</td>
              <td className="text-center">✔️</td>
            </tr>
            <tr>
              <td className="fw-bold">Fixed Supply</td>
              <td className="text-center">✔️</td>
              <td className="text-center">❌</td>
              <td className="text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}
export default ComparisonTable;
