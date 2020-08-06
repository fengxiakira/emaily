const keys = require('../../config/key')
// return HTML code string as email body
// entile HTML code
// make up HTML CODE
module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-aligh : center;">
                    <h3> I'd like your input!</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                

            </body>
        <\html>
    
    `;

}