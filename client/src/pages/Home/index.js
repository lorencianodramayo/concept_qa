import React, { useEffect } from 'react';

import _ from 'lodash';

import Cookies from 'js-cookie';

import jwt_decode from 'jwt-decode';

import { Typography } from 'antd';

import team from 'assets/images/team.svg';
import logo from 'assets/images/smartly.svg';

export default function Home() {
  const handleCallbackResponse = (response) => {
    sessionStorage.setItem(
      'jwt',
      JSON.stringify(jwt_decode(response.credential))
    );
    console.log(jwt_decode(response.credential));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '362071139380-krc9kbot24eidhca5j7k5rue4fvrhoji.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  useEffect(() => {
    console.log(_.isEmpty(Cookies.get('g_state')));
  }, [Cookies.get('g_state')]);

  return (
    <div className="home">
      <div className="sso-auth">
        <div id="signInDiv"></div>
      </div>
      <img className="logo" src={logo} alt="smartly_logo" />
      <div className="container">
        <div>
          <Typography.Title
            level={1}
            style={{ fontWeight: 700, margin: 0, padding: 0, color: '#1d1853' }}
          >
            Concept
          </Typography.Title>
          <Typography.Title level={1} className="qa_tool_title">
            QA Tool
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{ fontWeight: 500, margin: 0, padding: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography.Title>
        </div>

        <img src={team} alt="team_logo" />
      </div>
    </div>
  );
}
