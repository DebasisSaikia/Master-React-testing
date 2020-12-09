const request = require("request"); //for url request ,we can also use axios
const cheerio = require("cheerio");
const fs = require("fs");

request(
  "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      //   common selector for span tag
      const selectors = $(".lbl-licitacao");

      
      //   console.log(selectors.html()); log the html tag of the element

      // const output=selectors.find('span').text()
      //   console.log(output);

      //
      $(".lbl-licitacao ").each((i, el) => {
        const item = $(el).text();

        //log all the the data along with the values in a console
        console.log(item); //final data
      });
    }
  }
);
