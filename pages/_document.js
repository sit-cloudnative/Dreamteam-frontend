import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body { background-color: #e5e3df } /* custom! */`}</style>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          {this.props.styleTags}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`} />
        </Head>
        <style jsx global>{`
          body { 
            background: #f7f7f7;
            font: 11px menlo;
          }
          .navbar a {
            border-radius: 20%;           
          }
          .navbar a:hover {
            background: #0091ac;
            opacity: 80%;
            border-radius: 5%;
          }
          div.videoCard :hover {
            webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.1);
            moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.1);
            box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.1);
            -ms-transform: scale(1.02); 
            -webkit-transform: scale(1.02);
            transform: scale(1.02); 
          }
          h6.card-subtitle {
            font-size: 16px;
          }
          p.card-text {
            font-size: 16px;
          }
        input.searchBar[type=text] {
          width: 200px;
          height: 30px;
          box-sizing: border-box;
          border: 2px solid #ccc;
          border-radius: 10em;
          font-size: 16px;
          background-color: white;
          background-image: url('../static/images/icon/search-icon.png');
          background-position: 10px 5px; 
          background-repeat: no-repeat;
          padding: 12px 20px 12px 40px;
          -webkit-transition: width 0.4s ease-in-out;
          transition: width 0.4s ease-in-out;
          }
        `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}