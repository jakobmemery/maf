// netlify/functions/redirect.js
exports.handler = async (event, context) => {
    const currentDomain = event.queryStringParameters.sub1;
    const affiliateUrl = `https://www.sailgeneral.com/299P9SR4/WBZ58D8/?sub1=${currentDomain}`;

    return {
        statusCode: 200,
        body: affiliateUrl
    };
};
