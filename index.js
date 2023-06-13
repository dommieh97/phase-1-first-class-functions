const { spy } = require("chai")

function receivesAFunction(callback)
{
    callback(spy)
};

function returnsANamedFunction(hmm)
{
    hmm = `Ice Cream`;
    return function hmm(){};
}

function returnsAnAnonymousFunction()
{
    return function (){}
}