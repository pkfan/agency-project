function appendHeadScriptsAtBody({
  defer = false,
  addStringAtStart,
  removeStringFromStart,
  srcWithDataSrc = false,
}) {
  return {
    name: "append-head-scripts-at-body",

    transformIndexHtml(html, ctx) {
      const replaceScriptFromHead = (htmlHead) => {
        let script = "";
        const regExpForScriptTagsSelection = new RegExp(
          "<script[^<>]+[^<>]+></script>"
        );

        let htmlHeadResult = htmlHead.replace(
          regExpForScriptTagsSelection,
          (match) => {
            script = `\n\t\t${match}`;
            return "";
          }
        );
        return { script, htmlHeadResult };
      };

      const replaceAllScriptFromHead = (htmlHead) => {
        let scripts = "";
        let htmlFinalHead = htmlHead;
        while (true) {
          let { script, htmlHeadResult } = replaceScriptFromHead(htmlFinalHead);

          if (!(script && script.trim() != "")) {
            break;
          }
          if (addStringAtStart) {
            script = script.replace('src="', `src="${addStringAtStart}`);
          }
          if (removeStringFromStart) {
            script = script.replace(`src="${removeStringFromStart}`, `src="`);
          }
          if (defer) {
            const srcIndex = script.indexOf("src=");
            script =
              script.slice(0, srcIndex) + " defer " + script.slice(srcIndex);
            // script = script.split(' ')
          }

          htmlFinalHead = htmlHeadResult;
          scripts = scripts + script;
        }

        return { scripts, htmlFinalHead };
      };

      const extractHeadTagsFromHtml = (htmlInput) => {
        const regExpForHeadTagsSelection = new RegExp("<head>(.|\n)*?</head>");

        let htmlHead = "";

        let htmlResultWithBodyTagsOnly = htmlInput.replace(
          regExpForHeadTagsSelection,
          (match) => {
            htmlHead = match;
            return "";
          }
        );

        return { htmlHead, htmlResultWithBodyTagsOnly };
      };

      const htmlTagStartingLength = (htmlResultWithBodyTagsOnly) => {
        // e.g [ ( <html lang="en"> ) of length 17 ] and [ ( <html> ) of length 6 ]
        const htmlStartTag = new RegExp("<html(.|\n)*?>").exec(
          htmlResultWithBodyTagsOnly
        )[0];
        const indexOfHtmlstartingTag =
          htmlResultWithBodyTagsOnly.indexOf(htmlStartTag);

        return htmlStartTag.length + indexOfHtmlstartingTag;
      };

      const concatHeadIntoHtml = ({
        htmlFinalHead,
        htmlResultWithBodyTagsOnly,
      }) => {
        const htmlStartTagLength = htmlTagStartingLength(
          htmlResultWithBodyTagsOnly
        );
        const startSlice = htmlResultWithBodyTagsOnly.slice(
          0,
          htmlStartTagLength
        );
        const endSlice = htmlResultWithBodyTagsOnly.slice(htmlStartTagLength);
        return `${startSlice}\n${htmlFinalHead}\n${endSlice}`;
      };

      const replaceSrcWithDataSrc = (htmlResultWithBodyTagsOnly) => {
        // console.log(htmlResultWithBodyTagsOnly);
        return htmlResultWithBodyTagsOnly.replaceAll("src=", "data-src=");
      };

      const appendScriptsIntoHtmlEndBodyTag = ({ htmlResult, scripts }) =>
        htmlResult.replace("</body>", `\t\t${scripts}\n\t</body>`);

      if (ctx.chunk.isEntry) {
        let { htmlHead, htmlResultWithBodyTagsOnly } =
          extractHeadTagsFromHtml(html);

        if (srcWithDataSrc) {
          htmlResultWithBodyTagsOnly = replaceSrcWithDataSrc(
            htmlResultWithBodyTagsOnly
          );
        }

        const { scripts, htmlFinalHead } = replaceAllScriptFromHead(htmlHead);
        const htmlResult = concatHeadIntoHtml({
          htmlFinalHead,
          htmlResultWithBodyTagsOnly,
        });

        html = appendScriptsIntoHtmlEndBodyTag({ htmlResult, scripts });
      }

      return html;
    },
  };
}

export default appendHeadScriptsAtBody;
