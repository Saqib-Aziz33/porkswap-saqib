import { Container, Accordion } from "react-bootstrap";

function Faqs() {
  return (
    <div className="faqs mt-5 py-5">
      <Container>
        <h1 className="text-center fw-bold mb-5">FAQs</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is PorkSwap?</Accordion.Header>
            <Accordion.Body>
              PorkSwap is a decentralized platform for spot and futures trading.
              You can trade any BEP-20 tokens on Binance Smart Chain. It
              eliminates trusted intermediaries and unnecessary forms of rent
              extraction, allowing for fast, efficient trading. Porkswap will be
              open-source under GPL license.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I use PorkSwap?</Accordion.Header>
            <Accordion.Body>
              First you’ll need a Binance Smart Chain Wallet and some BNB. Once
              completed, head over to the app to start using the platform to
              provide liquidity to spot or leverage pool and place orders.
              Remember that each transaction on BSC costs BNB (this is called
              the “gas fee” and it’s paid to miners to keep the network
              running).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>How does Spot Trading Work?</Accordion.Header>
            <Accordion.Body>
              <p>
                PorkSwap uses an improved version of Uniswap's automated market
                maker protocol by utilizing liquidity pools.
              </p>
              <p>
                In practical terms this means there are template smart contracts
                that define a standard way to make liquidity pools and
                corresponding markets that are compatible with each other. There
                is no orderbook, no centralized party and no central facilitator
                of trade. Each pool is defined by a smart contract that includes
                a few functions to enable swapping tokens, adding liquidity and
                more. At its core each pool uses the function x*y=k to maintain
                a curve along which trades can happen. The pools keep track of
                reserves(liquidity) and update those reserves every single time
                someone trades. Because the reserves are automatically
                rebalanced a Porkswap pool can always be used to buy or sell a
                token without requiring a counterparty on the other side of your
                trade.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How does Futures Trading Work?</Accordion.Header>
            <Accordion.Body>
              <p>
                PorkSwap uses oracles for determining real-time price of tokens,
                which then can be leveraged by borrowing liquidity from the
                lending pool. You can leverage a trade up to 5X, when you use
                leverage, you're given Proxy tokens which can later be exchanged
                to real underlying tokens when you close a leveraged trade.
              </p>
              <p>
                Borrowing funds cost around 2.4% interest per day, if you
                provide liquidity to the lending pool you make 2.4% on funds
                borrowed from you.
              </p>
              <p>
                To reward initial liquidity providers, we tend to prioritize
                funds on a first-come first serve basis.
              </p>
              <p>
                Since primary input to oracle is current spot platform pricing,
                that is refreshed on each trade and new block mined when your
                futures trade hits the liquidation price the smart contract
                automatically liquidates and closes your position and returns
                borrowed funds back to the lending pool.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>What is PorkSwap?</Accordion.Header>
            <Accordion.Body>
              PorkSwap is a decentralized platform for spot and futures trading.
              You can trade any BEP-20 tokens on Binance Smart Chain. It
              eliminates trusted intermediaries and unnecessary forms of rent
              extraction, allowing for fast, efficient trading. Porkswap will be
              open-source under GPL license.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>How do I use PorkSwap?</Accordion.Header>
            <Accordion.Body>
              First you’ll need a Binance Smart Chain Wallet and some BNB. Once
              completed, head over to the app to start using the platform to
              provide liquidity to spot or leverage pool and place orders.
              Remember that each transaction on BSC costs BNB (this is called
              the “gas fee” and it’s paid to miners to keep the network
              running).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>How does Spot Trading Work?</Accordion.Header>
            <Accordion.Body>
              <p>
                PorkSwap uses an improved version of Uniswap's automated market
                maker protocol by utilizing liquidity pools.
              </p>
              <p>
                In practical terms this means there are template smart contracts
                that define a standard way to make liquidity pools and
                corresponding markets that are compatible with each other. There
                is no orderbook, no centralized party and no central facilitator
                of trade. Each pool is defined by a smart contract that includes
                a few functions to enable swapping tokens, adding liquidity and
                more. At its core each pool uses the function x*y=k to maintain
                a curve along which trades can happen. The pools keep track of
                reserves(liquidity) and update those reserves every single time
                someone trades. Because the reserves are automatically
                rebalanced a Porkswap pool can always be used to buy or sell a
                token without requiring a counterparty on the other side of your
                trade.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>How does Futures Trading Work?</Accordion.Header>
            <Accordion.Body>
              <p>
                PorkSwap uses oracles for determining real-time price of tokens,
                which then can be leveraged by borrowing liquidity from the
                lending pool. You can leverage a trade up to 5X, when you use
                leverage, you're given Proxy tokens which can later be exchanged
                to real underlying tokens when you close a leveraged trade.
              </p>
              <p>
                Borrowing funds cost around 2.4% interest per day, if you
                provide liquidity to the lending pool you make 2.4% on funds
                borrowed from you.
              </p>
              <p>
                To reward initial liquidity providers, we tend to prioritize
                funds on a first-come first serve basis.
              </p>
              <p>
                Since primary input to oracle is current spot platform pricing,
                that is refreshed on each trade and new block mined when your
                futures trade hits the liquidation price the smart contract
                automatically liquidates and closes your position and returns
                borrowed funds back to the lending pool.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
export default Faqs;
