import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import Highlight from 'react-highlight';
import { BasicCountdown,
         FlipCountdown,
         SlideCountdown
       } from '../../src'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/gruvbox-light.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.tmp = 'fff';
  }

  render() {
    return (
      <div>

        <a href="https://github.com/AbnerLin/React-Fancy-Countdown">
          <img
            style={{position: 'absolute', top: 0, right: 0, border: 0}}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
            alt="Fork me on GitHub" />
        </a>

        <header className="text-center w-100 pt-5 pb-3">
          Fancy Countdown
          <br />
          <div className="sub-title">
            <p className="text-left">A Fancy Countdown Component for ReactJS.<br />Hope you'll like it.</p>
          </div>
        </header>

        <Container>

          <Row>
            <Col className="title m-3"><h2>Basic countdown</h2></Col>
          </Row>

          <Row>
            <Col md="6">
              <Highlight>
                {`
    <BasicCountdown
        deadline="2019-06-29 22:33:20"
        interval={1000}
        format="Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]" />
                `}
              </Highlight>
            </Col>
            <Col md="6" className="text-center my-auto basic-countdown-sample">
              <BasicCountdown
                deadline="2020-06-29 22:33:20"
                interval={1000}
                format="Y[y] M[m] W[w] D[d] HH[hrs] mm[mins] ss[secs]" />
            </Col>
          </Row>

          <hr />

          <Row>
            <Col md="6" className="text-center my-auto basic-countdown-sample">
              <BasicCountdown
                deadline="2020-06-29 22:33:20"
                interval={1000}
                format="Y[年] M[月] W[週] D[日] HH[時] mm[分] ss[秒]" />
            </Col>
             <Col md="6">
              <Highlight className="my-auto">
                {`
    <BasicCountdown
        deadline="2019-06-29 22:33:20"
        interval={1000}
        format="Y[年] M[月] W[週] D[日] HH[時] mm[分] ss[秒]" />
                `}
              </Highlight>
            </Col>
          </Row>

          <div>
            <div className="text-center">
              <BasicCountdown
                deadline="2018-06-25 13:00:00"
                interval={1000}
                format="Y[year(s)] M[months] D[days] HH:mm:ss"
                callback={ () => {
                  console.log("時間到......");
                }}
                dueElement={ <Due /> } />
            </div>

            <hr />

            <div className="text-center">
              <BasicCountdown
                deadline="2019-06-29 22:33:20"
                interval={1000}
                format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />
            </div>

            <hr />

            <div className="text-center">
              <BasicCountdown
                deadline="2019-06-30 12:39:11"
                interval={3000}
                format="Y[年] M[月] D[天] HH[時]mm[分]ss[秒]" />
              </div>
          </div>

          <hr />

          <div>

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-30 22:38:20"
                interval={1000}
                weeks={false} />
            </div>

            <hr />

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-30 01:21:00"
                interval={1000} />
            </div>

            <div className="text-center">
              <FlipCountdown
                deadline="2018-07-09 01:23:00"
                days={false}
                weeks={false}
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2019-06-30 12:39:11"
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2018-07-08 12:39:11"
                days={true}
                weeks={false}
                interval={1000} />
            </div>
          </div>

          <hr />

          <div>
            <div className="text-center">
              <SlideCountdown
                deadline="2018-07-08 12:39:11"
                days={false}
                weeks={false}
                interval={3000} />
            </div>
          </div>


        </Container>
      </div>
    );
  }
}


const Due = () => ( <div className="due">Game over!</div> );

const App1 = () => (
  <Container>

    <header>
      Header.
    </header>

    <Row>
      <Col sm="6">aa</Col>
      <Col sm="6">aa</Col>
    </Row>

    <Button color="danger">Danger!</Button>



  </Container>
);

ReactDOM.render(<App />, document.getElementById('root'));
