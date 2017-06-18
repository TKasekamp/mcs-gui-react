import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PingResponse from '../components/Terminal/responses/PingResponse';
import PongResponse from '../components/Terminal/responses/PongResponse';
import PosResponse from '../components/Terminal/responses/PosResponse';

const ping = {
  timestamp: '2017-06-01T21:12:55.8575978Z'
};

const pong = {
  timestamp: '2017-06-01T21:12:55.8575978Z'
};

const pos = {
  lla_x: 23.123,
  lla_y: 23.123,
  lla_z: 23.123,
  pos_x: 23.123,
  pos_y: 23.123,
  pos_z: 23.123
};


storiesOf('Command Responses', module)
    .add('responses', () => ( <div className="card card-block">
        <h1>Command Responses</h1>
        <p>
          All command responses displayed here
        </p>

        <h2>Ping</h2>
          <div>
          <p>A command to verify ICP connection and provide an estimate for latency.</p>
            <h6>Example</h6>
            <div>
              <PingResponse body={ping}/>
            </div>
          </div>

          <h2>Pong</h2>
            <div>
            <p>A command to verify ICP connection and provide an estimate for latency.</p>
              <h6>Example</h6>
              <div>
                <PongResponse body={pong}/>
              </div>
            </div>

            <h2>Position</h2>
              <div>
              <p>Satellite position in orbit.</p>
                <h6>Example</h6>
                <div>
                  <PosResponse body={pos}/>
                </div>
              </div>
      </div>)
    );
