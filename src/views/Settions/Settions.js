import React from 'react';
import Iframe from 'react-iframe';
import firebase from '../../config/firebase';

export default class Settions extends React.Component {
  githubLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        this.props.history.push('/');
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.githubLogin}>Githubでログイン</button>
        <iframe
          src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.imuza.com%2Fentry%2F2019%2F01%2F07%2F210817"
          title="はてなブログ簡単カスタマイズ imzModules バージョンアップ - IMUZA.com"
          scrolling="no"
          frameborder="0"
        />
        <iframe
          src="https://github.com/kamimura3589/TechQues"
          title="はてなブログ簡単カスタマイズ imzModules バージョンアップ - IMUZA.com"
          scrolling="no"
          frameborder="0"
        />
        <blockquote>
          <h4>
            <a href="https://github.com/kamimura3589/TechQues">
              kamimura3589/TechQues
            </a>
          </h4>
          <p>
            開発者向けの質問サービス. Contribute to kamimura3589/TechQues
            development by creating an account on GitHub.
          </p>
        </blockquote>
        <script
          async
          src="//cdn.embedly.com/widgets/platform.js"
          charset="UTF-8"
        />
        <div>
          <div>
            <a
              href="https://spectrum.chat/next-js/"
              data-iframely-url="//cdn.iframe.ly/7OaABNL"
            />
          </div>
        </div>
        <script async src="//cdn.iframe.ly/embed.js" />
        <Iframe
          url="https://github.com/kamimura3589/TechQues"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />

        <script async src="//cdn.iframe.ly/embed.js" />
        <Iframe
          url="https://github.com/kamimura3589/TechQues"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}
